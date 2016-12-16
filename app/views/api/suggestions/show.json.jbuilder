json.set! @suggestion.id do
  json.extract! @suggestion, :id, :body, :annotation_id, :suggestion_type, :created_at
  json.numVotes @suggestion.num_votes
  json.userVote @suggestion.user_vote(current_user.id) if logged_in?
  json.user do
    json.extract! @suggestion.user, :id, :username
    json.image @suggestion.user.avatar.url(:thumb)
  end
end
