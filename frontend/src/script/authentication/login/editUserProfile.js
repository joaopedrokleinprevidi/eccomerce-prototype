import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";

const buttonEditProfile = document.querySelector("#button-edit-profile");
const buttonSaveChanges = document.querySelector(".button-save");
const form = document.querySelector("form");

const goToPageEditProfile = () => {
  window.location.href = "editprofile.html";
};

const getDataOfUser = async () => {
  try {
    const user = await verifyIfUserIsAuth();
    const userUid = user.atributes.uid;
    const userToken = user.token;
    console.log("user uid: ", userUid);
    const response = await fetch(
      `http://localhost:3000/users/editProfile/${userUid}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    const data = await response.json();
    console.log("data of user: ", data);
    return data;
  } catch (error) {
    console.error("Erro ao tentar pegar dados do usuário: ", error);
  }
};

const receiveDataInProfileEditFields = async () => {
  try {
    const response = await getDataOfUser();
    console.log(response);

    form.nome_completo.value = response.nomeCompleto;
    form.celular.value = response.celular;
    form.cep.value = response.cep;
    form.estado.value = response.estado;
    form.cidade.value = response.cidade;
    form.endereco.value = response.endereco;
    form.numero_endereco.value = response.numeroEndereco;
    form.complemento.value = response.complemento;
    form.referencia.value = response.referencia;
  } catch (error) {
    console.error(
      "Erro ao trazer os dados atuais do usuário para os campos: ",
      error
    );
  }
};

const getUpdatedDataOfUserAfterFilling = async () => {
  const user = await verifyIfUserIsAuth();
  const userUid = user.atributes.uid;

  const updatedDataOfUser = {
    uid: userUid,
    nomeCompleto: form.nome_completo.value,
    celular: form.celular.value,
    cep: form.cep.value,
    estado: form.estado.value,
    cidade: form.cidade.value,
    endereco: form.endereco.value,
    numeroEndereco: form.numero_endereco.value,
    complemento: form.complemento.value,
    referencia: form.referencia.value,
  };

  return updatedDataOfUser;
};

const saveChanges = async () => {
  try {
    const updatedDataOfUser = await getUpdatedDataOfUserAfterFilling();
    const user = await verifyIfUserIsAuth();
    const userToken = user.token;
    console.log("user token in saveChanges", userToken);

    console.log(updatedDataOfUser);
    await fetch("http://localhost:3000/users/editProfile", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(updatedDataOfUser),
    });
    alert("Usuário atualizado com sucesso");
    window.location.href = "home.html";
  } catch (error) {
    console.error(
      "Erro ao tentar salvar as alterações realizadas pelo usuário: ",
      error
    );
  }
};

if (window.location.href.includes("editprofile")) {
  const awaitRunEditProfile = async () => {
    await receiveDataInProfileEditFields();
  };
  awaitRunEditProfile();
  buttonSaveChanges.addEventListener("click", saveChanges);
}

if (window.location.href.includes("home")) {
  buttonEditProfile.addEventListener("click", goToPageEditProfile);
}
