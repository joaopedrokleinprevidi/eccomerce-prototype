const admin = require("firebase-admin");

const newUser = async (email, senha) => {
  return new Promise((resolve, reject) => {
    admin
      .auth()
      .createUser({ email: email, senha: senha })
      .then((userCredential) => {
        console.log("credenciais de autenticação no backend: ", userCredential);
        console.log("Usuário criado com sucesso");
        const uid = userCredential.uid;
        resolve(uid);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar: ", error);
        reject(error.code);
      });
  });
};

module.exports = { newUser };
