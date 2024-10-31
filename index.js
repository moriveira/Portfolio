window.addEventListener('scroll', function() {
    const scrollY1 = window.scrollY;
    const aboutElement1 = document.querySelector('#about');

    
    if (scrollY1 > 1100) {
        aboutElement1.style.opacity = '100%';
    } else {
        aboutElement1.style.opacity = '0%';
    }
});
