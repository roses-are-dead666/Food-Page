let menu = document.querySelector('#menuBar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector("#menuSearch").onclick = () => {
    document.querySelector("#searchForm").classList.toggle('active')
}

document.querySelector("#close").onclick = () => {
    document.querySelector("#searchForm").classList.remove('active')
}