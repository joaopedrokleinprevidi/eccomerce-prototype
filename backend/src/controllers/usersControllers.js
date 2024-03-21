const usersModel = require("../models/usersModel");

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
  const users = await usersModel.newUser(request.body);
  return response.status(201).json(users);
};

const editUser = async (request, response) => {
  const editedUser = await usersModel.editUser(request.body);
  return response.status(200).json(editedUser);
};

const deleteUser = async (request, response) => {
  await usersModel.deleteUser(request.body);
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
