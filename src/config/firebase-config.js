import firebase from 'firebase' ;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANrGbK7hAAph5cg4Scf0PFfIh47qmIhdg",
  authDomain: "hostel-alotment.firebaseapp.com",
  projectId: "hostel-alotment",
  storageBucket: "hostel-alotment.appspot.com",
  messagingSenderId: "341105940833",
  appId: "1:341105940833:web:cfa94451d25fe5f302cd20",
  measurementId: "G-G7Q62YCXS3",
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase ;