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

function getAUser() {
    let id = Number(document.getElementById("anAcc").value);
    makeRequest("GET", `http://localhost:8080/SoloProject/api/user/getAUser/${id}`)
        .then((data) => {
            const username = data.username;
            const email = data.email;
            document.getElementById("accountUsername").innerHTML = username;
            document.getElementById("accountEmail").innerHTML = email;
            console.log(data);
        })
        .catch((error) => console.log(error.message));
    return false;
}


function createAccount() {
    let newAcc = {
        username: document.getElementById("accUsername").value,
        password: document.getElementById("accPassword").value,
        email: document.getElementById("accEmail").value
    };
    makeRequest("POST", "http://localhost:8080/SoloProject/api/user/createUser", newAcc)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error.message));

    return false;
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