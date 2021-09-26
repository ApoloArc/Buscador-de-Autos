//Selects
const marca = document.getElementById('marca');
const year = document.getElementById('year');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');

//Clases

const resultado = document.getElementById('resultado');


const max = new Date().getFullYear();
const min = max - 10;   

//Contenedor de Seleccion

const seleccion = {
    marca: '',
    year: '',
    minimo:  '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


//Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
    llenarSelect();
})

//Escuchar los cambios en los Selects

marca.addEventListener('change', e=>{
    seleccion.marca = e.target.value;
    filtrarAutos();
})
year.addEventListener('change', e=>{
    seleccion.year = parseInt(e.target.value);
    filtrarAutos();
})
minimo.addEventListener('change', e =>{
    seleccion.minimo = e.target.value;
    filtrarAutos();
})
maximo.addEventListener('change', e =>{
    seleccion.maximo = e.target.value;
    filtrarAutos();
})
puertas.addEventListener('change', e =>{
    seleccion.puertas = parseInt(e.target.value);
    filtrarAutos();
})
transmision.addEventListener('change', e =>{
    seleccion.transmision = e.target.value;
    filtrarAutos();
})
color.addEventListener('change', e =>{
    seleccion.color = e.target.value;
    filtrarAutos();
})
//Funciones o variables

function mostrarAutos(autos) {
    limpiarHTML();
    autos.forEach(auto => {
        
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, precio, color, transmision} = auto;

        autoHTML.textContent =   ` ${marca}, ${modelo} - ${year} - ${precio} - ${color} - transmisión: ${transmision}`

        resultado.appendChild(autoHTML);

    });
}

function limpiarHTML() {
    while (resultado.firstChild) {

        resultado.removeChild(resultado.firstChild);
        
    }    
}

function llenarSelect() {

    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
    }

}

function filtrarAutos() {
    
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    
    if (resultado.length) {
        mostrarAutos(resultado);    
    }else{
        sinResultado();
    }
}

function sinResultado() {
    limpiarHTML();
    const sinResultado = document.createElement('div');
    sinResultado.classList.add('alerta', 'error');
    sinResultado.textContent = 'No se han encontrado resultados, por favor realiza otra búsqueda'
    resultado.appendChild(sinResultado);
}

function filtrarMarca(auto) {
    const {marca} = seleccion;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto) {
    const {year} = seleccion;
    if (year) {
        return auto.year === year;
    }
    return auto;
}
function filtrarMinimo(auto) {
    const {minimo} = seleccion;

    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    
    const{maximo} = seleccion;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;

}
function filtrarPuertas(auto) {
 
    const {puertas} = seleccion;

    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
 
    const {transmision} = seleccion;

    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = seleccion;

    if (color) {
        return auto.color === color;
    }
    return auto;
}