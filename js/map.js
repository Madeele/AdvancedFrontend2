
function mapTemplate() {
    document.querySelector("#map").innerHTML += /*html*/ `    
            <header class="topbar">
               <h2>Kunste Museum Map</h2>
            </header>
            <div class="nav-btn">
                    <div></div>
                    <div></div>
            </div>
            <div class="map_container">
                <div class="map_floors">
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">-3</div>
                    </div>
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">-2</div>
                    </div>
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">-1</div>
                    </div>
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">0</div>
                    </div>
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">1</div>
                    </div>
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">2</div>
                    </div>
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">3</div>
                    </div>
                    <div class="circles_numbers" onclick="closeFloors()">
                    <p>Floor</p>
                        <div class="circle">4</div>
                    </div>
                </div>
            </div> 
    `;
}

mapTemplate();

function closeFloors(){
    let circles = document.querySelectorAll(".circles_numbers");
  for (let circle of circles) {
    circle.classList.toggle("hidden_floors")
  }
}

