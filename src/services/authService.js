import firebase from '../config/firebaseConfig';

export const signInWithGoogleAsync = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    // Use result to get the signed-in user information if necessary
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};