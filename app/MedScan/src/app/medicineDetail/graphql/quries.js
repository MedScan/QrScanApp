import gql from 'graphql-tag';

export const medDetByQR = gql`
    query MedDetById($qrCode : String!){
        Medicine(qrCode: $qrCode) {
            ageLowerLimit
            ageUpperLimit
            dosing
            description
            defaultUsage
            id
            name
            qrCode
            sideEffects
        }
    }
`;