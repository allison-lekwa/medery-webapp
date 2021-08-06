import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAE8fYGxtLtph_GTN8j5XNoDAVD0cWYXFg",
    authDomain: "medery-webapp.firebaseapp.com",
    projectId: "medery-webapp",
    storageBucket: "medery-webapp.appspot.com",
    messagingSenderId: "746758262527",
    appId: "1:746758262527:web:575faebacf4fe7725b86ca"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
    const {companyName, email} = userAuth;
    const createdAt = new Date();
    try {
        await userRef.set({
        companyName,
        email,
        createdAt,
        ...additionalData

        })
    } catch (error) {console.log('error creating user', error.message);}
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;