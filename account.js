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
    let ID = sessionStorage.getItem('ID');
    makeRequest("GET", `http://localhost:8080/SoloProject/api/user/getAUser/${ID}`)
        .then((data) => {
            const username = data.username;
            const email = data.email;
            const password = data.password;
            const ID = data.id;
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
            console.log(data);
        })
        .catch((error) => console.log(error.message));
    return false;
}

function deleteAccount() {
    let ID = sessionStorage.getItem('ID');
    makeRequest("DELETE", `http://localhost:8080/SoloProject/api/user/deleteUser/${ID}`)
        .then((data) => {
            console.log(data);
            sessionStorage.clear();
            window.location.href = 'index.html';
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
