const usersModel = require("../models/usersModel");

const getAllUsers = async () => {
  const users = await usersModel.getAllUsers();
  return response.status(200).json(users);
};

const newUser = async (request, response) => {
  const users = await usersModel.newUser(request.body);
  return response.status(201).json(users);
};

module.exports = {
  getAllUsers,
  newUser,
};