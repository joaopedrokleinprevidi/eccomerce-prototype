import { deleteUser } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

const buttonDeleteUser = document.querySelector('#button-delete-user');

const deletingUserInFirebaseAuthentication = async () => {

    try {

    const auth = await initializeFirebaseAuth()
    const user = await auth.currentUser;
    const userEmail = await user.email;
    deletingUserInDataBase(userEmail)
    
    if(user){
        console.log(user)
        deleteUser(user).then(()=>{
            alert('Usuário deletado.')
            window.location.href = 'register.html'
        }).catch((error)=>{
            console.error(error)
        })
    }else {
        console.log("Nenhum usuário autenticado.")
    }
    }catch(error){
        console.error(error)
    }
}

initializeFirebaseAuth().then(auth => {
    auth.onAuthStateChanged(user => {
        if (user) {
            alert("Usuário autenticado")
            // Se o usuário estiver autenticado, podemos prosseguir com a exclusão
            buttonDeleteUser.addEventListener('click', async ()=> deletingUserInFirebaseAuthentication() )     
        }
    });
});


const deletingUserInDataBase = async (email) => {
     
}