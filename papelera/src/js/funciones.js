let colores =["blue","black","white","gray","purple","red","green","yellow"]

function CambiarFondo(){
    let indice = parseInt(Math.random() * 8 )-1;
    let color =colores[indice];
    document.querySelector("table").style.background = color;
}