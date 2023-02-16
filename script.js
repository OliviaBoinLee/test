var header = document.querySelector('header');
var gallery = document.querySelector('#gallery');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    header.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    gallery.style.transform = 'translateX(' + (-100 + scrollPosition * 0.5) + 'px)';
});
