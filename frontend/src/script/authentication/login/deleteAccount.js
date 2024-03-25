import { deleteUser } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import getAuth from "../../firebaseConnection.js";

const buttonDeleteUser = document.querySelector("#button-delete-user");

const deletingUserInFirebaseAuthentication = async () => {
  try {
    const auth = getAuth;
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

getAuth.onAuthStateChanged((user) => {
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
    await fetch("http://localhost:3000/users", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    });
  } catch (error) {
    console.error(
      "Erro no Front-End ao tentar deletar usuário no banco de dados: ",
      error
    );
  }
};
