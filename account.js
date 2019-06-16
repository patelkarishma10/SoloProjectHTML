function makeRequest(method, url, body) {
    return new Promise(
        function (resolve, reject) {
            let req = new XMLHttpRequest();

            req.onload = function () {
                const data = JSON.parse(req.responseText);
                if (req.status >= 200 && req.status < 300) {
                    resolve(data);
                } else {
                    const reason = new Error('Rejected');
                    reject(reason);
                }
            };

            req.open(method, url);
            req.send(JSON.stringify(body));
        }
    );
}

function getAccountDetails() {
    let username = sessionStorage.getItem('username');
    let email = sessionStorage.getItem('email');
    let ID = sessionStorage.getItem('ID');
    let password = sessionStorage.getItem('password');

    let myUsername = document.createElement('span');
    myUsername.innerHTML = username;

    let myEmail = document.createElement('span');
    myEmail.innerHTML = email;

    let myID = document.createElement('span');
    myID.innerHTML = ID;

    const container = document.getElementById('displayDetails');
    container.appendChild(myUsername);
    container.appendChild(myEmail);
    container.appendChild(myID);

    document.getElementById("updateId").value = ID;
    document.getElementById("updateEmail").value = email;
    document.getElementById("updateUsername").value = username;
    document.getElementById("updatePassword").value = password;
}

function deleteAccount() {
    let id = Number(document.getElementById("deleteAcc").value);
    makeRequest("DELETE", `http://localhost:8080/SoloProject/api/user/deleteUser/${id}`)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error.message));
    return false;
}

function updateAccount() {
    let id = Number(document.getElementById("updateId").value);
    let updateAcc = {
        username: document.getElementById("updateUsername").value,
        password: document.getElementById("updatePassword").value,
        email: document.getElementById("updateEmail").value
    };
    makeRequest("PUT", `http://localhost:8080/SoloProject/api/user/updateUser/${id}`, updateAcc)
        .then((data) => {
            console.log(data);
        }).catch((error) => console.log(error.message));

    return false;
}
