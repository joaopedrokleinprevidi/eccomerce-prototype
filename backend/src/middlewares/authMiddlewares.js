const admin = require("firebase-admin");

const verifyUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json("Token não informado");
  }

  const idToken = authHeader.split(" ")[1];

  await admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      //Case of valid token

      console.log("token decodificado: ", decodedToken);
      console.log("Usuário autenticado com sucesso");
      next();
    })
    .catch((error) => {
      console.error("Erro ao verificar token: ", error);
      return res.status(401).json("Token de autenticação inválido");
    });
};

const verifyAdmin = async (req, res, next) => {
  const uid = req.headers.uid;
  try {
    const snapshot = await admin
      .firestore()
      .collection("admins")
      .doc(uid)
      .get();

    if (!snapshot.empty && snapshot.exists) {
      res.status(200).json("Usuário autorizado: é um administrador.");
      next();
    } else {
      res.status(401).json("Usuário não é um administrador");
    }
  } catch (error) {
    console.log("Erro no backend ao verificar se é um administrador: ", error);
    res.status(500).json("Erro interno no servidor");
  }
};

module.exports = { verifyUser, verifyAdmin };
