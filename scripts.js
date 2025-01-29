document.getElementById('art-generator').addEventListener('submit', function (e) {
    e.preventDefault();
    const prompt = document.querySelector('input').value;
    generateArt(prompt);
});

function generateArt(prompt) {
    const generatedArtDiv = document.getElementById('generated-art');
    generatedArtDiv.innerHTML = `<p>Generating art for: "${prompt}"...</p>`;

    //placeholder
    setTimeout(() => {
        generatedArtDiv.innerHTML = `
            <img src="https://via.placeholder.com/400x400" alt="Generated Art">
            <p>Your AI-generated art is ready!</p>
        `;
    }, 2000);
}