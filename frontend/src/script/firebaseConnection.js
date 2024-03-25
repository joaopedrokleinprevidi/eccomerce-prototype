import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import "/dotenv-config";
// console.log(process.env);

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_CONFIG_API_KEY,
//   authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_CONFIG_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAHXc8p7UYug-qMEoGb4nacarrvBg52XFo",
  authDomain: "eccomerce-prototype-450c2.firebaseapp.com",
  projectId: "eccomerce-prototype-450c2",
  storageBucket: "eccomerce-prototype-450c2.appspot.com",
  messagingSenderId: "541210597903",
  appId: "1:541210597903:web:7cc45935ab34a7683ea17a",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
