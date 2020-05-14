console.log('Hello!');

let pers = 0
let dest = 0
let dias = 0
let uso = 0
let movint = 0
let intuse = 0
let movext = 0
let extuse = 0
let hotel = 0
let flete = 1

function calculo() {
    
    pers = (document.getElementById('pers').value),
    dest = (document.getElementById('dest').value),
    dias = (document.getElementById('days').value),
    uso = (document.getElementById('use').value),
    movint = (document.getElementById('movint').value),
    intuse = (document.getElementById('intuse').value),
    movext = (document.getElementById('movext').value),
    extuse = (document.getElementById('extuse').value),
    hotel = (document.getElementById('hotel').value),
    flete = (document.getElementById('flete').value)

    if ((pers===0 || dias ===0) ) {
        alert("Revisa el valor en Días y personas. No puede ser 0 (cero)")
        document.getElementById('resultado').innerHTML = "Error"
    } else {
        let viaticos = ((pers * uso * dest) + (movint * intuse) + (movext * extuse) + (hotel * 50 * pers) + (dias * pers * 30) + flete) * 1.1
    document.getElementById('resultado').innerHTML = "El monto total de los viaticos es de: " + Number(viaticos) + " Soles sin IGV"
    }
    
    console.log(typeof(viaticos));

    /*if (isNaN('viaticos')) {
        alert("Por favor llenar todos los espacios en blanco");
    } else {
        document.getElementById('resultado').innerHTML = viaticos
    }*/


}
