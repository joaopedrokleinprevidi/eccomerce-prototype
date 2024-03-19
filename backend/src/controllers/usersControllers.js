const usersModel = require("../models/usersModel");

const getAllUsers = async (_request, response) => {
  const users = await usersModel.getAllUsers();
  return response.status(200).json(users);
};

const newUser = async (request, response) => {
  const users = await usersModel.newUser(request.body);
  return response.status(201).json(users);
};

const loginUser = async (request, response) => {
  const loggedUser = await usersModel.loginUser(request.body);
  return response.status(200).json(loggedUser);
};

module.exports = {
  getAllUsers,
  newUser,
  loginUser,
};
