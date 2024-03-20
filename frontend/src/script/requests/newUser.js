const enderecoAPI = "http://localhost:3000";

const newUser = async (uid, {...rest} ) => {
  await fetch(`${enderecoAPI}/users/register`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, ...rest }),
  });
};

export default newUser;
