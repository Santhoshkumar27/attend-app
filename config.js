 import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBSJiphM-3-v3aUVqRLSEUHYT2l9EMaV-0",
  authDomain: "addapp-c321e.firebaseapp.com",
  databaseURL: "https://addapp-c321e-default-rtdb.firebaseio.com",
  projectId: "addapp-c321e",
  storageBucket: "addapp-c321e.appspot.com",
  messagingSenderId: "184506139159",
  appId: "1:184506139159:web:377179f8ec914bf26f5252",
  measurementId: "G-5MMBBGMC6D"
};





// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();