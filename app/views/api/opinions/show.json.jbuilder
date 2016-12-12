json.extract! @opinion, :id, :case, :citation, :body, :transcriber_id
json.court @opinion.court.name
json.judge @opinion.judge.name
json.date @opinion.date.strftime("%B %d, %Y")
json.transcriber @opinion.transcriber.username
json.image_url @opinion.use_image.url(:large)
json.annotations do
  json.array! @opinion.annotations
    .sort { |x, y| x[:start_idx] <=> y[:start_idx] }
    .each do |annotation|
      json.extract! annotation, :id, :start_idx, :length
    end
end
