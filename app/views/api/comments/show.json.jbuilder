json.set! @comment.id do
  json.extract! @comment, :id, :body, :opinion_id, :created_at
  json.user do
    json.extract! @comment.user, :id, :username
  end
end
