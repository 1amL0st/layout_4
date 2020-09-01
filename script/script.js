function UpdateNavbar()
{
    let navbar = document.getElementById('navbar');
    let duration = 500;
    let opacity = getComputedStyle(navbar).opacity;
    opacity = Number(opacity);
    console.log(opacity);
    if (document.documentElement.scrollTop > 50 && opacity == 0) {
        navbar.style.opacity = '1';
        navbar.classList.add('fade-in');
        setTimeout(() => {
            navbar.classList.remove('fade-in');
        }, duration);
    } else if (document.documentElement.scrollTop == 0) {
        navbar.style.opacity = '0';
        navbar.classList.add('fade-away');
        setTimeout(() => {
            navbar.classList.remove('fade-away');
        }, duration);
    }
}

window.onscroll = function() {
    UpdateNavbar();
}

function OnLoadFunction()
{
}