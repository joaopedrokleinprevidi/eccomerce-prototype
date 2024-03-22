import verifyIfUserIsAuth from "../authentication/verifyMiddlewares/verifyIfUserIsAuth.js";

const enderecoAPI = "http://localhost:3000";
const paragrafo = document.querySelector("#paragrafo");

const homeUsers = async () => {
  try {
    const user = await verifyIfUserIsAuth();
    const userToken = user.token;
    console.log("cookie, i am: ", userToken);
    const response = await fetch(`${enderecoAPI}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    const responseData = await response.json();
    console.log(responseData);

    paragrafo.innerText = JSON.stringify(responseData);
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};

await homeUsers();
