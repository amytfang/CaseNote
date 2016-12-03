# CaseNote

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.heroku.com
[trello]: https://trello.com/b/lP3W0MMC/casenote

## Minimum Viable Product

CaseNote is a web application inspired by Genius built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Opinions
- [ ] Annotations
- [ ] Comments
- [ ] Upvotes
- [ ] Tags

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Opinion Model, API, and components (2 days)

**Objective:** Opinions can be created, read, edited and destroyed through the API.

### Phase 3: Annotations (2 day)

**Objective:** Annotations belong to Opinions and can be created, read, edited and destroyed through the API.

### Phase 4: Comments (1 day)

**Objective:** Comments belong to Opinions and Annotations and can be created, read, edited, and destroyed though the API

### Phase 5: Upvotes (.5 days)

**Objective:** Annotations and Comments can be upvoted or downvoted by registered users

### Phase 6: Tags (.5 days)

**Objective:** Tags may be added to Opinions

### Phase 6: - Styling (1 day)

**objective:** Add infinite scroll to Notes Index

### Bonus Features (TBD)
- [ ] Search Opinions by case name, judge, and contents
- [ ] Complex styling of opinions to include footnotes and generation of links to related cases
- [ ] Auto generated related opinions
