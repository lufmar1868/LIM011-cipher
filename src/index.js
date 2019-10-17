// const cara1 = document.getElementById("iniciar");
// const cara2 = document.getElementById("pag2");
// const cara3 = document.getElementById("pag1");

// cara1.addEventListener("click", ()=> {
//     alert("buena")
//     cara2.classList.remove("hide");
//     alert("hola")
//     cara1.classList.add("hide");
//     alert("mira")
// })

document.getElementById("iniciar").addEventListener('click', ()=> {
    // alert("la hiciste")
    document.getElementById('pag2').classList.remove('hide')
    document.getElementById('pag1').classList.add('hide')
})


document.getElementById("btnredacta").addEventListener('click', ()=> {
    // alert("hola")
    document.getElementById('pag3').classList.remove('hide');
    document.getElementById('pag2').classList.add('hide');
})


document.getElementById("btnrecibe").addEventListener('click', ()=> {
    // alert("bien hecho")
    document.getElementById('pag4').classList.remove('hide')
    document.getElementById('pag2').classList.add('hide')
})


document.getElementById("offse1").addEventListener('click', ()=> {
    // alert("ya era hora")
    document.getElementById("numOffset").classList.remove('hide')
    document.getElementById('msje').classList.add('none')
})

// eslint-disable-next-line no-undef
codigo1.addEventListener("click",function(){
    document.getElementById("codigo1").classList.add("codigo1");
    document.getElementById("msjecodificado").classList.remove("display_none");
    document.getElementById("msjecodificado").classList.add("display_block");
})

const botoncodificar = document.getElementById("offse1");
botoncodificar.addEventListener("click", function() {
    let codificar = document.getElementById("msje").value;
    // textEncode = textEncode.toUpperCase();
    let number_offset = document.getElementById("numOffset").value;
    document.getElementById("msje1").innerHTML = window.cipher.encode(codificar, number_offset);
});

const botonDesencriptar = document.getElementById("btnDesencriptar");
botonDesencriptar.addEventListener("click", function() {
    let decodificar = document.getElementById("msjre").value;
    //textDecode = textDecode.toUpperCase();
    let number_offset = document.getElementById("numOffset1").value;
    document.getElementById("msjre1").innerHTML = window.cipher.decode(decodificar, number_offset);
});
