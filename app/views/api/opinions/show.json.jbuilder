json.extract! @opinion, :id, :case, :citation, :body
json.court @opinion.court.name
json.judge @opinion.judge.name
json.date @opinion.date.strftime("%B %d, %Y")
json.transcriber @opinion.transcriber.username
json.image_url @opinion.use_image.url(:large)
