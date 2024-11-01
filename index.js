window.addEventListener('scroll', function() {
    const scrollY1 = window.scrollY;
    const aboutElement1 = document.querySelector('#about');
    const scrollY2 = window.scrollY;
    const aboutElement2 = document.querySelector('#works');

    
    if (scrollY1 > 350) {
        aboutElement1.style.opacity = '100%';
    } else {
        aboutElement1.style.opacity = '0%';
    }

    if (scrollY2 > 1450) {
        aboutElement2.style.opacity = '100%';
    } else {
        aboutElement2.style.opacity = '0%';
    }
});