//Firebase

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
     let template = /*html*/ `<section id="exhibitions">`;
     for (let exhibition of exhibitions) {
          template += /*html*/ `
          <article class="exhibition-item">
               <h1 class="exhibition-name">${exhibition.name}</h1>
               <p class="exhibition-date">${exhibition.date}</p>

          </article>
          `;
     }
     document.querySelector("#app").innerHTML = template + "</section>";
}

