json.set! @suggestion.id do
  json.extract! @suggestion, :id, :body, :annotation_id, :suggestion_type, :created_at
  json.user do
    json.extract! @suggestion.user, :id, :username
  end
end
