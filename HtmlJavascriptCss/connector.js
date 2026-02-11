function changeColor() {
    const myElement = document.getElementById('classes');
    myElement.style.color = 'red';
    myElement.style.backgroundColor = 'blue';
}
function holi() {
    console.log("Holi de javascript")
}

function connect() {
    const port = 3306
    const user = root
    const password = ""
}


async function getUsers() {
    // get Read Select
    try {
        const response = await fetch('http://127.0.0.1:5000/');
        const data = await response
        console.log(data)
    }
    catch (error) {
        console.error("There was an error handling the request", error);
    }
}


async function createUsers(userData) {
    // post Update Delete
    try {
        const response = await fetch('localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json()
        console.log("My request responded with:", result)
    } catch (error) {

    }
}

async function processForm(e) {
    e.preventDefault();
    const requestBody = {
        name: document.getElementById('name').value,
        type: document.getElementById('type').value
    };
    console.log(requestBody);

    const response = await fetch('http://localhost:5000/process', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(requestBody)
    });
    const result = await response.json();
    console.log(result);
}

document.getElementById('userForm').addEventListener('submit', processForm);
