const _exhibitionRef = _db.collection("exhibitions");

_exhibitionRef.onSnapshot(function (snapshotData) {
     let exhibitions = [];
     snapshotData.forEach(function (doc) {
          let exhibition = doc.data();
          exhibition.id = doc.id;
          exhibitions.push(exhibition);
     });
     appendExhibitions(exhibitions);
});
     
function appendExhibitions(exhibitions) {
     let template = "";
     for (let exhibition of exhibitions) {
          template += /*html*/ `
          <article class="exhibition-item">
               <div class="image-container">
                    <img src="${exhibition.image}" alt="exhibition" class="exhibition-image">
               </div>
               <div class="dark-overlay"></div>
               <div class="exhibition-details-container">
                    <h1 class="exhibition-name">${exhibition.name}</h1>
                    <div class="date-arrow-container">
                    <p class="exhibition-date">Exhibition end: ${exhibition.date}</p>
                    <img src="/media/arrow.svg" alt="arrow" id="arrow">
                    </div>
               </div>
          </article>
          `;
     }
     document.querySelector("#exhibitions").innerHTML = template;
}
