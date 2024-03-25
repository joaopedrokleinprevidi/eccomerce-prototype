const buttonRegister = document.querySelector(".button-register");
const form = document.querySelector("form");

const receiveDataOfUser = () => {
  const dataUser = {
    email: form.email.value,
    senha: form.senha.value,
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
  return dataUser;
};

const enderecoAPI = "http://localhost:3000";

const newUser = async () => {
  try {
    const dataOfUser = receiveDataOfUser();
    await fetch(`${enderecoAPI}/users/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataOfUser),
    });
    cleanFieldsOfForm();
  } catch (error) {
    console.error("Erro no backend ao tentar cadastrar usuário: ", error);
  }
};

buttonRegister.addEventListener("click", async () => {
  await newUser();
});

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
