import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import showErrorsByFirebase from "../showErrors/firebaseErrors.js";
// import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";
import getAuth from "../../firebaseConnection.js";

const buttonLogin = document.querySelector(".button-login");

const emailUser = document.querySelector("#emailInput");
const passwordUser = document.querySelector("#passwordInput");

async function handleLoginExistentUser(e) {
  e.preventDefault();
  const email = emailUser.value;
  const senha = passwordUser.value;

  console.log("email", email);
  console.log("senha", senha);
  const auth = getAuth;
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("AUTH DO FIREBASE FRONTEND: ", auth);
      console.log("login data: ", userCredential.user);
      // await verifyIfUserIsAuth();

      alert("Usuário logado");
      window.location.href = "home.html";
    })

    .catch((error) => {
      //Pode ser implementado middleware tanto aqui quanto no back no cadastro tbm
      const errorCode = error.code;
      showErrorsByFirebase(errorCode);
      console.log("bibibi, erruuuuu loggin");
      console.error("Erro ao logar: ", error);
    });
}

// const isLogged = async () => {
//   const auth = await initializeFirebaseAuth();
//   auth.onAuthStateChanged(async (user) => {
//     if (user) {
//       alert("User has been authenticated with sucess");

//       window.location.href = "home.html";
//     }
//   });
// };

buttonLogin.addEventListener("click", handleLoginExistentUser);
