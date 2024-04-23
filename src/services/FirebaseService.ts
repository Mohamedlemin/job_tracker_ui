import {
  auth,
  signInWithEmailAndPassword,
  signOut,
  googleAuthProvider,
  facebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword
} from 'auth/FirebaseAuth';

const FirebaseService = {

  signInEmailRequest: async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err)
  },

  signOutRequest: async () =>
    await signOut(auth).then(user => user).catch(err => err),

  signInGoogleRequest: async () =>
    await signInWithPopup(auth, googleAuthProvider).then(user => user).catch(err => err),

  signInFacebookRequest: async () =>
    await signInWithPopup(auth, facebookAuthProvider).then(user => user).catch(err => err),

  signUpEmailRequest: async (email: string, password: string) =>
    await createUserWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err),
}
export default FirebaseService