import initializeFirebaseAuth from "../firebaseConnection.js";

const verifyIfUserIsAuth = async () => {
  const auth = await initializeFirebaseAuth();
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userParams = {
          uid: user.uid,
        };
        resolve(userParams);
      } else {
        console.error("Erro ao verificar se o usuário está autenticado.");
        window.location.href = "login.html";
        reject();
      }
    });
  });
};

export default verifyIfUserIsAuth;
