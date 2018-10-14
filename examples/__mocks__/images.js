const imagesCount = 200;

function generateSequence() {
    return Array.apply(null, {length: imagesCount}).map(Number.call, Number);
}

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function getRandomHeight() {
    const imageHeight = randomInteger(300, 500);
    return imageHeight;
}

function getRandomWidth() {
    const imageWidth = randomInteger(300, 500);
    return imageWidth;
}

function getRandomColor() {
    const letters = '0123456789abcdef';
    let color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function getImages() {
    return generateSequence().map(() => {
        const height = getRandomHeight();
        const width = getRandomWidth();
        const color = getRandomColor();
        return {
            src: `https://dummyimage.com/${width}x${height}/${color}/${color}`,
            height,
            width,
            alt: `${width}x${height}`
        };
    });
}