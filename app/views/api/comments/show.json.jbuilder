json.set! @comment.id do
  json.extract! @comment, :id, :body, :opinion_id, :created_at
  json.numVotes @comment.num_votes
  json.userVote @comment.user_vote(current_user.id) if logged_in?
  json.user do
    json.extract! @comment.user, :id, :username
    json.thumb @comment.user.avatar.url(:thumb)
  end
end
