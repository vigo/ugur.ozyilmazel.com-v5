require 'stringex'
require 'time'
require 'active_support/all'

# Tilt::SYMBOL_ARRAY_SORTABLE = false

activate :livereload
activate :i18n
Time.zone = 'Europe/Istanbul'
helpers ActiveSupport::NumberHelper

set :js_dir,     'public/js'
set :css_dir,    'public/css'
set :images_dir, 'public/images'

set :date_format_long, {
  tr: "%d %B %Y, %A %H:%M",
  en: "%A, %B %-d, %Y, %-I:%M %p",
}
set :date_format_short, {
  tr: "%d %B %Y, %A",
  en: "%A, %B %-d, %Y",
}

set :google_analytics_id, 'UA-6463685-2' 
set :disqus_short_name, 'ugurozyilmazel'
set :site_url, 'http://ugur.ozyilmazel.com'

my_age = Time.now.year - 1972
set :meta_author_name, "Uğur “vigo” Özyılmazel"
set :meta_description, {
  tr: "#{config[:meta_author_name]}, #{my_age} yaşında bir geliştiricinin notları. Ruby, Python, macOS, Unix, Demoscene, Commodore 64 ve Amiga...",
  en: "Notes of an oldskool #{my_age} y/o coder: #{config[:meta_author_name]} Ruby, Python, macOS, Unix, Demoscene, Commodore 64 and Amiga...",
}


activate :blog do |blog1|
  blog1.name              = "tr"
  blog1.sources           = "blog/tr/:year-:month-:day-:title.html"
  blog1.permalink         = "blog/tr/:year/:month/:day/:title/index.html"
  blog1.taglink           = "blog/tr/etiket/:tag/index.html"
  blog1.paginate          = true
  blog1.per_page          = 20
  blog1.page_link         = "sayfa/{num}"
  blog1.summary_separator = /READ_MORE/
  blog1.summary_length    = nil
  blog1.layout            = "blog1_layout"
  blog1.tag_template      = "templates/blog1_layout_tag.html"
end

activate :blog do |blog2|
  blog2.name              = "en"
  blog2.sources           = "blog/en/:year-:month-:day-:title.html"
  blog2.permalink         = "blog/en/:year/:month/:day/:title/index.html"
  blog2.taglink           = "blog/en/tag/:tag/index.html"
  blog2.paginate          = true
  blog2.per_page          = 20
  blog2.page_link         = "page/{num}"
  blog2.summary_separator = /READ_MORE/
  blog2.summary_length    = nil
  blog2.layout            = "blog2_layout"
  blog2.tag_template      = "templates/blog2_layout_tag.html"
end
activate :directory_indexes

activate :syntax
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true,
               smartypants: true,
               tables: true,
               autolink: true,
               strikethrough: true,
               superscript: true,
               highlight: true,
               footnotes: true,
               quote: true,
               underline: true

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

def build_proxy_pages_for_menu_items(language)
  page_sayfa = {
    'en': "page",
    'tr': "sayfa",
  }
  menu_items = data.send("top_menu_#{language}")
  menu_items.links.each do |link|
    page_key = link.url.split("/").last
    if page_key and !page_key.include?(language)
      proxy_from   = "/statics/#{language}/#{page_key}.html"
      proxy_to = "/#{page_sayfa[language.to_sym]}/#{language}/#{page_key}/index.html"
      proxy proxy_to,
            proxy_from,
            locals: { lang: language.to_sym },
            ignore: true
    end
  end
end

build_proxy_pages_for_menu_items "tr"
build_proxy_pages_for_menu_items "en"

data.workshops_tr.workshop.each do |workshop|
  proxy_to = "/sayfa/tr/egitimler/#{workshop.title.to_url}/index.html"
  proxy_from = "/templates/workshop.html"
  workshop.url = "#{File.dirname(proxy_to)}/"
  local_vars = {
    workshop: workshop,
    lang: :tr,
    meta_description: "Eğitimler: #{workshop.title}",
  }
  proxy proxy_to, proxy_from,
        locals: local_vars,
        ignore: true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
