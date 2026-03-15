const fs = require('fs');
const pdf = require('pdf-parse');

(async () => {
    try {
        const homeData = await pdf(fs.readFileSync('home.pdf'));
        fs.writeFileSync('home.txt', homeData.text);
        console.log("home.pdf parsed successfully.");

        const idData = await pdf(fs.readFileSync('Identidade visual Trivo.pdf'));
        fs.writeFileSync('identidade.txt', idData.text);
        console.log("Identidade visual Trivo.pdf parsed successfully.");
    } catch (error) {
        console.error("Error parsing pdfs:", error);
    }
})();
