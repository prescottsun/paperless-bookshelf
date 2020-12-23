import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "paperless-bookshelf-fb763.firebaseapp.com",
	databaseURL: "https://paperless-bookshelf-fb763.firebaseio.com",
	projectId: "paperless-bookshelf-fb763",
	storageBucket: "paperless-bookshelf-fb763.appspot.com",
	messagingSenderId: "760976417716",
	appId: "1:760976417716:web:31bb5c0b79059edd4d08e1",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
