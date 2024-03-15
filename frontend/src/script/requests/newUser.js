const enderecoAPI = "http://localhost:3000";

const newUser = async (uid, email, senha, { ...rest }) => {
  await fetch(`${enderecoAPI}/users/register`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, email, senha, ...rest }),
  });
};

export default newUser;
