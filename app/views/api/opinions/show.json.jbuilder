json.extract! @opinion, :id, :case, :citation, :judge, :court, :date, :body
json.transcriber @opinion.transcriber.username
