function getUserFilms() {

    let ID = sessionStorage.getItem('ID');
    const container = document.getElementById('displayDetails');
    makeRequest("GET", `http://localhost:8080/SoloProject/api/user/getAUser/${ID}`)
        .then((data) => {

            const containerDiv = document.getElementById('favFilmsDiv');
            let tableHeading = document.createElement('h1');
            tableHeading.id = "tableHeading";
            tableHeading.innerHTML = "Your favourite films";
            containerDiv.appendChild(tableHeading);
            if (document.contains(document.getElementById("table1"))) {
                containerDiv.removeChild(document.getElementById("table1"));
                containerDiv.removeChild(document.getElementById("tableHeading"));
            }
            let container = document.createElement('table');
            container.id = "table1";
            containerDiv.appendChild(container);
            let tableHeadingTitle = document.createElement('th');
            tableHeadingTitle.innerHTML = "Tilte";
            container.appendChild(tableHeadingTitle);
            let tableHeadingRemoveFilm = document.createElement('th');
            tableHeadingRemoveFilm.innerHTML = "Remove Film";
            container.appendChild(tableHeadingRemoveFilm);

            for (let i = 0; i < data.films.length; i++) {
                let myRow = document.createElement('tr');
                myRow.id = "row" + i;
                container.appendChild(myRow);

                let myTitle = document.createElement('td');
                myTitle.innerHTML = String(data.films[i].title);
                myRow.appendChild(myTitle);

                let myRemoveFilm = document.createElement('td');
                myRow.appendChild(myRemoveFilm);
                let removeFilmbtn = document.createElement('input');
                removeFilmbtn.type = "button";
                removeFilmbtn.className = "btn btn-primary";
                removeFilmbtn.value = "Remove Film";
                removeFilmbtn.onclick = function removeFilm() {

                };
                myRemoveFilm.appendChild(removeFilmbtn);

            }
            console.log(data);
        })
        .catch((error) => console.log(error.message));
    return false;


}

function goToAccountPage() {

    window.location.href = 'account.html';
    return false;
}
