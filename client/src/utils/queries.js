import { gql } from '@apollo/client';

export const GET_ME = gql`
    query GetMe {
        me {
            _id
            name
            email
            ratings {
                stars
            }
            jobApplications {
                cost
                title
                description
                status
                createdAt
            }
        }
    }
`;

export const GET_POSTING = gql`
    query posting {
        posting {
            owner {
                _id
                name
            }
            cost
            title
            status
            createdAt
            image
        }
    }
`;

export const GET_SINGLE_POSTING = gql`
    query singlePosting($id: ID!) {
        singlePosting(id: $id) {
            owner {
                _id
                name
            }
            cost
            title
            status
            createdAt
            image
        }
    }
`;

export const GET_SINGLE_USER = gql`
    query singleUser($id: ID!) {
        singleUser(id: $id) {
            _id
            name
            email
            image
            ratings {
                _id
                stars
                comment
            }
        }
    }
`;