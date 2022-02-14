const categorias = document.getElementById("categorias");

let btnnav = document.querySelector("#btn-nav");
let nav = document.querySelector("nav");
let absolute = document.querySelector("#btn-absolute");

absolute.addEventListener("click",function(){
    if (categorias.style.maxHeight == "11em") {
        categorias.style.animation = "absoluteAnimationReverse 0.5s forwards";
        categorias.style.maxHeight = "3em";
    }else{
        categorias.style.animation = "absoluteAnimation 0.6s forwards";
        categorias.style.maxHeight ="11em";
        }
    
})

btnnav.addEventListener("click",function () {
    if ( nav.style.height=="13em") {
       nav.style.animation = "navAnimationreverse 1s forwards";
      
       this.style.animation = "btnNavAnimation 1s reverse forwards"
       
       nav.style.height = "0"
      
    }else{
        
        nav.style.display="flex";
        nav.style.animation = "navAnimation 0.5s forwards"
        this.style.animation = "btnNavAnimation 1s forwards"
        nav.style.height = "13em"
    }
   
})