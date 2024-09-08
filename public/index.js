const form = document.getElementById('urlForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;

    try {
        const response = await fetch('http://localhost:5000/api/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl })
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
            resultDiv.innerHTML = `<p>Shortened URL: <a href="${data.originalUrl}" target="_blank">${data.shortCode}</a></p>`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Something went wrong: ${error.message}</p>`;
    }
});