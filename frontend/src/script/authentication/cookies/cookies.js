const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`
}

// Função para obter o valor de um cookie
const getCookie = (name) => {
    // Cria uma expressão regular para buscar o cookie pelo nome
    var cookieRegex = new RegExp("(?:(?:^|.*;\\s*)" + name + "\\s*\\=\\s*([^;]*).*$)|^.*$");
    // Executa a expressão regular na string de cookies
    var cookieValue = document.cookie.replace(cookieRegex, "$1");
    // Decodifica o valor do cookie
    return decodeURIComponent(cookieValue);
}

const cookies = {
    setCookie,
    getCookie,
}

export default cookies;