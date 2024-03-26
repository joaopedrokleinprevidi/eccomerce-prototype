import { deleteUser } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import authentication from "../../firebaseConnection.js";
import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";

const buttonDeleteUser = document.querySelector("#button-delete-user");

const deletingUserInFirebaseAuthentication = async () => {
  try {
    const auth = authentication;
    const user = auth.currentUser;
    const userUid = user.uid;
    deletingUserInDataBase(userUid);

    if (user) {
      console.log(user);
      deleteUser(user)
        .then(() => {
          alert("Usuário deletado.");
          window.location.href = "register.html";
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Nenhum usuário autenticado.");
    }
  } catch (error) {
    console.error(error);
  }
};

authentication.onAuthStateChanged((user) => {
  if (user) {
    alert("Usuário autenticado");
    // Se o usuário estiver autenticado, podemos prosseguir com a exclusão
    buttonDeleteUser.addEventListener("click", () =>
      deletingUserInFirebaseAuthentication()
    );
  }
});

const deletingUserInDataBase = async (uid) => {
  try {
    const user = await verifyIfUserIsAuth();
    const userToken = user.token;

    await fetch("http://localhost:3000/users", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({ uid }),
    });
  } catch (error) {
    console.error(
      "Erro no Front-End ao tentar deletar usuário no banco de dados: ",
      error
    );
  }
};
