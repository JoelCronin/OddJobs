const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        password: String
        address: String
        postCode: String
        jobApplications: [Posting]
        activeJobs: [Posting]
        completedJobs: [Posting]
        ratings: [Rating]
    }

    type Posting {
        _id: ID
        title: String
        description: String
        cost: Int
        userId: ID
        user: User
        ratings: [Rating]
    }

    type Rating {
        _id: ID
        rating: Int
        userId: ID
        user: User
        postingId: ID
        posting: Posting
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        posting: [Posting]
        singlePosting(id: ID!): Posting
        me: User
        singleUser(id: ID!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createPosting(input: PostingInput!): Posting
        createUser(input: UserInput!): Auth
        createRating(input: RatingInput!): Rating
        removePosting(id: ID!): Posting
        updatePosting(id: ID!, input: PostingInput!): Posting
    }

    input PostingInput {
        title: String
        description: String
        price: Int
    }

    input UserInput {
        name: String
        email: String
        password: String
        address: String
        postCode: String
    }

    input RatingInput {
        rating: Int
    }
`;


module.exports = typeDefs;