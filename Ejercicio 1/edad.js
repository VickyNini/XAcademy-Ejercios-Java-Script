const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingresa tu edad: ', (respuesta) => {
  
  const edad = parseInt(respuesta, 10);

  if (edad >= 18) {
    console.log('Es mayor de 18 años, puede conducir.');
  } else {
    console.log('No es mayor de 18 años, no puede conducir.');
  }

  rl.close();
});
