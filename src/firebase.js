import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAaAz2cpZdDeJuJJg9jMpYzZb-j9xG6Tc",
  authDomain: "disney-plus-clone-976a1.firebaseapp.com",
  projectId: "disney-plus-clone-976a1",
  storageBucket: "disney-plus-clone-976a1.appspot.com",
  messagingSenderId: "329443678777",
  appId: "1:329443678777:web:4761ce6b36ce2c73cfcbe8",
  measurementId: "G-4YJEJZWW11"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = getStorage();
  const storageRef = ref(storage);

  export { auth, provider, storageRef };
  export default db;