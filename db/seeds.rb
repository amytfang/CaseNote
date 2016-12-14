# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

user1 = User.create(username: "guest", password: "password")
user2 = User.create(username: "cool_guy24", password: "password")
user3 = User.create(username: "awesome_gal", password: "password")
user4 = User.create(username: "jumping_joe", password: "password")
user5 = User.create(username: "amanda342", password: "password")

Opinion.destroy_all

body = "{\"ops\":[{\"attributes\":{\"color\":\"#000000\"},\"insert\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"insert\":\"\\n\\n\"},{\"attributes\":{\"color\":\"#000000\"},\"insert\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"insert\":\"\\n\\n\"},{\"attributes\":{\"color\":\"#000000\"},\"insert\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"insert\":\"\\n\\n\"},{\"attributes\":{\"color\":\"#000000\"},\"insert\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"insert\":\"\\n\\n\"},{\"attributes\":{\"color\":\"#000000\"},\"insert\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"insert\":\"\\n\\n\"},{\"attributes\":{\"color\":\"#000000\"},\"insert\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"insert\":\"\\n\\n\"}]}"

opinion1 = Opinion.create(case: "Marbury v. Madison", citation: "5 U.S. 137", body: body, date: Date.new(1803, 2, 24), transcriber_id: user1.id, judge_id: 42, court_id: 1)
opinion2 = Opinion.create(case: "Loving v. Virginia", citation: "388 U.S. 1", body: body, date: Date.new(1967, 6, 12), transcriber_id: user1.id, judge_id: 75, court_id: 1)
opinion3 = Opinion.create(case: "Gore v. Bush", citation: "531 U.S. 98", body: body, date: Date.new(2000, 12, 12), transcriber_id: user2.id, judge_id: 100, court_id: 1)
opinion4 = Opinion.create(case: "Hambi v. Rumsfeld", citation: "542 U.S. 507", body: body, date: Date.new(2004, 6, 28), transcriber_id: user3.id, judge_id: 80, court_id: 1)
opinion5 = Opinion.create(case: "U.S. v. Korematsu", citation: "323 U.S. 214", body: body, date: Date.new(1844, 12, 18), transcriber_id: user5.id, judge_id: 4, court_id: 1)
opinion6 = Opinion.create(case: "Brown v. Board of Education", citation: "347 U.S. 483", body: body, date: Date.new(1954, 5, 17), transcriber_id: user5.id, judge_id: 1, court_id: 1)

Annotation.destroy_all

annotation1 = Annotation.create(start_idx: 0, length: 20, body: "{\"ops\":[{\"insert\":\"Annotation1\\n\"}]}", opinion_id: opinion1.id, user_id: user2.id)
annotation2 = Annotation.create(start_idx: 130, length: 200, body: "{\"ops\":[{\"insert\":\"Annotation2\\n\"}]}", opinion_id: opinion1.id, user_id: user3.id)
annotation3 = Annotation.create(start_idx: 40, length: 10, body: "{\"ops\":[{\"insert\":\"Annotation3\\n\"}]}", opinion_id: opinion1.id, user_id: user3.id)
annotation4 = Annotation.create(start_idx: 81, length: 20, body: "{\"ops\":[{\"insert\":\"Annotation4\\n\"}]}", opinion_id: opinion2.id, user_id: user4.id)
annotation5 = Annotation.create(start_idx: 0, length: 200, body: "{\"ops\":[{\"insert\":\"Annotation5\\n\"}]}", opinion_id: opinion3.id, user_id: user1.id)
annotation6 = Annotation.create(start_idx: 5, length: 60, body: "{\"ops\":[{\"insert\":\"Annotation6\\n\"}]}", opinion_id: opinion4.id, user_id: user1.id)
annotation7 = Annotation.create(start_idx: 230, length: 100, body: "{\"ops\":[{\"insert\":\"Annotation7\\n\"}]}", opinion_id: opinion4.id, user_id: user5.id)
annotation8 = Annotation.create(start_idx: 20, length: 20, body: "{\"ops\":[{\"insert\":\"Annotation8\\n\"}]}", opinion_id: opinion5.id, user_id: user5.id)
annotation9 = Annotation.create(start_idx: 183, length: 20, body: "{\"ops\":[{\"insert\":\"Annotation9\\n\"}]}", opinion_id: opinion6.id, user_id: user1.id)

Suggestion.destroy_all

suggestion1 = Suggestion.create(user_id: user4.id, annotation_id: annotation1.id, suggestion_type: "restate", body: "This restates the text!")
suggestion2 = Suggestion.create(user_id: user1.id, annotation_id: annotation6.id, suggestion_type: "other", body: "Why isn't your response in latin?")
suggestion3 = Suggestion.create(user_id: user1.id, annotation_id: annotation3.id, suggestion_type: "restate", body: "Restating the text. This is worthless")
suggestion4 = Suggestion.create(user_id: user3.id, annotation_id: annotation7.id, suggestion_type: "missing", body: "This does not actually include any content")
suggestion5 = Suggestion.create(user_id: user1.id, annotation_id: annotation8.id, suggestion_type: "restate", body: "This restates the text!")
suggestion6 = Suggestion.create(user_id: user2.id, annotation_id: annotation1.id, suggestion_type: "stretch", body: "Seems like a stretch")
suggestion7 = Suggestion.create(user_id: user3.id, annotation_id: annotation1.id, suggestion_type: "missing", body: "This is missing any indepth review")
suggestion8 = Suggestion.create(user_id: user5.id, annotation_id: annotation2.id, suggestion_type: "restate", body: "This restates the text :(")
suggestion9 = Suggestion.create(user_id: user5.id, annotation_id: annotation2.id, suggestion_type: "other", body: "Was this a mistake????")
suggestion10 = Suggestion.create(user_id: user2.id, annotation_id: annotation4.id, suggestion_type: "stretch", body: "That's a stretch....")

Comment.destroy_all

comment1 = Comment.create(opinion_id: opinion1.id, user_id: user2.id, body: "Post hoc ergo propter hoc")
comment2 = Comment.create(opinion_id: opinion1.id, user_id: user4.id, body: "Habeas corpus")
comment3 = Comment.create(opinion_id: opinion2.id, user_id: user5.id, body: "forum non conveniens")
comment4 = Comment.create(opinion_id: opinion3.id, user_id: user1.id, body: "ex post facto")
comment5 = Comment.create(opinion_id: opinion4.id, user_id: user1.id, body: "lis pendens")
comment6 = Comment.create(opinion_id: opinion5.id, user_id: user3.id, body: "nolo contendere")
comment7 = Comment.create(opinion_id: opinion5.id, user_id: user5.id, body: "persona non grata")
comment8 = Comment.create(opinion_id: opinion4.id, user_id: user4.id, body: "pro bono")
comment9 = Comment.create(opinion_id: opinion6.id, user_id: user2.id, body: "lex loci")
comment10 = Comment.create(opinion_id: opinion1.id, user_id: user1.id, body: "in pari delicto")
comment11 = Comment.create(opinion_id: opinion2.id, user_id: user1.id, body: "inter alia")
comment12 = Comment.create(opinion_id: opinion3.id, user_id: user5.id, body: "jus naturale")
