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
}

//function goToAccountPage() {
//
//
//}
