const admin = require("firebase-admin");
const database = require("../config/firebaseConnection");

const getAllUsers = async () => {
  const snapshot = await admin.firestore().collection("users").get();
  const users = snapshot.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }));
  return users;
};

const newUser = async (user) => {
  //Desestruturando dados de cadastro do usuário vindos do front-end
  const {
    uid,
    email,
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

  //Enviando todos os dados do cadastro do usuário para o banco de dados
  const userRef = database.collection("users");

  await userRef
    .doc(uid)
    .set({
      uid: uid,
      email: email,
      nomeCompleto: nomeCompleto,
      cpf: cpf,
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

module.exports = {
  getAllUsers,
  newUser,
};
