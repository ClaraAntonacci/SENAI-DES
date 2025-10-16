const menu = document.querySelector("#menu");

menu.addEventListener("click", function(){
    const nav = document.querySelector("nav");

    const leftNav = nav.style.left;

    if(leftNav === "" || leftNav === "-200px"){
        nav.style.left = "0";
    }else{
        nav.style.left = "-200px";
    }
});
