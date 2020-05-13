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
let flete = 0


function calculo() {
    
    pers = parseFloat(document.getElementById('pers').value)
    dest = parseFloat(document.getElementById('dest').value)
    dias = parseFloat(document.getElementById('days').value)
    uso = parseFloat(document.getElementById('use').value)
    movint = parseFloat(document.getElementById('movint').value)
    intuse = parseFloat(document.getElementById('intuse').value)
    movext = parseFloat(document.getElementById('movext').value)
    extuse = parseFloat(document.getElementById('extuse').value)
    hotel = parseFloat(document.getElementById('hotel').value)
    flete = parseFloat(document.getElementById('flete').value)

    if (pers===0 || dias ===0 ) {
        alert("Revisa el valor en Días y personas. No puede ser 0 (cero)")
        document.getElementById('resultado').innerHTML = "Error"
    } else {
        let viaticos = ((pers * uso * dest) + (movint * intuse) + (movext * extuse) + (hotel * 50 * pers) + (dias * pers * 30) + flete) * 1.1
    document.getElementById('resultado').innerHTML = Number(viaticos) + " Soles sin IGV"
    }
    

    

    console.log(typeof(viaticos));

    /*if (isNaN('viaticos')) {
        alert("Por favor llenar todos los espacios en blanco");
    } else {
        document.getElementById('resultado').innerHTML = viaticos
    }*/

   
    
    
    
}