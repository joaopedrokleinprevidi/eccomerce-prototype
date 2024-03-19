import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

import loginUser from "../../requests/loginUser.js";
import showErrorsByFirebaseInFrontEnd from "../showErrors/firebaseErrors.js";

import homeUsers from '../../requests/home.js'

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
      console.log("token data: ", tokenUser);
      loginUser(email, senha);
      alert("Usuário logado");
      isLogged(tokenUser)
    })
    
    .catch((error) => {
      //Pode ser implementado middleware tanto aqui quanto no back no cadastro tbm
      const errorCode = error.code;
      showErrorsByFirebaseInFrontEnd(errorCode);
      console.error("Erro ao logar: ", error);
    });
}

const isLogged = async (token) => {
  const auth = await initializeFirebaseAuth()
  auth.onAuthStateChanged(async (user) => {
    if(user){
      alert("User has been authenticated with sucess")
      console.log(user)
      await homeUsers(token).then(response => {console.log(response)} ).catch(error => { console.error("Deu erro ao chamar HomeUsers: " + error)})
      // await homeUsers(token);
    }
  })
}


buttonLogin.addEventListener("click", handleLoginExistentUser);
