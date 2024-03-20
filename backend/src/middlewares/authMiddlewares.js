const admin = require('firebase-admin')

const verifyUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(401).json('Token não informado')
    }

    const idToken = authHeader.split(' ')[1]

    await admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
        //Case of valid token

        console.log("token decodificado: ", decodedToken)
        console.log("Usuário autenticado com sucesso")
        next()
    })
    .catch(error => {
        console.error('Erro ao verificar token: ', error);
        return res.status(401).json('Token de autenticação inválido')
    })
}

module.exports = {verifyUser};