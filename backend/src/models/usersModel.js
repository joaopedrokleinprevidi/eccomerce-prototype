const admin = require("firebase-admin");
const database = require("../config/firebaseConnection");
const bcryptService = require("../services/bcryptService");

const getAllUsers = async (response) => {
  await admin
    .firestore()
    .collection("users")
    .get()
    .then((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      response.json(users);
    });
};

const newUser = async (user) => {
  //Desestruturando dados de cadastro do usuário vindos do front-end
  const {
    uid,
    email,
    senha,
    nomeCompleto,
    cpf,
    celular,
    genero,
    dataNascimento,
    cep,
    endereco,
    numeroEndereco,
    complemento,
    referencia,
    cidade,
    estado,
  } = user;

  //Criptografando dados sensíveis antes de enviar ao banco de dados
  const hashedPassword = bcryptService.hashInput(senha);
  const hashedCPF = bcryptService.hashInput(cpf);

  //Enviando todos os dados do cadastro do usuário para o banco de dados
  const userRef = database.collection("users");

  await userRef
    .doc(uid)
    .set({
      uid: uid,
      email: email,
      senha:
        hashedPassword ||
        "Not defined, because user logged with other services.",
      nomeCompleto: nomeCompleto,
      cpf: hashedCPF,
      celular: celular,
      genero: genero,
      dataNascimento: dataNascimento,
      cep: cep,
      endereco: endereco,
      numeroEndereco: numeroEndereco,
      complemento: complemento,
      referencia: referencia,
      cidade: cidade,
      estado: estado,
    })
    .catch((error) => {
      console.error(error);
    });
};

const loginUser = async (user) => {
  const { email, senha } = user;

  await admin
    .firestore()
    .collection("users")
    .where("email", "==", email)
    .get()
    .then((snapshot) => {
      if (!snapshot.empty) {
        const user = snapshot.docs[0].data();
        console.log(user);

        const verifyPassword = bcryptService.compareInput(senha, user.senha);
        if (verifyPassword) {
          console.log("Usuário logado");
          return;
        } else {
          console.log("Senha incorreta");
        }
      }
    })
    .catch((error) => {
      console.error("Erro ao autenticar: ", error);
    });
};

module.exports = {
  getAllUsers,
  newUser,
  loginUser,
};
