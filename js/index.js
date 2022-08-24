import {search_aprendiz} from "./firebase/firebase.js";

const btnbuscar = document.getElementById('btnsearch')
const cargar = document.getElementById('tabla')

async function verification(){
  
  const cedula = document.getElementById('Inputcedula').value
  cargar.innerHTML=''
  const docRef = search_aprendiz(cedula)
  const docSnap = await docRef

  if(docSnap.exists())
  {
      console.log("congratulations: ",docSnap.data());
      cargar.innerHTML = `
        <div class="card-body" style="position: relative;">
          <img src="../imagenes/Sena.png" class="card-img-top" alt="..." style="margin: 5px; width:15%;">
          <img src="${docSnap.data().imagen}" class="card-img-top" alt="..." style="margin: 5px; width:65%;">
        </div>			  
        <br>
        <div class="card-body">
          <h2 style="text-align:center" >Aprendiz</h2>
        </div>
        
        <div class="card-body">
          <div class="linea" style="border-top: 3px solid rgb(241, 107, 24);
          height: 2px;"></div>
          <h3 class="card-title" style="text-align:center">Información del Carnet</h3>
          <div class="mb-3"> 
          <br>
              <label style="font-weight: bold; font-size:large;">Nombre: </label>
              <label">${docSnap.data().nom}</label>
          </div>
          <div class="mb-3"> 
              <label style="font-weight: bold; font-size:large;">Apellidos: </label>
              <label">${docSnap.data().apel}</label>
          </div>
          <div class="mb-3">
              <label style="font-weight: bold; font-size:large;">Tipo de documento: </label>
              <label for="">${docSnap.data().tdoc} </label>                      
          </div>
          <div class="mb-3"> 
            <label style="font-weight: bold; font-size:large;">Identificación No: </label>
            <label for=""> ${docSnap.data().numdoc}</label> 
          </div>
          <div class="linea" style="border-top: 3px solid rgb(241, 107, 24);
          height: 2px;"></div>
          <div class="mb-3">
              <h3 style="text-align:center">Información de Ficha</h3>
              <br>
          </div>
          <div class="mb-3">
              <label style="font-weight: bold; font-size:large;">Ficha No: </label>
              <label for="">${docSnap.data().ficha}</label>
          </div>
          <div class="mb-3">
              <label style="font-weight: bold; font-size:large;">Titulada: </label>
              <label for="">${docSnap.data().titulada}</label>
              <label style="font-weight: bold; font-size:large;"> Jornada: </label>
              <label for="">${docSnap.data().jornada}</label>
          </div>
          <div class="mb-3">
              <h6 style="font-weight: bold; font-size:large;">Sede</h6>
              <Label>${docSnap.data().sede}</Label>
          </div>
          <div class="mb-3">
              <h3 style="text-align:center">Regional Casanare</h3>
          </div>
      </div>
    `
  }
  else
  {
      console.log("failure");
  }
}

window.addEventListener('DOMContentLoaded', async() => {

  btnbuscar.addEventListener('click',verification)
})

