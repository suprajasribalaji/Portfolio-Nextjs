import "firebase/app";
import { initializeApp } from "firebase/app";

import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBmL394YqL7pslJxmhAH6iLpRwtwpItXvE",
    authDomain: "supraja-sri.firebaseapp.com",
    projectId: "supraja-sri",
    storageBucket: "supraja-sri.appspot.com",
    messagingSenderId: "846057969595",
    appId: "1:846057969595:web:116d57768040b9d668d69e",
    measurementId: "G-360H877PNT"
};

const storage = getStorage(firebaseConfig);

export default storage;