import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import showErrorsByFirebase from "../showErrors/firebaseErrors.js";
import authentication from "../../firebaseConnection.js";

const buttonLogin = document.querySelector(".button-login");

const emailUser = document.querySelector("#emailInput");
const passwordUser = document.querySelector("#passwordInput");

function handleLoginExistentUser(e) {
  e.preventDefault();
  const email = emailUser.value;
  const password = passwordUser.value;

  console.log("email:0", email);
  console.log("senha:0", password);
  const auth = authentication;
  console.log(auth);
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log("AUTH DO FIREBASE FRONTEND: ", auth);
      console.log("login data: ", userCredential.user);

      alert("Usuário logado");
      window.location.href = "home.html";
    })
    .catch((error) => {
      //Pode ser implementado middleware tanto aqui quanto no back no cadastro tbm
      const errorCode = error.code;
      console.log("bibibi, erruuuuu loggin");
      console.error("Erro ao logar: ", error);
      showErrorsByFirebase(errorCode);
    });
}

buttonLogin.addEventListener("click", handleLoginExistentUser);
