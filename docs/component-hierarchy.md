## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**AppContainer**
 - Header
 - Nav
 - Footer

**HomeContainer**
 - TopOpinions
 - LatestOpinions

**OpinionIndexContainer**
 - OpinionIndex
   + OpinionIndexItem

**OpinionDetailContainer**
 - OpinionHeader
 - OpinionText
 - AnnotationContainer
 - CommentForm
 - CommentIndex
   + CommentDetail
   - Upvote

**AnnotationContainer**
 - AnnotationDetail
   + AnnotationHeader
   - AnnotationBody
   - AnnotationEditForm
   - UpvoteDetail
 - SuggestionForm
 - SuggestionIndex
   + SuggestionDetail
   - Upvote

**AnnotationFormContainer**
 - AnnotationForm

**OpinionFormContainer**
 - OpinionForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AppContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/index" | "OpinionIndexContainer" |
| "/opinions/:opinionID" | "OpinionDetailContainer" |
| "/opinions/:opinionID/annotations/:annotationID" | "AnnotationContainer" |
| "/opinions/:opinionId/annotations/new" | "AnnotationFormContainer" |
| "/new" | "OpinionFormContainer" |
