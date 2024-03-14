import {
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import newUser from "../fetchAPI/requests.js";
import initializeFirebaseAuth from "../firebaseConnection.js";

const provider = new GoogleAuthProvider();

const buttonRegister = document.querySelector(".register-google");

const handleGoogleSignIn = async () => {
  const auth = await initializeFirebaseAuth();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      const email = userCredential.user.email;
      newUser(email, "", uid);
      //String vazia é passada por conta da configuração no backend. Espera receber senha ou vazio para declarar valor ou informar que conta foi criada a partir de serviços externos.
    })
    .catch((error) => {
      console.log(error);
    });
};

buttonRegister.addEventListener("click", handleGoogleSignIn);
