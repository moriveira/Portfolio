window.addEventListener('scroll', function() {
    const scrollY1 = window.scrollY;
    const aboutElement1 = document.querySelector('#about');
    const scrollY2 = window.scrollY;
    const aboutElement2 = document.querySelector('#works');
    const scrollY3 = window.scrollY;
    const aboutElement3 = document.querySelector('#contact');

    
    if (scrollY1 > 600) {
        aboutElement1.style.opacity = '100%';
    } else {
        aboutElement1.style.opacity = '0%';
    }

    if (scrollY2 > 1850) {
        aboutElement2.style.opacity = '100%';
    } else {
        aboutElement2.style.opacity = '0%';
    }

    if (scrollY3 > 2600) {
        aboutElement3.style.opacity = '100%';
    } else {
        aboutElement3.style.opacity = '0%';
    }
});