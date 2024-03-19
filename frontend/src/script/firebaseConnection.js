import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

let firebaseConfig;

// Função para inicializar o Firebase Auth
async function initializeFirebaseAuth() {
  // Fetch para obter o firebaseConfig do backend
  await fetch("http://localhost:3000/config") //TIRAR O ACESSO DESSA REQUISIÇÃO PARA TODOS.
    .then(async (response) => {
      const configData = await response.json();
      firebaseConfig = configData;
      return firebaseConfig;
    })
    .catch((error) => {
      console.error(
        "Erro ao iniciar o Firebase Authentication no FrontEnd: " + error
      );
    });

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  return auth;
}

export default initializeFirebaseAuth;
