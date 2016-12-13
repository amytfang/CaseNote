json.extract! @comment, :user_id, :body, :opinion_id
json.user @comment.user.username
