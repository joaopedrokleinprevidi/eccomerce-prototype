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

const getUserByEmail = async (user) => {
  const { email } = user;
  try {
    const snapshot = await admin
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get();

    if (snapshot.empty) {
      console.log("Nenhum usuário encontrado com o email fornecido");
      return null;
    }

    return snapshot.docs[0].data();
  } catch (error) {
    console.error("Erro ao obter o usuário: ", error);
    return null;
  }
};

const deleteUser = async (user) => {
  try {
    const userData = await getUserByEmail(user);
    const userUid = userData.uid;

    await admin.firestore().collection("users").doc(userUid).delete();

    console.log("Usuário deletado com sucesso.");
  } catch (error) {
    console.error("Ocorreu um erro ao deletar o usuário: ", error);
  }
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

const getDataOfUserByUid = async (uid) => {
  try {
    const userRef = database.collection("users").doc(uid);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      console.error("O documento do usuário não existe.");
      return null;
    }

    const dataUser = snapshot.data();
    return dataUser;
  } catch (error) {
    console.error("Falha ao obter todos os dados do usuário: ", error);
  }
};

const editUser = async (dataUser) => {
  try {
    const userRef = database.collection("users").doc(dataUser.uid);
    await userRef.update(dataUser);
    console.log("Usuário atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar os dados do usuário no backend: ", error);
  }
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  getDataOfUserByUid,
  newUser,
  editUser,
  deleteUser,
};
