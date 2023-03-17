function renderContent(doctor) {
  const baseUrl = 'https://mazinfouad.com/Aufgabe%20Doctor%20Database/';
  const specializations = doctor.specialities.join(', '); // Join the specialities array

  return /*html*/ `
    <div class="card p-3 mb-5">
       <div class="row">
         <div class="col-md-6 left-section">
           <div class="media-container d-flex align-items-center mb-3">
             <div>
             <img class="img" src="${baseUrl}${doctor.img}"  alt="" />
             </div>
             <div class="media-text ps-3">
               <p class="mb-1">${doctor.title} ${doctor.first_name} ${doctor.last_name}</p>
               <span id="specialization">${specializations}</span>
             </div>
           </div>
           <span>${doctor.street} <br>
           ${doctor.zipcode} ${doctor.city}</span>
         </div>
         <div class="col-md-6">Column</div>
       </div>
     </div>`;
}
