window.addEventListener("scroll", function(){
    const glbHeader = document.getElementById("global-header");
    if(window.scrollY > 10){
        glbHeader.classList.add("scrolled");
    }else{
        glbHeader.classList.remove("scrolled");
    }
});