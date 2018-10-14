function generateSequence(imagesCount) {
    // eslint-disable-next-line
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
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function getImages(width = false, height = false, color = false, imagesCount = 200) {
    return generateSequence(imagesCount).map(() => {
        const newHeight = height || getRandomHeight();
        const newWidth = width || getRandomWidth();
        const newColor = color || getRandomColor();
        return {
            src: `https://dummyimage.com/${newWidth}x${newHeight}/${newColor}/${newColor}`,
            height: newHeight,
            width: newWidth,
            alt: `${newWidth}x${newHeight}`,
        };
    });
}
