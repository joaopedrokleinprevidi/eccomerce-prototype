const admin = require('firebase-admin')

const verifyUser = async (req, res, next) => {
    const idToken = req.body.Authentication;
    //body ou header?
    //ele nao tá recebendo esse token
    console.log("idtoken no back: ", idToken)
    if(!idToken){
        res.status(401).json('Token não informado')
    }

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