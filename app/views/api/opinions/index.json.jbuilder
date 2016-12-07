@opinions.each do |opinion|
  json.set! opinion.id do
    json.extract! opinion, :id, :case, :citation, :court, :date
  end
end
