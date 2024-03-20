import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

import newUser from "../../requests/newUser.js";
import showErrorsByMiddlewaresInBackEnd from "../showErrors/backendErrors.js";

const buttonRegister = document.querySelector(".button-register");

const form = document.querySelector("form");

async function handleRegisterNewUser(event) {
  event.preventDefault();

  //Salvando senha de forma diferente, porque ela não irá ao banco de dados. 
  const senha = form.senha.value

  //Dados recebidos do usuário
  const dataUser = {
    email: form.email.value,
    nomeCompleto: form.nome_completo.value,
    cpf: form.cpf.value,
    celular: form.celular.value,
    genero: form.sexo.value,
    dataNascimento: form.nascimento.value,
    cep: form.cep.value,
    endereco: form.endereco.value,
    numeroEndereco: form.numero_endereco.value,
    complemento: form.complemento.value,
    referencia: form.referencia.value,
    cidade: form.cidade.value,
    estado: form.estado.value,
  };

  //Enviando dados para o Back-End > Banco De Dados
  const auth = await initializeFirebaseAuth();
  createUserWithEmailAndPassword(auth, dataUser.email, senha)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      newUser(uid, { ...dataUser });
      console.log({ ...dataUser });

      cleanFieldsOfForm();
    })
    .catch((error) => {
      console.error("Erro ao cadastrar: ", error);
      showErrorsByMiddlewaresInBackEnd(error);
    });
}

buttonRegister.addEventListener("click", handleRegisterNewUser);

const cleanFieldsOfForm = () => {
  form.email.value = "";
  form.senha.value = "";
  form.nome_completo.value = "";
  form.cpf.value = "";
  form.celular.value = "";
  form.nascimento.value = "";
  form.cep.value = "";
  form.endereco.value = "";
  form.numero_endereco.value = "";
  form.complemento.value = "";
  form.referencia.value = "";
  form.cidade.value = "";
};
