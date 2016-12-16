# CaseNote

[CaseNote Live][live]

[live]: https://casenote.herokuapp.com/#/

CaseNote is a full-stack web application inspired by Genius.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

![image of home](docs/screenshots/home-screen.png)

### User Authorization

  Users can sign up for and login to CaseNote.  User authorization is built on Rails using the BCrypt Gem.

  ![image of session form](docs/screenshots/session-modal.png)

### Search

  User can search for court opinions by case name, citation, or judge name.

  ![image of search](docs/screenshots/autocomplete-search-1.png)

### Opinions

  **Viewing opinions**

  Users access opinions through either search or the opinions index in the navigation bar.

  ![image of opinion view](docs/screenshots/opinion-detail-view.png)

  **Creating opinions**

  Users can create opinions by clicking the "Add Opinion" link in the navigation bar.  Opinions require a case name, citation, judge, court, and date.  The judge and court fields are drop down menus populated from judge and court reference tables.  Optionally, the user can add an image when creating the opinion.  By default, the image will be an image of the selected judge.  CaseNote utilizes Amazon Web Services to store these images.

  ![image of opinion add page](docs/screenshots/add-opinion.png)

  **Adding comments**

  User can comment on opinions.

  ![image of comments](docs/screenshots/comment-view.png)

### Annotations

  **Viewing annotations**

  In the text body of the opinions, annotations are distinguished by a gray background.  Users click on the annotation to view the details of that annotation in the right panel.

  ![image of annotation details](docs/screenshots/annotation-detail.png)

  The user can vote on the annotation and make suggestions to refine the annotation. Users can also vote on suggestions.

  ![image of suggestion form](docs/screenshots/annotation-detail-suggestion.png)

  **Creating annotations**

  Users can create annotations by selecting the text in the opinion that they would like to annotate.  The right panel will display a button which allows users to start an annotation.

  ![image of annotation form button](docs/screenshots/annotation-form-start.png)

  ![image of annotation form full](docs/screenshots/annotation-form-full.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for CaseNote are outlined below.

### User Profiles and Rating

User Profiles tracks is a standard feature of Genius. This allows users to upload profile pictures, view feeds of their activity, and be rated based on their contributes to the site.

### Court Transcripts with Audio / Video

Although this is less essential functionality, I want to allow users to upload court transcripts and optionally include playable audio and/or video,
