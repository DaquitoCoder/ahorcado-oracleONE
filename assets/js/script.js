const buttonIniciarJuego = document.getElementById('btn-start');
const buttonAddWord = document.getElementById('btn-addword');

let palabras = ["ARROZ", "POLLO", "CAMION", "GATO", "PERRO", "CABALLO", "CAMISA", "PANTALON", "ZAPATO", "CAMARA", "CELULAR", "COMPUTADORA", "MESA", "SILLA", "SOFA"];

let fallos = 0;

const mostrarAddPalabra = () => {
  const anadirPalabraDiv  = document.getElementsByClassName('anadir-palabra')[0];
  const menuPrincipal = document.getElementsByClassName('botones-iniciales')[0];

  menuPrincipal.style.display = 'none';
  anadirPalabraDiv.style.display = 'flex';
}

const cancelar = () => {
  const anadirPalabraDiv  = document.getElementsByClassName('anadir-palabra')[0];
  const menuPrincipal = document.getElementsByClassName('botones-iniciales')[0];

  menuPrincipal.style.display = 'flex';
  anadirPalabraDiv.style.display = 'none';
}

const addPalabra = () => {
  const textarea = document.getElementById('palabraNueva');
  const palabra = textarea.value;
  if(palabra.length > 0){
    palabras.push(palabra.toUpperCase());
    textarea.value = '';
  }else{
    alert('Ingrese una palabra');
    console.log(palabras);
  }
}

const iniciarJuego  = () => {
  const menuPrincipal = document.getElementsByClassName('botones-iniciales')[0];
  const juego = document.getElementsByClassName('tablero-juego')[0];

  menuPrincipal.style.display = 'none';
  juego.style.display = 'flex';

  const palabra = palabras[Math.floor(Math.random() * palabras.length)];

  console.log(palabra);

  const lineas = document.getElementsByClassName('lineas-letras')[0];
  const lineasPalabra = palabra.length;
  let lineasUwU = "";

  for(let i = 0; i < lineasPalabra; i++){
    lineasUwU += "_" + " ";
  }

  lineas.innerHTML = lineasUwU;
}