const preloader = document.querySelector(".preloader");
const body = document.getElementById('body')


function loader() {
    preloader.style.display = "none";
    body.style.overflow = "visible";
    
}

setTimeout(loader,3000);
