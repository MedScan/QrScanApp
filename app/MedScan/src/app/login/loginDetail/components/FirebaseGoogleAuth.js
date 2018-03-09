import { GoogleSignin } from 'react-native-google-signin';

export const googleLogin = async (saveUserDetails) => {
  try {
    await GoogleSignin.configure();
    try {
      let user = await GoogleSignin.currentUserAsync()
      await GoogleSignin.signOut()
    } catch(e) {}
    
    const data = await GoogleSignin.signIn();
    saveUserDetails(data.name, data.email, data.photo)
  } catch (e) {
    console.log(e);
  }
}