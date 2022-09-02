const buttonIniciarJuego = document.getElementById('btn-start');
const buttonAddWord = document.getElementById('btn-addword');

let palabras = ["ARROZ", "POLLO", "CAMION", "GATO", "PERRO", "CABALLO", "CAMISA", "PANTALON", "ZAPATO", "CAMARA", "CELULAR", "COMPUTADORA", "MESA", "SILLA", "SOFA"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];

let palabraLetrasAdivinadas = [];
palabraLetrasAdivinadas.length = palabra.length;

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

  console.log(palabra);

  const lineas = document.getElementsByClassName('lineas-letras')[0];
  const lineasPalabra = palabra.length;
  let lineasUwU = "";

  for(let i = 0; i < lineasPalabra; i++){
    lineasUwU += "_" + " ";
  }

  lineas.innerHTML = lineasUwU;
}


const detectarLetra = () => {
  const textareaLetra = document.getElementById('intento-palabra');
  if(textareaLetra.value == ''){
    alert('Ingresa una letra');
  }else{
    const letra = textareaLetra.value[0].toUpperCase();
    textareaLetra.value = '';
    const lineas = document.getElementsByClassName('lineas-letras')[0];
    let lineasUwU = "";
    lineas.innerHTML = "";

    if(palabra.indexOf(letra) > -1){
      console.log('está')
      for (let i = 0; i < palabra.length; i++) {
        if(letra == palabra[i]){
          palabraLetrasAdivinadas[i] = letra;
        }
      }

      for (let i = 0; i < palabraLetrasAdivinadas.length; i++) {
        if(palabraLetrasAdivinadas[i]){
          lineasUwU += palabraLetrasAdivinadas[i] + " ";
        }else{
          lineasUwU += "_" + " ";
        }
      }

      lineas.innerHTML = lineasUwU;

      console.log(lineasUwU);
      console.log(palabraLetrasAdivinadas);

    }else{
      console.log('no está')
      fallos += 1
    }
    console.log(fallos)
  }
  
  
}