import { gql } from '@apollo/client';

export const GET_ME = gql`
    query GetMe {
        me {
            _id
            name
            email
            address
            postCode
            jobApplications {
                _id
                title
                description
                price
                user {
                    _id
                    name
                    email
                    address
                }
            }
            activeJobs {
                _id
                title
                description
                price
                user {
                    _id
                    name
                    email
                    address
                }
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
            image
            status
            createdAt
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