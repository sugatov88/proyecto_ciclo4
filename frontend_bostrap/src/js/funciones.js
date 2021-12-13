let colores =["blue","red","white","black","brown","gray","purple","green","yellow","orange","coral"]

function Cambiarcolor(){
    let indice =parseInt(Math,random()*8)-1;
    let color =colores[indice];
    document.querySelector("body").style.background=color
}

let colores2=["blue","red","white","black","brown"]

function cambiarfondo(){
    let indice2 =parseInt(Math,random()*5)-1;
    let color2 =colores2[indice2];
    document.querySelector("body").style.background=color2
}

(function (){
    'use strict' 

    //
    var forms=document.querySelectorAll('needs-valition')

    Array.prototype.slice.call(forms)
        .forEach(function (form){
        .form.addEventListener('submit',function(event){
            if(!form.checkValidity()){
                event.preventDefault()
                event.stopPropagation()
            }else{
                RegistrarUsuario();
                event.preventDefault()
            }
            form.classList.add('was-validated')
        },false)
    })
  })()
  
  function RegustrarUsuario(){
      alert("Se registró el usuario con Exito")
    //CAPTURANDO Informacion para llevarla a loopback
    let nombres =document.querySelector("txtnombres").value
    let apellidos =document.querySelector("txtApellidos").value
    let correo =document.querySelector("txtCorreo").value
    let celular =document.querySelector("txCelular").value

    let url= `http://127.0.0.1:3000/nuevo-usuarios`;

    let datos={
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        celular: celular
    };
    fetch (url, {
        method : 'POST',
        body : datos,
        headers :{
            'content-Type':'application/json'
        }
   }).then (res =>res.json())
   .then(mensaje =>  {
       console.log(mensaje)
   }) 
  }




