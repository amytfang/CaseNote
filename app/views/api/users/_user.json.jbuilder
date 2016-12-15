json.extract! user, :id, :username
json.thumb user.avatar.url(:thumb)
