const usersModel = require("../models/usersModel");
const usersFirebaseService = require("../services/usersFirebaseService");

const getAllUsers = async (_request, response) => {
  const users = await usersModel.getAllUsers();
  return response.status(200).json(users);
};

const getUserByEmail = async (request, response) => {
  const user = await usersModel.getUserByEmail(request.body);
  return response.status(200).json(user);
};

const getDataOfUserByUid = async (request, response) => {
  const { uid } = request.params;
  const dataUser = await usersModel.getDataOfUserByUid(uid);
  return response.status(200).json(dataUser);
};

const newUser = async (request, response) => {
  try {
    const uid = await usersFirebaseService.newUser(
      request.body.email,
      request.body.senha
    );
    if (uid != undefined) {
      const users = await usersModel.newUser(uid, request.body);
      return response.status(201).json(users);
    }
  } catch (error) {
    console.error(
      "Erro ao tentar cadastrar o usuário no backend (controller): ",
      error
    );
    //Retornando erro para tratamento adequado no Front-End
    return response.status(400).json(error);
  }
};

// const loginUser = async (request, response) => {
//   try {
//     const user = await usersFirebaseService.loginUser(
//       request.body.email,
//       request.body.senha
//     );
//     return response.status(200).json(user);
//   } catch (error) {
//     console.error(
//       "Erro ao tentar logar o usuário no backend (controller): ",
//       error
//     );
//   }
// };

const editUser = async (request, response) => {
  const editedUser = await usersModel.editUser(request.body);
  return response.status(200).json(editedUser);
};

const deleteUser = async (request, response) => {
  await usersModel.deleteUser(request.body.uid);
  return response
    .status(200)
    .json({ message: "Usuário deletado com sucesso." });
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  getDataOfUserByUid,
  newUser,
  editUser,
  deleteUser,
};
