window.addEventListener('load', function(){
	var img = new Image();
	img.style.display='none';
	img.src = 'assets/img/ivan-sugerman.jpg';
	img.onload = function() {
		var photo = document.getElementsByClassName('photo');
		photo[0].setAttribute('class', 'photo animated fade-in');
	};
});