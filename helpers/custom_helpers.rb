require 'digest/md5'

module CustomHelpers
  def img_custom(*options)
    "#{options}"
  end

  def gist(id)
    "<script src=\"https://gist.github.com/#{id}.js\"></script>"
  end

  def build_images_array_for_js
    images_array = []
    Dir.glob('source/public/images/index-covers/*.{jpg,png}') do |image_file|
      images_array << File.basename(image_file)
    end
    out = '<script>'
    out += 'var rnd_image_files = ' + "#{images_array}" + ';'
    out += '</script>'
    out
  end

  def markdown(input)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML.new)
    markdown.render(input)
  end
  
  def gravatar_for(email)
    hash = Digest::MD5.hexdigest(email.chomp.downcase)
    "https://www.gravatar.com/avatar/#{hash}"
  end

  def debug(*input)
    html = '<pre style="white-space: pre-wrap; padding: 2rem; background-color: #ddd;">'
    html += escape_html(input.join("\n"))
    html += '</pre>'
    html if development?
  end

  def fa_icon(name, style=nil, size=nil)
    size ||= 2
    case style
    when :circle, :circle_solid
      circle_value = 'fa-circle-thin'
      circle_value = 'fa-circle' if style == :circle_solid
      "<span class=\"fa-stack fa-#{size}x\"><i class=\"fa #{circle_value} fa-stack-2x\"></i><i class=\"fa fa-#{name} fa-stack-1x fa-inverse\"></i></span>"
    else
      "<i class=\"fa fa-#{name} fa-#{size}x\"></i>"
    end
  end
  
  def site_image(img, dir="covers")
    if img.include?('http')
      "#{img}"
    elsif img.include?('/')
      "/#{config[:images_dir]}/#{img}"
    else
      "/#{config[:images_dir]}/#{dir}/#{img}"
    end
  end
  
  def has_summary?(article)
    return false unless article.respond_to?(:body)
    article.body.length > article.summary.length
  end
  
  def print_summary(article)
    if has_summary?(article)
      "#{article.summary}"
    end
  end
  
  def markdownify_text_only(text, **options)
    allowed_tags = options[:allowed_tags] || ['em', 'strong', 'a', 'code', 'kbd']
    Sanitize.fragment(markdown(text), elements: allowed_tags)
  end
  
  def card(**options)
    out = []
    options[:dir] ||= "posts"

    image_url = site_image(options[:src], options[:dir])
    image_alt = options[:alt] || "this is an image | bu bir resim"

    if options[:title]
      out << '<div class="card card-custom" title="%s">' % options[:title]
    else
      out << '<div class="card card-custom">'
    end
    
    out << '<img src="%s" alt="%s">' % [image_url, image_alt]

    if options[:text]
      sanitized = markdownify_text_only(options[:text]).strip
      out << '<div class="card-block">'
        out << '<p class="card-text">%s</p>' % sanitized
      out << '</div>'
    end
    out << '</div>'
    out.join
  end
  
  def zoomable(**options)
    out = []

    options[:dir] ||= "posts"
    options[:alt] ||= "this is an image | bu bir resim"

    image_url = site_image(options[:src], options[:dir])

    out << '<div class="full zoomable">'
    out << '<img src="%s" alt="%s">' % [image_url, options[:alt]]
    out << '<p>%s</p>' % markdownify_text_only(options[:title]) if options[:title]
    out << '</div>'
    out.join
  end
  
  def video(**options)
    out = []
    video_url = options[:src]
    video_title = options[:title] || "Video"
    out << '<div class="flash-video" title="%s">' % video_title
      out << '<div>'
        out << '<iframe src="%s" width="%s" height="%s" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' % [
          video_url, "100%", "100%"]
      out << '</div>'
    out << '</div>'
    out.join
  end
  
  def video_vimeo(id, **options)
    vimeo_src = "http://player.vimeo.com/video/#{id}?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
    video src: vimeo_src, title: options[:title] || nil
  end
  
  def img_gallery(images, chunk_by=3)
    chunked = images.each_slice(chunk_by).to_a
    out = ['<div class="photo-gallery">']
    chunked.each do |images|
      out << '<div class="row">'
      images.each do |image|
        out << '<div class="col-lg-6 col-xl-' + (12/chunk_by).to_s + '">'
        out << '<img src="' + image[:thumb] + '" alt="' + (image[:cap] || 'Photo | Fotoğraf') + '">'
        if image[:cap]
          out << '<p>' + image[:cap] + '<p>'
        end
        out << '</div>'
      end
      out << '</div>'
    end
    out << '</div>'
    out.join("\n")
  end
end
