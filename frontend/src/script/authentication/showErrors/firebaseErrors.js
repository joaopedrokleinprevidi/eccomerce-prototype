const showErrorsByFirebaseInFrontEnd = async (errorCode) => {
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

export default showErrorsByFirebaseInFrontEnd;
