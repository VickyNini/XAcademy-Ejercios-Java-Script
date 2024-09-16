const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Por favor, ingresa su nota: ', (respuesta) => {
    
    const nota = parseInt(respuesta, 10);

    if (nota < 0 || nota > 10){
        console.log('Nota no valida.');
    } else if (nota <= 3){
        console.log('Muy deficiente.');
    } else if (nota <= 5){
        console.log('Insuficiente.');
    }else if (nota <= 6){
        console.log('Suficiente.');
    }else if (nota <= 7){
        console.log('Bien.');
    }else if (nota <= 9){
        console.log('Notable.');
    }else {
        console.log('Sobresaliente.');
    }

    rl.close();
  });