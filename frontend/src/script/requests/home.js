const enderecoAPI = 'http://localhost:3000'
const paragrafo = document.querySelector('#paragrafo');

const homeUsers = async (token) => {
    console.log('home users, token here: ',token)
    const users = await fetch(`${enderecoAPI}/users` , { 'Authentication': `${token}`})

}

export default homeUsers; 