const Jimp = require('jimp');

async function cropImages() {
    try {
        const image = await Jimp.read('Identidade visual Trivo_page-0001.jpg');
        const w = image.bitmap.width;
        const h = image.bitmap.height;

        // The colored logo is roughly at the top, leaving a bit of padding.
        // It's quite wide, and height is small.
        // Let's take the first 25% height
        image.crop(Math.floor(w * 0.1), Math.floor(h * 0.05), Math.floor(w * 0.8), Math.floor(h * 0.25));
        // Remove white background boundaries using autocrop (trim like feature)
        image.autocrop();

        await image.writeAsync('logo.png');
        console.log('Logo cropped successfully.');
    } catch (err) {
        console.error('Error cropping image:', err);
    }
}

cropImages();
