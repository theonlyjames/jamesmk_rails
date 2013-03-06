require 'bundler/capistrano'

set :application, "jamesmkcom"


# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "jamesmk.com"                          # Your HTTP server, Apache/etc
role :app, "jamesmk.com"                          # This may be the same as your `Web` server
role :db,  "jamesmk.com", :primary => true # This is where Rails migrations will run

set :deploy_to, "/home3/fouseenm/rails/jamesmkcom" 
set :deploy_via, :remote_cache
set :use_sudo, false

set :scm, :git
set :repository, "ssh://github.com/theonlyjames/jamesmk_rails.git" 
set :branch, "master" 

set :user, "fouseenm" 

after "deploy:update_code" do
  run "ln -s #{shared_path}/database.yml #{release_path}/config/database.yml" 
  run "rm -rf /home3/fouseenm/public_html/jamesmkcom" 
  run "ln -s #{release_path}/app/views/welcome /home3/fouseenm/public_html/jamesmkcom" 
  #run "cd #{release_path} ; RAILS_ENV=production bundle exec rake assets:precompile --trace" 
end

namespace :deploy do
  task :start, :roles => :app do
    restart
  end

  task :restart, :roles => :app do
    run "touch #{File.join(current_path, "tmp", "restart.txt")}" 
  end
end