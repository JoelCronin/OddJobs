import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($input: createUserInput!) {
        createUser(input: $input) {
            token
            user {
                _id
                email
                name
                password
                image
            }
        }
    }
`;


export const CREATE_POSTING = gql`
    mutation createPosting($input: createPostingInput!) {
        createPosting(input: $input) {
            _id
            owner {
                _id
            }
            cost
            title
            description
            createdAt
        }
    }
`;

export const CREATE_RATING = gql`
    mutation createRating($input: RatingInput!) {
        createRating(input: $input) {
            _id
            stars
            comment
            createdAt
            byUser {
                _id
            }
            forUser {
                _id
            }
        }
    }
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

