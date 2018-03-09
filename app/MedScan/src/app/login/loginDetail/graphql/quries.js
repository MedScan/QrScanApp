import gql from 'graphql-tag';

export const userByIdQuery = gql`
    query UserById($id : ID!) {
        User(id: $id) {
            id
            name
            email
            phoneNo
            address
            imageUrl
            dateOfBirth
            addressLat
            addressLong
        }
    }
`

export const updateUser = gql`
    mutation UpdateUser($id: ID!, $name: String, $email: String, $phoneNo: String, $imageUrl: String, $dateOfBirth: DateTime) {
        updateUser(id: $id, name: $name, email: $email, phoneNo: $phoneNo, imageUrl: $imageUrl, dateOfBirth: $dateOfBirth) {
            id
            name
            email
            phoneNo
            address
            imageUrl
            dateOfBirth
            addressLat
            addressLong
        }
    }
`