function renderContent(doctor, doctors, i) {
  const baseUrl = 'https://mazinfouad.com/Aufgabe%20Doctor%20Database/';
  const specializations = doctor.specialities.join(', '); // Join the specialities array

  return /*html*/ `
    <div  class="card p-3 mb-5 position-relative cursor-pointer hover" onclick="getDoctorInfo(${i})">
       <div class="row">
         <div class="col-md-6 left-section">
            <span class="bg-success text-light  text-center doctor-id position-absolute">${doctor.id}</span>
           <div class="media-container d-flex align-items-center mb-3">
             <div>
             <img class="img" src="${baseUrl}${doctor.img}"  alt="" />
             </div>
             <div class="media-text ps-3">
               <p class="mb-1 text-break">${doctor.title} ${doctor.first_name} ${doctor.last_name}</p>
               <span id="specialization">${specializations}</span>
             </div>
           </div>
           <span>${doctor.street} <br>
           ${doctor.zipcode} ${doctor.city}</span>
         </div>

         <div class="col-md-6 right-section d-flex flex-sm-column flex-md-column flex-lg-column  justify-content-lg-between flex-wrap align-items-lg-center justify-content-sm-start justify-content-md-start mt-sm-3 mt-md-0">
            <h3>Opening Hours</h3>
            <span>Monday: ${doctor.opening_hours.monday} ${doctor.opening_hours.monday === 'closed' ? '' : ' Uhr '}</span>
            <span>Tuesday: ${doctor.opening_hours.tuesday} ${doctor.opening_hours.tuesday === 'closed' ? '' : ' Uhr '}</span>
            <span>Wednesday: ${doctor.opening_hours.wednesday} ${doctor.opening_hours.wednesday === 'closed' ? '' : ' Uhr '}</span>
            <span>Thursday: ${doctor.opening_hours.thursday} ${doctor.opening_hours.thursday === 'closed' ? '' : ' Uhr '}</span>
            <span>Friday: ${doctor.opening_hours.friday} ${doctor.opening_hours.friday === 'closed' ? '' : ' Uhr '}</span>
            <span>*Saturday: ${doctor.opening_hours.saturday} </span> 
            <span>*Sunday: ${doctor.opening_hours.sunday}</span>
         </div>
       </div>
     </div>`;
}
