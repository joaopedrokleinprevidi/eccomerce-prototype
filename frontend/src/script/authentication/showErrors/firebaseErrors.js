const showErrorsByFirebase = async (errorCode) => {
  if (errorCode == "auth/email-already-exists") {
    alert("O email digitado está em uso.");
  }

  if (errorCode == "auth/invalid-email") {
    alert("O email digitado é inválido.");
  }

  if (errorCode == "auth/weak-password") {
    alert("A senha deve ter pelo menos 6 caracteres.");
  }

  if (errorCode == "auth/wrong-password") {
    alert("A senha ou o email estão incorretos.");
  }

  if (errorCode == "auth/user-not-found") {
    alert("Usuário não encontrado");
  }

  if (errorCode == "auth/invalid-credential") {
    alert("A senha ou o email estão incorretos.");
  }

  if (errorCode == "auth/too-many-requests") {
    alert(
      "Muitas tentativas incorretas de login. Aguarde para tentar novamente ou troque a sua senha."
    );
  }

  //Criar uma lógica para o erro ser impresso na tela para o usuário.
};

export default showErrorsByFirebase;
