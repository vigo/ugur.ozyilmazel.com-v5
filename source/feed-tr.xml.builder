xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  site_url = config[:site_url]
  author_name = config[:meta_author_name]
  xml.title author_name
  xml.subtitle "Yazılım geliştirici"
  xml.id URI.join(site_url, blog("tr").options.prefix.to_s)
  xml.link "href" => URI.join(site_url, blog("tr").options.prefix.to_s)
  xml.link "href" => URI.join(site_url, current_page.path), "rel" => "self"
  xml.updated(blog("tr").articles.first.date.to_time.iso8601) unless blog("tr").articles.empty?
  xml.author { xml.name author_name }

  blog("tr").articles[0..10].each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => URI.join(site_url, article.url)
      xml.id URI.join(site_url, article.url)
      xml.published article.date.to_time.iso8601
      xml.updated File.mtime(article.source_file).iso8601
      xml.author { xml.name author_name }
      # xml.summary article.summary, "type" => "html"
      xml.content article.body, "type" => "html"
    end
  end
end
