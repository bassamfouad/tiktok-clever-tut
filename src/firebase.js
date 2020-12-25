import firebase from "firebase";

var config = {
  apiKey: "AIzaSyChViu6MAYtdludU_mbGQQalSIkvIZJWCM",
  authDomain: "b-chat-e155a.firebaseapp.com",
  databaseURL: "https://b-chat-e155a.firebaseio.com",
  projectId: "b-chat-e155a",
  storageBucket: "b-chat-e155a.appspot.com",
  messagingSenderId: "523478964549",
  appId: "1:523478964549:web:b15a880bccc9ecff6b062c",
  measurementId: "G-TEC63DF4LB",
};
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;
