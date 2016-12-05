# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## opinions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
case        | string    | not null
citation    | string    | not null
judge       | string    | not null
court       | string    | not null
date        | date      | not null
body        | text      | not null
transcriber_id   | integer   | not null, foreign key (references users), indexed

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
start_idx   | integer   | not null
end_idx     | integer   | not null
body        | text      | not null
annotated_content | text      | not null
opinion_id  | integer   | not null, foreign key (references opinions), indexed
author_id   | integer   | not null, foreign key (references users), indexed

## suggestions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null
body        | text      | not null
annotation_id | integer   | not null, foreign key (references annotations), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
opinion_id  | integer   | not null, foreign key (references opinions), indexed
author_id   | integer   | not null, foreign key (references users), indexed

## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
count       | integer   | not null, either 1 or -1
user_id     | integer   | not null, foreign key (references users), indexed
votable_id  | integer   | not null, foreign key (references opinions, annotations, or comments), indexed
votable_type   | string   | not null, either "opinion", "annotation", or "comment"
