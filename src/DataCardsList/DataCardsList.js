function generateRandomTitle() {
    const n = Math.floor(Math.random() * 5) + 5;
    let title = '';
    const characters = 'RZHAKEL PRIKOL';

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        title += characters.substring(randomIndex, randomIndex + 1);
    }

    return title;
}

function generateRandomPrice() {
    const n = Math.floor(Math.random() * 9) + 1;
    return `$${n}0`;
}

function generateRandomProduct() {
    return {
        title: generateRandomTitle(),
        price: generateRandomPrice()
    };
}

const test = [];

for (let i = 0; i < 30; i++) {
    test.push(generateRandomProduct());
}

const DataCardsList = test;

export default DataCardsList;