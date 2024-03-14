import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import newUser from "../fetchAPI/requests.js";
import initializeFirebaseAuth from "../firebaseConnection.js";

const buttonRegister = document.querySelector(".button-register");
const emailUser = document.querySelector("#emailInput");
const passwordUser = document.querySelector("#passwordInput");

async function handleLoginRegister() {
  const email = emailUser.value;
  const senha = passwordUser.value;

  const auth = await initializeFirebaseAuth();
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      newUser(email, senha, uid);

      emailUser.value = "";
      passwordUser.value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, " ", errorMessage);
    });
}

buttonRegister.addEventListener("click", handleLoginRegister);
