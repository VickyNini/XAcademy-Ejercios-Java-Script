function piramide(numMax) {
    for (let i = 1; i <= numMax; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line +=j;
        }
        console.log(line);
    }
}

piramide(6);