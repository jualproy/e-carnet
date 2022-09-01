import {loginvalidation} from "./firebase/firebase.js";

const logueo = document.getElementById('loginbtn')

async function LoginInit(){

  const user = document.getElementById('Inputcedula').value
  const pass = document.getElementById('Inputpass').value

  const sesion = loginvalidation(user,pass)
  const validation = await sesion

  if(validation != null)
  {
    alert("Usuario: "+user+" validado")
    window.location.href="../Templates/Registro.html";
  }
  else{
    console.log("Sesion "+user+" sin acceso")
    alert("Error usuario: "+user+" verifique usuario y/o contraseña")
  }


}
window.addEventListener('DOMContentLoaded', async() => {

    logueo.addEventListener('click',LoginInit)
  })