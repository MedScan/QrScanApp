import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

export const facebookLogin = async (saveUserDetails) => {
    try {
      try {
        await LoginManager.logOut()
      } catch(e) {}
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
          // nothing
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        let credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        try {
          const result = await firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
          console.log(result)
          saveUserDetails(result.additionalUserInfo.profile.name, result.additionalUserInfo.profile.email, result.additionalUserInfo.profile.picture.data.url)
        } catch (e) {
          const userCred = await firebase.auth().signInAndRetrieveDataWithCredential(credential)
          console.log(userCred)
          saveUserDetails(userCred.additionalUserInfo.profile.name, userCred.additionalUserInfo.profile.email, userCred.additionalUserInfo.profile.picture.data.url)
        }
      }
    } catch (e) {
      console.error(e);
    }
}





          // var prevUser = firebase.auth().currentUser;
          // Sign in user with another account
// if(user._user.uid != prevUser._user.uid) {
            //   return user.delete().then(function() {
            //     // Link the OAuth Credential to original account
            //     return prevUser.linkWithCredential(credential);
            //   }).then(function() {
            //     // Sign in with the newly linked credential
            //     return firebase.auth().signInWithCredential(credential).then(result => {
            //     }).catch(error => console.log("inside er ", error));
            //   });
            // }










        // var prevUser = firebase.auth().currentUser;
        // // Sign in user with another account
        // const userCred = await firebase.auth().signInAndRetrieveDataWithCredential(credential)
        // console.log("Sign In Success", userCred);
        // var currentUser = userCred.user;
        // console.log("Sign user", currentUser);
        // // // Merge prevUser and currentUser data stored in Firebase.
        // // // Note: How you handle this is specific to your application

        // // // After data is migrated delete the duplicate user
        // // await userCred.user.delete()
        // // console.log("Sign In deleted ", prevUser);
        // //   // Link the OAuth Credential to original account
        // // prevUser.linkAndRetrieveDataWithCredential(credential).then(result => {
        // //   console.log(result)
        // //   console.log("result linking - ")
        // //   console.log(result)
        // //   // Sign in with the newly linked credential
        // //   firebase.auth().signInAndRetrieveDataWithCredential(credential).then(result => {
        
        // //     console.log(result)
        // //     console.log(firebase.auth().currentUser)
        // //   }).catch (e => {
        // //     console.error("erroor " + e);
        // //   })
        // // }).catch (e => {
        // //   console.error("erroor " + e);
        // // })