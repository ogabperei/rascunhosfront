var btnLight = document.querySelector(".btn-light");
var btnDark = document.querySelector(".btn-dark");
var body = document.querySelector("body");
var section = document.querySelector("section");
var navLinks = document.querySelector("navbar a");

btnDark.addEventListener("click", function(){
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btnDark.style.display = "none";
    btnLight.style.display = "block";

    navLinks.forEach(function(link){
        link.style.setProperty("color", "white", "important");
});

    section.forEach(function(sec){
        sec.style.backgroundColor = "rgb(241, 166, 213, 0.4)"
    });
})

btnLight.addEventListener("click", function(){
    body.style.backgroundColor = "white";
    body.style.color = "black";
    btnDark.style.display = "block";
    btnLight.style.display = "none";

    navLinks.forEach(function(link){
        link.style.setProperty("color", "black", "important");
    });

    section.forEach(function(sec){
        sec.style.backgroundColor = "rgb(281, 166, 213, 0.4)"
    });
})