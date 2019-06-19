function getAUser() {
    let id = Number(document.getElementById("anAcc").value);
    makeRequest("GET", path + `user/getAUser/${id}`)
        .then((data) => {
            const ID = data.id;
            sessionStorage.setItem('ID', ID);
            window.location.href = 'homepage.html';
        })
        .catch((error) => {
            console.log(error.message)
            document.getElementById("systemResponse").innerHTML = "Id not found";
        });
    return false;
}


function createAccount() {
    let newAcc = {
        username: document.getElementById("accUsername").value,
        password: document.getElementById("accPassword").value,
        email: document.getElementById("accEmail").value
    };
    makeRequest("POST", path + "user/createUser", newAcc)
        .then((data) => {
            const ID = data.id;
            sessionStorage.setItem('ID', ID);
            makeRequest("GET", path + `user/getAUser/${ID}`)
                .then((data) => {
                    window.location.href = 'homepage.html';
                })
                .catch((error) => console.log(error.message));
        })
        .catch((error) => console.log(error.message));
    return false;
}
