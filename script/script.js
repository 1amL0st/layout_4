function UpdateNavbar()
{
    let navbar = document.getElementById('navbar');
    let duration = 500;
    let opacity = Number(getComputedStyle(navbar).opacity);
    if (document.documentElement.scrollTop > 50 && opacity == 0) {
        navbar.style.opacity = '1';
        navbar.classList.add('fade-in');
        setTimeout(() => {
            navbar.classList.remove('fade-in');
        }, duration);
    } else if (document.documentElement.scrollTop == 0 && opacity == 1) {
        navbar.style.opacity = '0';
        navbar.classList.add('fade-away');
        setTimeout(() => {
            navbar.classList.remove('fade-away');
        }, duration);
    }
}

function CreateNavbar()
{
    let nav_btn = document.getElementById('navbar-button');
    let nav = document.getElementById('navbar').getElementsByClassName('nav')[0];
    nav_btn.addEventListener('click', e => {
        if (getComputedStyle(nav).visibility == 'hidden')
            nav.style.visibility = 'visible';
        else
            nav.style.visibility = 'hidden';
    });
}

window.onscroll = function() {
    UpdateNavbar();
}

function OnLoadFunction()
{
    CreateNavbar();
}