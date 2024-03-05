let palabras = "apple";
let entradaPalabra = document.getElementById("palabra");
let btnIntentar = document.getElementById("btnIntentar");
let mensaje = document.getElementById("mensaje");
let intentos = 0;
let intentosMaximos = 5;

function obtenerPalabra() {
  let palabraObtenida = entradaPalabra.value;
  let resultado = document.getElementById("grid").children;
  let intentosLabel = document.getElementById("intentos"); // Etiqueta para mostrar los intentos

  if (intentos >= intentosMaximos) {
    intentosLabel.textContent = "Has agotado todos los intentos. La palabra era: " + palabras;
    return;
  }

  for (let i = 0; i < palabraObtenida.length; i++) {
    if (palabraObtenida[i] === palabras[i]) {
      resultado[i].style.backgroundColor = "green";
    } else {
      let letraCorrectaPosicionIncorrecta = false;
      for (let j = 0; j < palabras.length; j++) {
        if (palabraObtenida[i] === palabras[j] && i !== j) {
          letraCorrectaPosicionIncorrecta = true;
          break;
        }
      }
      if (letraCorrectaPosicionIncorrecta) {
        resultado[i].style.backgroundColor = "yellow";
      } else {
        resultado[i].style.backgroundColor = "gray";
      }
    }
  }

  intentos++;
  intentosLabel.textContent = "Intento " + intentos + " de " + intentosMaximos;

  if (palabraObtenida === palabras) {
    console.log();
    intentosLabel.textContent = "¡Correcto! Has adivinado la palabra en " + intentos + " intentos.";
  } else {
    console.log();
    intentosLabel.textContent = "Incorrecto. Intento " + intentos + " de " + intentosMaximos;
  }
}

btnIntentar.addEventListener('click', obtenerPalabra);
