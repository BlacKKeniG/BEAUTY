class MainMenuControler {
    run() {
        const hamburger = document.querySelector(".hamburger"),
            menu = document.querySelector(".main-menu"),
            close = document.querySelector(".main-menu__close"),
            overlay = document.querySelector(".main-menu__overlay");

            hamburger.addEventListener("click", ()=>{
                menu.classList.add("mobail-visible");
            });
            
            close.addEventListener("click", ()=>{
                menu.classList.remove('mobail-visible');
            })

            overlay.addEventListener("click", ()=>{
                menu.classList.remove('mobail-visible');
            })
    }
}

new MainMenuControler().run();