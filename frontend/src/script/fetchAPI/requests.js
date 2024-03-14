const enderecoAPI = "http://localhost:3000";

const newUser = async (email, senha, uid) => {
  await fetch(`${enderecoAPI}/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha, uid }),
  });
};

export default newUser;
