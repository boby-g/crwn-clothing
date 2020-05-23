import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCO-9RoMSlnPzg4jqUnDdtMVDBVWw2sgGc",
    authDomain: "crwn-db-ad510.firebaseapp.com",
    databaseURL: "https://crwn-db-ad510.firebaseio.com",
    projectId: "crwn-db-ad510",
    storageBucket: "crwn-db-ad510.appspot.com",
    messagingSenderId: "796678708621",
    appId: "1:796678708621:web:28443ef395626b4c2031c4",
    measurementId: "G-6PWN0WVF6V"
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();


const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
