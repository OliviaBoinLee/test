var header = document.querySelector('header');
var gallery = document.querySelector('#gallery');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    header.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    gallery.style.transform = 'translateX(' + (-100 + scrollPosition * 0.5) + 'px)';
});

new fullpage('#fullpage', {
	anchors: ['header', 'map', 'gallery', 'buttons'],
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
	menu: '#menu',
	scrollBar: true,
	autoScrolling: true,
    fitToSection: true,
    afterLoad: function(origin, destination, direction){
        var loadedSection = destination.item;
        var sectionId = loadedSection.getAttribute('id');

        if (sectionId === 'buttons') {
            var buttons = document.querySelectorAll('#buttons button');
            buttons.forEach(function(button) {
                button.addEventListener('click', function() {
                    alert('Button ' + button.getAttribute('id') + ' clicked');
                });
            });
        }
    }
});
