import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKzGCfAF4j70oxJPJcGCuwu-Ql-n840Ds",
    authDomain: "netflix-clone-react-c3b22.firebaseapp.com",
    projectId: "netflix-clone-react-c3b22",
    storageBucket: "netflix-clone-react-c3b22.appspot.com",
    messagingSenderId: "166150840478",
    appId: "1:166150840478:web:dfcf8b105f51d273f75b8f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};

export default db;