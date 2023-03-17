function getData() {
  fetch('https://mazinfouad.com/Aufgabe%20Doctor%20Database/get_doctors.php')
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((error) => console.error(error));
}

function renderData(doctors) {
  let content = document.getElementById('content');
  content.innerHTML = '';

  for (let i = 0; i < doctors.length; i++) {
    const doctor = doctors[i];

    content.innerHTML += /*html*/ renderContent(doctor);

    console.log(doctor);
  }
}
