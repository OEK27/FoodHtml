const searchform = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const carthBtn = document.querySelector("#cart-btn");
const menubtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click",function(){
    searchform.classList.toggle("active");
    document.addEventListener("click",function(e){
        if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchform)) {
            searchform.classList.remove("active");
        }
    })
});


carthBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e){
        if (!e.composedPath().includes(carthBtn) && !e.composedPath().includes(cartItem)) {
            cartItem.classList.remove("active");
        }
    })
});

menubtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
    document.addEventListener("click",function(e){
        if (!e.composedPath().includes(menubtn) && !e.composedPath().includes(navbar)) {
            navbar.classList.remove("active");
        }
    })
});


