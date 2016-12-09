json.extract! @opinion, :id, :case, :citation, :judge, :court, :date, :body, :img_url
json.transcriber @opinion.transcriber.username
