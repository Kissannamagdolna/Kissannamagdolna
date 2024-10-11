app.js
// randomuser.me API lekérése
function getRandomUser() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        document.getElementById('random-name').innerText = `${user.name.first} ${user.name.last}`;
        document.getElementById('random-email').innerText = user.email;
    })
    .catch(error => {
        console.error('Hiba történt :', error);
    });
    
}
