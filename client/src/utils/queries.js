import { gql } from '@apollo/client';

export const GET_ME = gql`
    query Me {
        me {
            _id
            name
            email
            image
            ratings {
                stars
            }
            jobApplications {
                _id
                cost
                title
                description
                status
                createdAt
            }
            activeJobs {
                _id
                cost
                title
                description
                status
                createdAt
            }
        }
    }
`;

// export const GET_MY_LISTINGS = gql`
//     query myListings($id:ID!) {
//         myListings(id: $id)
//     }`

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
            owner {
                _id
                postCode
            }
            _id
            cost
            title
            description
            image
            applications {
                _id
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

export const GET_ALL_USERS = gql`
    query allUsers {
        allUsers {
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
