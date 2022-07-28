import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                name
                email
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($input: UserInput!) {
        createUser(input: $input) {
            token
            user {
                _id
                name
                email
            }
        }
    }
`;

export const CREATE_POSTING = gql`
    mutation CreatePosting($input: PostingInput!) {
        createPosting(input: $input) {
            _id
            owner {
                _id
                name
            }
            cost
            title
            description
            image
            status
            season
            createdAt
            applications
            chosenWorker
        }
    }
`;

export const CREATE_RATING = gql`
    mutation CreateRating($input: RatingInput!) {
        createRating(input: $input) {
            _id
            stars
            comment
            createdAt
            byUser {
                _id
                name
            }
            forUser {
                _id
                name
            }
        }
    }
`;

export const REMOVE_POSTING = gql`
    mutation RemovePosting($id: ID!) {
        removePosting(id: $id) {
            _id
            owner {
                _id
                name
            }
            cost
            title
            description
`;

export const UPDATE_POSTING = gql`
    mutation UpdatePosting($id: ID!, $input: PostingInput!) {
        updatePosting(id: $id, input: $input) {
            _id
            owner {
                _id
                name
            }
            cost
            title
            description
            image
            status
            season
        }
    }
`;