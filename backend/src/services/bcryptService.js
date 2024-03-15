const bcrypt = require("bcryptjs");

const bcryptService = {};

bcryptService.hashInput = (input) => {
  return bcrypt.hashSync(input, 10);
};

bcryptService.compareInput = (input, hash) => {
  return bcrypt.compareSync(input, hash);
};

module.exports = bcryptService;
