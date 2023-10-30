// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB4OSvgNVm6tTc6Hik_m9kSXcs6etYKO_0",
  authDomain: "redinax-f4619.firebaseapp.com",
  projectId: "redinax-f4619",
  storageBucket: "redinax-f4619.appspot.com",
  messagingSenderId: "620969081982",
  appId: "1:620969081982:web:b2c395b1a4fb7b4233ec2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)