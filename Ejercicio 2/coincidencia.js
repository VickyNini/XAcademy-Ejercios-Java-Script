const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findCommonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
}

function getArrayFromUser(prompt, numElements) {
    return new Promise((resolve) => {
        const elements = [];
        
        function askForElement(index) {
            if (index < numElements) {
                rl.question(`${prompt} Elemento ${index + 1}: `, (input) => {
                    elements.push(input);
                    askForElement(index + 1);
                });
            } else {
                resolve(elements);
            }
        }
        
        askForElement(0);
    });
}

async function getUserInput() {
    console.log('Por favor, ingrese los elementos para el primer array:');
    const array1 = await getArrayFromUser('Primer array', 3);

    console.log('Por favor, ingrese los elementos para el segundo array:');
    const array2 = await getArrayFromUser('Segundo array', 3);

    return [array1, array2];
}

(async function main() {
    try {
        const [array1, array2] = await getUserInput();
        const commonElements = findCommonElements(array1, array2);
        console.log(`Elementos comunes: ${commonElements}`);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
})();
