const buttonIniciarJuego = document.getElementById('btn-start');
const buttonAddWord = document.getElementById('btn-addword');

let palabras = [
  'ARROZ',
  'POLLO',
  'CAMION',
  'GATO',
  'PERRO',
  'CABALLO',
  'CAMISA',
  'PANTALON',
  'ZAPATO',
  'CAMARA',
  'CELULAR',
  'COMPUTADORA',
  'MESA',
  'SILLA',
  'SOFA',
];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];

let palabraLetrasAdivinadas = [];
palabraLetrasAdivinadas.length = palabra.length;

let fallos = 0;

const mostrarAddPalabra = () => {
  const anadirPalabraDiv = document.getElementsByClassName('anadir-palabra')[0];
  const menuPrincipal = document.getElementsByClassName('botones-iniciales')[0];

  menuPrincipal.style.display = 'none';
  anadirPalabraDiv.style.display = 'flex';
};

const cancelar = () => {
  const anadirPalabraDiv = document.getElementsByClassName('anadir-palabra')[0];
  const menuPrincipal = document.getElementsByClassName('botones-iniciales')[0];

  menuPrincipal.style.display = 'flex';
  anadirPalabraDiv.style.display = 'none';
};

const addPalabra = () => {
  const textarea = document.getElementById('palabraNueva');
  const palabra = textarea.value;
  if (palabra.length > 0) {
    palabras.push(palabra.toUpperCase());
    alert('Palabra agregada correctamente!');
    textarea.value = '';
    cancelar();
    iniciarJuego();
  } else {
    alert('Ingrese una palabra');
  }
};

const iniciarJuego = () => {
  alert('Tienes 7 intentos para adivinar la palabra');
  const menuPrincipal = document.getElementsByClassName('botones-iniciales')[0];
  const juego = document.getElementsByClassName('tablero-juego')[0];
  const imgAhorcado = document.getElementById('img-ahorcado');

  imgAhorcado.src = '';
  imgAhorcado.style.display = 'none';

  menuPrincipal.style.display = 'none';
  juego.style.display = 'flex';

  const lineas = document.getElementsByClassName('lineas-letras')[0];
  const lineasPalabra = palabra.length;
  let lineasUwU = '';

  for (let i = 0; i < lineasPalabra; i++) {
    lineasUwU += '_' + ' ';
  }

  lineas.innerHTML = lineasUwU;
};

const detectarLetra = () => {
  
  const textareaLetra = document.getElementById('intento-palabra');
  

  if (textareaLetra.value == '') {
    alert('Ingresa una letra');
  } else {
    const letra = textareaLetra.value[0].toUpperCase();
    textareaLetra.value = '';

    if (palabra.indexOf(letra) > -1) {
      const lineas = document.getElementsByClassName('lineas-letras')[0];
      let lineasUwU = '';
      lineas.innerHTML = '';
      for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
          palabraLetrasAdivinadas[i] = letra;
        }
      }

      for (let i = 0; i < palabraLetrasAdivinadas.length; i++) {
        if (palabraLetrasAdivinadas[i]) {
          lineasUwU += palabraLetrasAdivinadas[i] + ' ';
        } else {
          lineasUwU += '_' + ' ';
        }
      }
      lineas.innerHTML = lineasUwU;

      if (juegoGanado()) {
        setTimeout(() => {
          alert('Ganaste! Felicitaciones!');
          location.reload();
        }, 1000);
      }

    } else {
      fallos += 1;
      mostrarImagen();
    }
  }
};

const mostrarImagen = () => {
  const imgAhorcado = document.getElementById('img-ahorcado');
  imgAhorcado.style.display = 'block';
  imgAhorcado.src = 'assets/' + fallos + '.png';

  if (fallos == 7) {
    alert('Perdiste! La palabra era ' + palabra + '. Inténtalo de nuevo');
    location.reload();
  }
}

const juegoGanado = () => {
  if(isArrayFull(palabraLetrasAdivinadas)) {
    return true;
  } else {
    return false;
  }
}

function isArrayFull( arr )
{
  for ( var i = 0, l = arr.length; i < l; i++ )
  {
    if ( 'undefined' == typeof arr[i] || null === arr[i] )
    {
      return false
    }
  }
  return true;
}

