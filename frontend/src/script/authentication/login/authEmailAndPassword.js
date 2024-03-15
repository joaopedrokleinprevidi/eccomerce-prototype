import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

import loginUser from "../../requests/loginUser.js";

const buttonLogin = document.querySelector(".button-login");

const emailUser = document.querySelector("#emailInput");
const passwordUser = document.querySelector("#passwordInput");

async function handleLoginExistentUser(e) {
  e.preventDefault();
  const email = emailUser.value;
  const senha = passwordUser.value;

  const auth = await initializeFirebaseAuth();
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("login data: ", userCredential.user);

      loginUser(email, senha);
      alert("Usuário logado");
    })
    .catch((error) => {
      //Pode ser implementado middleware tanto aqui quanto no back no cadastro tbm
      if (error.code == "auth/invalid-credential") {
        alert("A senha ou o email estão incorretos.");
      }
      if (error.code == "auth/too-many-requests") {
        alert(
          "Muitas tentativas incorretas de login. Aguarde um pouco ou troque a senha."
        );
      }
      console.error("Erro ao logar: ", error);
    });
}

buttonLogin.addEventListener("click", handleLoginExistentUser);
