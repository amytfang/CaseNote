# CaseNote

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://casenote.herokuapp.com/
[trello]: https://trello.com/b/lP3W0MMC/casenote

## Minimum Viable Product

CaseNote is a web application inspired by Genius built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
- [ ] Production README
- [ ] Hosting on Heroku
- [ ] Opinions
- [ ] Annotations
- [ ] Comments
- [ ] Upvotes

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Opinion Model, API, and components (2 days)

**Objective:** Opinions can be created, read, edited and destroyed through the API.

### Phase 3: Annotations (2 day)

**Objective:** Annotations belong to Opinions and can be created, read, edited and destroyed through the API.

### Phase 4: Comments (1 day)

**Objective:** Comments belong to Opinions and Annotations and can be created, read, edited, and destroyed though the API

### Phase 5: Upvotes (1 day)

**Objective:** Annotations and Comments can be upvoted or downvoted by registered users

### Phase 6: Styling (1 day)

**objective:** Create header, footer, and other styling features

### Bonus Features (TBD)
- [ ] Tags for Opinions
- [ ] Search Opinions by case name, judge, and contents
- [ ] User profiles
- [ ] Complex styling of opinions to include footnotes and generation of links to related cases
- [ ] Video/audio playback
