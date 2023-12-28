let colores = new Array("#F1f5f8","green","red","#81CEB0","#0D2F01","#5CACC2","#DA60AE")

let boton = document.getElementById('boton')

const color = document.querySelector('.color')

boton.addEventListener("click", function(){
    const nmroRandom = getnmroRandom();
    console.log(nmroRandom);

    document.body.style.backgroundColor = colores[nmroRandom]
    color.textContent = colores[nmroRandom];
    
});

function getnmroRandom() {
    return Math.floor(Math.random() * colores.length);
}






