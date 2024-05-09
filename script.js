let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () => {

    navbar.classList.remove('active');
}