// const validateInputs = (request, response, next) => {
//   const { body } = request;

//   let errorMessage = "";

//   if (body.nomeCompleto == "" || body.nomeCompleto == undefined) {
//     errorMessage = 'O campo "Nome Completo" é obrigatório.';
//   }

//   if (body.email == "" || body.email == undefined) {
//     errorMessage = 'O campo "Email" é obrigatório.';
//   }

//   if (body.senha == "" || body.senha == undefined) {
//     errorMessage = 'O campo "Senha" é obrigatório.';
//   }

//   if (body.dataNascimento == "" || body.dataNascimento == undefined) {
//     errorMessage = 'O campo "Data de Nascimento" é obrigatório.';
//   }

//   if (body.celular == "" || body.celular == undefined) {
//     errorMessage = 'O campo "Celular" é obrigatório.';
//   }

//   if (body.cpf == "" || body.cpf == undefined) {
//     errorMessage = 'O campo "CPF" é obrigatório.';
//   }

//   if (body.genero == "" || body.genero == undefined) {
//     errorMessage = 'O campo "Gênero" é obrigatório.';
//   }

//   if (body.numeroEndereco == "" || body.numeroEndereco == undefined) {
//     errorMessage = 'O campo "Número do Endereço" é obrigatório.';
//   }

//   if (body.cep == "" || body.cep == undefined) {
//     errorMessage = 'O campo "CEP" é obrigatório.';
//   }

//   if (body.endereco == "" || body.endereco == undefined) {
//     errorMessage = 'O campo "Endereço" é obrigatório.';
//   }

//   if (body.estado == "" || body.estado == undefined) {
//     errorMessage = 'O campo "Estado" é obrigatório.';
//   }

//   if (body.cidade == "" || body.cidade == undefined) {
//     errorMessage = 'O campo "Cidade" é obrigatório.';
//   }

//   if (!errorMessage == "") {
//     return response.status(400).json(errorMessage);
//   }

//   next();
// };

// const validateRegister = (request, response, next) => {
//   const { body } = request;

//   let errorMessage = "";

//   if (body.senha.length <= 5 || body.senha.length >= 16) {
//     errorMessage = 'O campo "senha" deve conter entre 6 a 15 caracteres.';
//   }

//   if (body.cpf.length <= 10 || body.cpf.length >= 15) {
//     errorMessage = 'Preencha o campo "CPF" corretamente. ';
//   }

//   if (!errorMessage == "") {
//     return response.status(400).json(errorMessage);
//   }

//   next();
// };

// const validateLogin = (request, response, next) => {
//   const { body } = request;

//   let errorMessage = "";

//   if (body.senha.length <= 5 || body.senha.length >= 16) {
//     errorMessage = 'O campo "senha" deve conter entre 6 a 15 caracteres.';
//   }

//   if (!errorMessage == "") {
//     return response.status(400).json(errorMessage);
//   }

//   next();
// };

// module.exports = {
//   validateInputs,
//   validateRegister,
//   validateLogin,
// };
