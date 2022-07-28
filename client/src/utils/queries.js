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
            _id
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

            _id
            title
            cost
            description
            image
            status
            createdAt
            applications{
                name
            }
            owner{
                _id
                name
            }
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