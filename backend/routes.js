const express = require("express");
const router = express.Router();
const usersControllers = require("./src/controllers/usersControllers.js");
// const inputsMiddlewares = require("./src/middlewares/inputsMiddlewares.js");
const authMiddlewares = require("./src/middlewares/authMiddlewares.js");

const firebaseConfig = require("./src/config/environmentVariables/firebaseConfig/sendConfigToFrontEnd.js");
router.get("/config", (_req, res) => {
  res.json(firebaseConfig);
});

router.get("/users", authMiddlewares.verifyUser, usersControllers.getAllUsers);

router.get(
  "/users/editProfile/:uid",
  authMiddlewares.verifyUser,
  usersControllers.getDataOfUserByUid
);
router.put(
  "/users/editProfile",
  authMiddlewares.verifyUser,
  usersControllers.editUser
);

router.delete(
  "/users",
  authMiddlewares.verifyUser,
  usersControllers.deleteUser
);

router.post(
  "/users/register",
  // inputsMiddlewares.validateInputs,
  // inputsMiddlewares.validateRegister,
  usersControllers.newUser
);

module.exports = router;
