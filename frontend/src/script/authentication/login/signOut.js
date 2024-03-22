import { signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

const buttonLogout = document.querySelector(".button-logout");

const logoutUser = async () => {
  const auth = await initializeFirebaseAuth();

  signOut(auth)
    .then(() => {
      console.log("Usuário deslogado com sucesso.");
    })
    .catch((error) => {
      console.error("Erro. Não conseguimos deslogar o usuário: ", error);
    });
};

buttonLogout.addEventListener("click", logoutUser);

export default logoutUser;
