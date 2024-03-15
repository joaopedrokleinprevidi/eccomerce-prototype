const enderecoAPI = "http://localhost:3000";

const loginUser = async (email, senha) => {
  await fetch(`${enderecoAPI}/users/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });
};

export default loginUser;
