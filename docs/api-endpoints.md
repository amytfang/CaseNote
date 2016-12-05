# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Opinions

- `GET /api/opinions`
  - Opinion index
- `GET /api/opinions/:id`
  - Opinion detail
- `POST /api/opinions`
- `PATCH /api/opinions/:id`
- `DELETE /api/opinions/:id`

### Annotations

- `POST /api/annotations`
- `GET /api/annotations/:id`
- `DELETE /api/annotations/:id`
- `PATCH /api/annotations/:id`

### Suggestions

- `POST /api/suggestions`
- `DELETE /api/suggestions/:id`
- `PATCH /api/suggestions/:id`

### Comments

- `POST /api/comments`
- `DELETE /api/comments/:id`
- `PATCH /api/comments/:id`

### Votes

- `POST /api/votes`
- `DELETE /api/votes`
