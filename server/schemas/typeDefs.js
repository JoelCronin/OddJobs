const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String
        email: String
        password: String
        image: String
        address: String
        postCode: String
        jobApplications: [Posting]
        activeJobs: [Posting]
        completedJobs: [Posting]
        ratings: [Rating]
    }

    type Posting {
        _id: ID!
        owner: User
        cost: Int
        title: String
        description: String
        image: String
        status: String
        season: String
        createdAt: String
        applications: [User]
        chosenWorker: User
    }

    type Rating {
        _id: ID!
        stars: Int
        comment: String
        createdAt: String
        byUser: User
        forUser: User
    }

    type Auth {
        token: ID!
        user: User  
      }

    type Query {
        posting: [Posting]
        singlePosting(id: ID!): Posting
        me(id:ID!): User
        singleUser(id: ID!): User
        allUsers: [User]
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
        cost: Int
    }

    input UserInput {
        name: String
        email: String
        password: String
    }

    input RatingInput {
        rating: Int
    }
`;


module.exports = typeDefs;