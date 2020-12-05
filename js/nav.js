
function appendNav(){
    document.querySelector("#app").innerHTML += /*html*/`
    <div class="nav-container">
        <nav class="navigation">
            <ul>
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#map" class="nav-link">Museum Map</a></li>
                <li><a href="#exhibitions" class="nav-link">Exhibitions</a></li>
                <li><a href="#tickets" class="nav-link">Ticket store</a></li>
                <li><a href="#profile" class="nav-link">Profile</a></li>
            </ul>
            <p class="hours" onclick="openHours()">Opening hours and contact</p>
            
            <div class="log-out-container">
                <span class="arrow-icon"><i class="fas fa-arrow-left"></i></span>
                <p class="log-out">Log out</p>
            </div>
        </nav>
    </div>
    `;
}
