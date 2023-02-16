
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

var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}
