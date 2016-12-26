json.extract! @annotation, :id, :body, :start_idx, :length, :opinion_id
json.user do
  json.extract! @annotation.user, :id, :username
  json.image @annotation.user.avatar.url(:thumb)
end
json.suggestions do
  @annotation.suggestions
  .includes(:user)
  .each do |suggestion|
    json.set! suggestion.id do
      json.extract! suggestion, :id, :body, :annotation_id, :suggestion_type, :created_at
      json.numVotes suggestion.num_votes
      json.userVote suggestion.user_vote(current_user.id) if logged_in?
      json.user do
        json.extract! suggestion.user, :id, :username
        json.image suggestion.user.avatar.url(:thumb)
      end
    end
  end
end
json.numVotes @annotation.num_votes
json.userVote @annotation.user_vote(current_user.id) if logged_in?
