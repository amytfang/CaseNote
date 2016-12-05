{
  currentUser: {
    id: 1,
    username: "user1",
    image_url: ""
  },

  formErrors: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    annotate: { errors: [] },
    comment: { errors: [] },
    opinion: { errors: [] }
  },

  opinions: [
    {
      id: 1,
      case: "Marbury v. Madison",
      citation: "5 U.S. 137",
      year: 1803
    },

    {
      id: 2,
      case: "Loving v. Virginia",
      citation: "388 U.S. 1, 1",
      year: 1967
    }
  ],

  opinionDetail: {
    id: 2,
    case: "Loving v. Virginia",
    citation: "388 U.S. 1",
    date: "June 12, 1967",
    author: "Warren",
    body: "This case presents a constitutional question never addressed by this Court: whether a statutory scheme adopted by the State of Virginia to prevent marriages between persons solely on the basis of racial classifications violates the Equal Protection and Due Process Clauses of the Fourteenth Amendment. For reasons which seem to us to reflect the central meaning of those constitutional commands, we conclude that these statutes cannot stand consistently with the Fourteenth Amendment. . . .",
    comments: {
      1: {
        id: 1,
        body: "Love this case!"
        user: "user2",
        votes: 1,
        created: "2 hours ago"
      }
    },
    annotations: {
      1: {
        id: 1,
        start: 34,
        end: 50,
      },
      2: {
        id: 2,
        start: 45,
        end: 80
      }
    },
    tags: ["Civil Rights", "Warren Court"]
  }

  annotationDetail: {
    id: 1,
    start: 34,
    end: 50,
    user: "user3",
    text: "we conclude that these statutes cannot stand consistently with the Fourteenth Amendment",
    body: "this is a landmark case",
    votes: 6,
    created: "1 hour ago"
    suggestions: {
      1: {
        user: "user4",
        type: "other",
        body: "this needs more detail",
        votes: 1,
        created: "50 minutes ago"
      }
    }
  }
}
