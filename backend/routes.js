const express = require("express");
const router = express.Router();
const usersControllers = require("./src/controllers/usersControllers.js");
const firebaseConfig = require("./src/config/environmentVariables/firebaseConfig/sendConfigToFrontEnd.js");
router.get("/config", (_req, res) => {
  res.json(firebaseConfig);
});

router.get("/users", usersControllers.getAllUsers);

router.post("/login", usersControllers.newUser);

module.exports = router;
