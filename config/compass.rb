# project_type = :rails
# project_path = Compass::AppIntegration::Rails.root

# http_path = "/"

# environment = Compass::AppIntegration::Rails.env
# if environment == 'production'
#   css_dir = "tmp/stylesheets"
#   sass_dir = "app/assets/stylesheets"
# else
#   css_dir = "public/stylesheets"
#   sass_dir = "app/stylesheets"
# end
# Then modify 'config/initializers/compass.rb':

# require 'compass'
# require 'compass/app_integration/rails'
# Compass::AppIntegration::Rails.initialize!

# require 'fileutils'
# FileUtils.mkdir_p(Rails.root.join("tmp", "stylesheets"))

# environment = Compass::AppIntegration::Rails.env
# if environment == 'production'
#   Compass::AppIntegration::Rails.initialize!

#   Rails.configuration.middleware.delete('Sass::Plugin::Rack')
#   Rails.configuration.middleware.insert_before('Rack::Sendfile', 'Sass::Plugin::Rack')

#   Rails.configuration.middleware.insert_before('Rack::Sendfile', 'Rack::Static',
#       :urls => ['/stylesheets'],
#       :root => "#{Rails.root}/tmp")
# end