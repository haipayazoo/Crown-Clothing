import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCf1U_qIAAGeIiEu6RoKfRs9E75bzL9CsM",
    authDomain: "crwn-db-135b1.firebaseapp.com",
    databaseURL: "https://crwn-db-135b1.firebaseio.com",
    projectId: "crwn-db-135b1",
    storageBucket: "crwn-db-135b1.appspot.com",
    messagingSenderId: "778381862178",
    appId: "1:778381862178:web:046b11abb801c6b049f17b",
    measurementId: "G-NCVM9JP187"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;