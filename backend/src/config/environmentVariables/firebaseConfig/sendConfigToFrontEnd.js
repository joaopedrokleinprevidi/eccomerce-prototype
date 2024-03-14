// Arquivo criado para enviar a configuração "firebaseConfig" ao Front End. Pois o Firebase Connection está no front-end e precisa do "firebaseConfig" para funcionar, e para poder utilizar o serviço Firebase Authentication no Front-End.
require("dotenv").config({
  path: "backend/src/config/environmentVariables/firebaseConfig/.env",
});

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_CONFIG_APP_ID,
};

module.exports = firebaseConfig;
