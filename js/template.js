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
         <div class="col-md-6 right-section d-flex flex-sm-column flex-md-column flex-lg-row  justify-content-between flex-wrap align-items-center">
            <span>Monday: ${doctor.opening_hours.monday} Uhr</span>
            <span>Tuesday: ${doctor.opening_hours.tuesday} Uhr</span>
            <span>Wednesday: ${doctor.opening_hours.wednesday} Uhr</span>
            <span>Thursday: ${doctor.opening_hours.thursday} Uhr</span>
            <span>Friday ${doctor.opening_hours.friday} Uhr</span>
            <span>Saturday: ${doctor.opening_hours.saturday} </span> 
            <span>Sunday: ${doctor.opening_hours.sunday}</span>
         </div>
       </div>
     </div>`;
}
