
async function generate() {
    let phrase = document.getElementById("success");
    phrase.style.display = "block";
    let element = document.getElementById("users")
    element.innerHTML = ""
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const fetchedData = await response.json();
        createUser(fetchedData)
    } catch (error) {
        alert('Something went wrong...\n' + error);
    }
}

function createUser({results}) {
    let element = document.querySelector('#users')
    element.innerHTML += `${getUser(results)}`
}

function getUser(results) {
    return results.map(user => `
        <div id="block">
        <img src="${user.picture.large}" width="200px" height="200px">
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>City: ${user.location.city}</p>
        <p>Phone: ${user.phone}</p>
        </div>`)
}
