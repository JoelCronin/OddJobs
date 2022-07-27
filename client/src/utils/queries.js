import { gql } from '@apollo/client';

export const GET_ME = gql`
    query GetMe {
        me {
            _id
            name
            email
            address
            postCode
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

// export const GET_SINGLE_POSTING = gql`
//     query singlePosting($id: ID!) {
//         singlePosting(id: $id) {


// `;

// export const GET_SINGLE_USER = gql`
//     query singlePosting($id: ID!) {
//         singleUser(id: $id) {
// `;