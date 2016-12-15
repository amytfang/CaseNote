json.extract! @opinion, :id, :case, :citation, :body, :transcriber_id
json.court @opinion.court.name
json.judge @opinion.judge.name
json.date @opinion.date.strftime("%B %d, %Y")
json.transcriber @opinion.transcriber.username
json.image_url @opinion.use_image.url(:large)
json.annotations do
  @opinion.annotations
    .each do |anno|
      json.set! anno.id do
        json.extract! anno, :id, :start_idx, :length
      end
    end
end

json.comments do
  @opinion.comments
    .each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :opinion_id, :created_at
        json.numVotes comment.num_votes
        json.userVote comment.user_vote(current_user.id) if logged_in?
        json.user do
          json.extract! comment.user, :id, :username
          json.thumb comment.user.avatar.url(:thumb)
        end
      end
    end
end
