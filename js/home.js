function appendHomePage(){
    document.querySelector("#home").innerHTML += /*html*/`
    <div class="home-content">
        <header class="applogo">
            <h1>KuNSTE</h1>
            <h2>Art museum</h2>
        </header>
        <div class="nav-btn" onclick="openCloseNav()">
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="current-exhibitions">
            <h3>Current exhibition</h3>
            <div class="current-exhibitions-stuff">
                <img src="./media/human-nature.jpg">
                <img src="./media/human-nature.jpg">
                <img src="./media/human-nature.jpg">
                <img src="./media/human-nature.jpg">
            </div>
            <a href="#exhibitions" class="more">See more</a>
        </div>    
        
    `;
}   

appendHomePage();

function openCloseNav(){
    appendNav();
    let navContainer = document.querySelector(".nav-container");
    navContainer.style.right = "0px";
    if(navContainer.style.right = "-3000px"){
        navContainer.style.right = "0px";
        console.log("Open nav");
    }   else if (navContainer.style.right = "0px"){
        navContainer.style.right = "-3000px";
        console.log("Close nav");
    }
    
    

}

//document.querySelector(".nav-btn").addEventListener("click", openCloseNav);
