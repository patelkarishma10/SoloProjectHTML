function getAccountDetails() {
    let ID = sessionStorage.getItem('ID');
    makeRequest("GET", path + `user/getAUser/${ID}`)
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
    makeRequest("DELETE", path + `user/deleteUser/${ID}`)
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
    makeRequest("PUT", path + `user/updateUser/${id}`, updateAcc)
        .then((data) => {
            console.log(data);
        }).catch((error) => console.log(error.message));

    return false;
}
