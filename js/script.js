// * работа с меню 

const menuBurger = document.querySelector(".menu_burger_icon");

menuBurger.onclick  = function(){
    menuBurger.classList.toggle("active");
    document.querySelector(".menu_mobile").classList.toggle("menu_mobile_open");
};

// * работа с поиском 

const btnSearch = document.querySelector(".btn_search");
const inputSearch = document.querySelector(".input_search");
const btnDelete = document.querySelector(".icon_delete");

btnSearch.onclick  = function(){
    inputSearch.classList.toggle("open");
    if(inputSearch.value.trim() === "" ){
        btnDelete.classList.toggle("open")
    }
}

btnDelete.onclick  = function(){
    inputSearch.value = ""
}