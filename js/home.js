

    function templateTwo(){
        document.querySelector("#app").innerHTML += /*html*/`
            <section id="home" class="page home-page">
                <header class="topbar">
                    <h1>KuNSTE</h1>
                    <h2>Art museum</h2>
                </header>
                <div class="nav-btn">
                    <div></div>
                    <div></div>
                </div>
                <h3>SPA Template Modules Pages</h3>
                <p>My Single Page Web App Template</p>
            </section>
        `;
        let navBtn = document.querySelector(".nav-btn");
        navBtn.onclick = function(){
            console.log("Opened nav");
            document.querySelector(".nav-container").setAttribute("style", "right: 0px;");
        }
    }    
