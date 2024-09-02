import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBq1nnpyyTr7djwXbWh2EgvjFok23uOkns",
	authDomain: "todo-list-a4315.firebaseapp.com",
	projectId: "todo-list-a4315",
	storageBucket: "todo-list-a4315.appspot.com",
	messagingSenderId: "220508386837",
	appId: "1:220508386837:web:3a16b49a1675f33a77001c",
	databaseURL: "https://todo-list-a4315-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
