const admin = require("firebase-admin");

const newUser = async (email, senha) => {
  const auth = admin.auth();
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
        reject();
      });
  });
};

const loginUser = async (email, senha) => {
  const auth = admin.auth();
  admin
    .auth()
    .signInWithEmailAndPassword(auth, email, senha)
    .then(async (userCredential) => {
      console.log("login data: ", userCredential.user);
      alert("Usuário logado");
    })

    .catch((error) => {
      //Pode ser implementado middleware tanto aqui quanto no back no cadastro tbm
      console.error("Erro ao logar: ", error);
    });
};

module.exports = { newUser, loginUser };
