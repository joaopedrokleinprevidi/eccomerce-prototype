const admin = require("firebase-admin");
const database = require("../config/firebaseConnection");

const getAllUsers = async (response) => {
  await admin
    .firestore()
    .collection("users")
    .get()
    .then((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      response.json(users);
    });
};

const newUser = async (user) => {
  const { email, senha, uid } = user;

  const userRef = database.collection("users");

  await userRef
    .doc(uid)
    .set({
      email: email,
      senha: senha || "Not defined, because user logged with other services.",
      uid: uid,
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getAllUsers,
  newUser,
};
