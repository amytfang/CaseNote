@opinions.each do |opinion|
  json.set! opinion.id do
    json.extract! opinion, :id, :case, :citation, :date
    json.court opinion.court.name
    json.full_citation opinion.citation_format
    image = opinion.use_image
    json.thumb image.url(:thumb)
  end
end
