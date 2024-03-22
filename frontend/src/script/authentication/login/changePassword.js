import { updatePassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";
import verifyPasswordRequirements from "../verifyMiddlewares/passwordRequirements.js";

const buttonChangePassword = document.querySelector("#button-change-password");
const inputChangePassword = document.querySelector("#inputchangepassword");

const changePassword = async () => {
  const user = await verifyIfUserIsAuth();
  const userData = user.atributes;
  console.log("userData in password: ", userData);

  const newPassword = inputChangePassword.value;
  console.log(newPassword);

  const response = verifyPasswordRequirements(newPassword);
  console.log("response in password: ", response);
  if (response == "A senha é válida.") {
    updatePassword(userData, newPassword)
      .then(async () => {
        alert("Senha alterada com sucesso");
        window.location.href = "login.html";
      })
      .catch(async (error) => {
        if ((error.code = "auth/requires-recent-login")) {
          alert(
            "Para validar essa ação, é preciso que tenha feito login recentemente. Redirecionaremos você até a pagina de login."
          );
          window.location.href = "login.html";
        }
        console.error("Erro ao alterar a senha: ", error);
      });
  } else {
    console.log("Senha inválida: ", response);
  }
};

buttonChangePassword.addEventListener("click", changePassword);
