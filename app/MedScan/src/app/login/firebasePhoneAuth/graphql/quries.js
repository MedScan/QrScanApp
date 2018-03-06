import gql from 'graphql-tag';

export const authenticateUser = gql`
    mutation authenticatePhoneNumber($firebaseToken : String!) {
        authenticateFirebaseUser(firebaseToken: $firebaseToken) {
            id
            token
        }
    }
`



// # query Hotel($Id : ID!){
//     #     Hotel(id: $Id){
//     #         id
//     #         name,
//     #         logoImageUrl,
//     #         hotelImages {
//     #             hotelImageUrls
//     #         },
//     #         hotelDetail {
//     #             description,
//     #             openingTime,
//     #             closingTime,
//     #             storePhoneNumber
//     #         }
//     #     }
//     # }