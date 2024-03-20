import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

import showErrorsByFirebaseInFrontEnd from "../showErrors/firebaseErrors.js";
// import homeUsers from '../../requests/home.js'
import cookies from '../cookies/cookies.js'

const buttonLogin = document.querySelector(".button-login");

const emailUser = document.querySelector("#emailInput");
const passwordUser = document.querySelector("#passwordInput");

async function handleLoginExistentUser(e) {
  e.preventDefault();
  const email = emailUser.value;
  const senha = passwordUser.value;

  const auth = await initializeFirebaseAuth();
  signInWithEmailAndPassword(auth, email, senha)
    .then(async (userCredential) => {
      console.log("login data: ", userCredential.user);
      const tokenUser = await userCredential.user.getIdToken(
        /*forceRefresh */
        true
      );
      cookies.setCookie("token", tokenUser)

      alert("Usuário logado");
      isLogged()
    })
    
    .catch((error) => {
      //Pode ser implementado middleware tanto aqui quanto no back no cadastro tbm
      const errorCode = error.code;
      showErrorsByFirebaseInFrontEnd(errorCode);
      console.error("Erro ao logar: ", error);
    });
}

const isLogged = async () => {
  const auth = await initializeFirebaseAuth()
  auth.onAuthStateChanged(async (user) => {
    if(user){
      alert("User has been authenticated with sucess")

      window.location.href = "home.html"
    }
  })
}


buttonLogin.addEventListener("click", handleLoginExistentUser);
