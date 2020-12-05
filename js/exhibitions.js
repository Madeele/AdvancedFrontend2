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

function template() {
     document.querySelector('#app').innerHTML += /*html*/ `
          <section id="exhibitions" class="page">
          <div id="exhibitions-list" class="list-container"></div>
          </section>
     `;
}

function appendExhibitions(exhibitions) {
     let template = "";
     for (let exhibition of exhibitions) {
          template += /*html*/ `
          <article class="exhibition-item">
               <h1 class="exhibition-name">${exhibition.name}</h1>
               <p class="exhibition-date">${exhibition.date}</p>

          </article>
          `;
     }
     document.querySelector("#exhibitions-list").innerHTML = template;
}

