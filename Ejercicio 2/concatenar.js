const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function concatenarArray(array) {
    return array.join('');
}

function getUserInput() {
    return new Promise((resolve, reject) => {
        rl.question('Ingrese la primera palabra: ', (firstString) => {
            rl.question('Ingrese la segunda palabra: ', (secondString) => {
                resolve([firstString, secondString]);
                rl.close();
            });
        });
    });
}

(async function main() {
    try {
        const getUserInputArray = await getUserInput();
        const concatenatedString = concatenarArray(getUserInputArray);
        console.log(`Cadena concatenada: ${concatenatedString}`);
    } catch (error) {
        console.error('Error:', error);
    }
})();
