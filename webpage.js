window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = '#333';
        navbar.style.color = '#fff';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.color = '#333';
    }
};
