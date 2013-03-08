# config/compass.rb
#We use our css3-foundation project, which organizes scss files into subdirectories. 
#Compass won’t allow us to load partial scss files from these directories unless we 
#explicitly add them to the Compass load path.
#http://blog.55minutes.com/2012/01/getting-compass-to-work-with-rails-31-and-32/
#additional_import_paths = ["app/assets/stylesheets/bootstrap", "app/assets/stylesheets"]