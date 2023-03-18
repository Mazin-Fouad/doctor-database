let doctorsList;

/**
Fetches doctor data from an external API and renders the data on the webpage.
@function
@name getData
@returns {void}
// Call the function to fetch and render doctor data
getData();
*/
function getData() {
  fetch('https://mazinfouad.com/Aufgabe%20Doctor%20Database/get_doctors.php')
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((error) => console.error(error));
}

/**
 *
 * @param {Array<Object>} doctors - An array of doctor objects containing their information.
 * @returns {void}
 * // Render an array of doctor data on the webpage renderData
 */
function renderData(doctors) {
  doctorsList = doctors;
  let content = document.getElementById('content');
  content.innerHTML = '';

  for (let i = 0; i < doctors.length; i++) {
    const doctor = doctors[i];
    console.log(doctor);
    content.innerHTML += /*html*/ renderContent(doctor, doctors, i);
  }
}

function getDoctorInfo(i) {
  showModal();
  const baseUrl = 'https://mazinfouad.com/Aufgabe%20Doctor%20Database/';
  let doctor = doctorsList[i];
  console.log(doctor);
  document.getElementById('img').src = baseUrl + doctor.img;
  document.getElementById('name').innerHTML = doctor.title + ` ` + doctor.first_name + ` ` + doctor.last_name;
  document.getElementById('specialities').innerHTML = doctor.specialities.join(', ');
  document.getElementById('address').innerHTML = `${doctor.street}  ${doctor.city}`;
}

function showModal() {
  let myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
}
