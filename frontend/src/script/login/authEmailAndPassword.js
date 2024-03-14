import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import newUser from "../fetchAPI/requests.js";
import initializeFirebaseAuth from "../firebaseConnection.js";

const buttonRegister = document.querySelector(".button-register");
const buttonLogin = document.querySelector(".button-login");

const emailUser = document.querySelector("#emailInput");
const passwordUser = document.querySelector("#passwordInput");

async function handleRegisterNewUser() {
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
      console.error("Erro ao cadastrar: ", error);
    });
}

async function handleLoginExistentUser() {
  const email = emailUser.value;
  const senha = passwordUser.value;

  const auth = await initializeFirebaseAuth();
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log(userCredential);
      window.location.href = "../html/index.html";
    })
    .catch((error) => {
      console.error("Erro ao logar: ", error);
    });
}

buttonRegister.addEventListener("click", handleRegisterNewUser);
buttonLogin.addEventListener("click", handleLoginExistentUser);
