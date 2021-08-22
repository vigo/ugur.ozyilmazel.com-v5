require 'rubygems'
require 'bundler'
Bundler.require
require 'time'

task :default => [:preview]

desc "Run server"
task :preview do
  system "middleman serve"
end

desc "Deploy"
task :deploy do
  now = Time.now.strftime("%Y-%m-%d-%H-%M")
  system %{
    middleman build &&
    cd build/ &&
    git add . &&
    git commit -m "release #{now}" &&
    git push &&
    cd ../
  }
  puts "Deployed..."
end


desc "New blog post"
task :post, [:title, :language, :publish_date] do |t, args|
  now = Time.now
  args.with_defaults(language: 'tr', 
                     publish_date: Time.parse(args[:publish_date] || now.strftime('%b %d, %Y %H:%M')),)
  abort "Please enter post title!..." unless args[:title]                
  output = []
  output << '---'
  output << 'title: "%s"' % args[:title]
  output << '# subtitle: ""'
  output << 'date: %s' % args[:publish_date]
  output << '# cover: "cover.jpg"'
  output << '# cover_title: ""'
  output << '# cover_subtitle: ""'
  output << '# cover_dir: ""'
  output << '# og_image: ""'
  output << '# og_image_dir: ""'
  output << '# tags: tag1,tag2'
  output << 'comments: false'
  output << '---'
  save_file = "source/blog/#{args[:language]}/#{now.strftime('%Y-%m-%d')}-#{args[:title].to_url}.html.md.erb"
  File.open(save_file, "w") do |f|
    f.write output.join("\n")
  end
  puts "New post ready at: #{save_file}"
end