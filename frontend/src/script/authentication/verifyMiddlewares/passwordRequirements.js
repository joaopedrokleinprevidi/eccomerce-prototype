const verifyPasswordRequirements = (password) => {
  let errorMessage = "";

  if (password.length < 6) {
    errorMessage = "A senha deve ter pelo menos 6 caracteres";
  }

  if (password.length > 14) {
    errorMessage = "A senha deve ter no máximo 14 caracteres";
  }

  if (!errorMessage == "") {
    return errorMessage;
  } else {
    return "A senha é válida.";
  }
};

export default verifyPasswordRequirements;
