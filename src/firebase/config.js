// Your web app's Firebase configuration
import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAp5uLzzppU7U0SK0e76c96mw2-5FzXLgM",
  authDomain: "firegram-6ea9b.firebaseapp.com",
  projectId: "firegram-6ea9b",
  storageBucket: "firegram-6ea9b.appspot.com",
  messagingSenderId: "517634689560",
  appId: "1:517634689560:web:fed41ffafe22045c01916d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//store files and images
const projectStorage = firebase.storage();

//store data (your firestore db)
const projectFirestore = firebase.firestore();

//get timestamp of data stored
const timestamp = firebase.firestore.FieldValue.serverTimestamp;



export { projectStorage, projectFirestore, timestamp };