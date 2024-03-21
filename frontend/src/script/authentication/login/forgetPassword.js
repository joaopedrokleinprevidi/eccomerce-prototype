import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

const buttonForgetPassword = document.querySelector(".button-forget-password");
const emailInput = document.querySelector("#emailInput");

const requestNewPasswordWithEmail = async () => {
  const email = emailInput.value;

  const auth = await initializeFirebaseAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      console.error(error.code + " " + error.message);
    });
};

buttonForgetPassword.addEventListener("click", () => {
  requestNewPasswordWithEmail();
});
