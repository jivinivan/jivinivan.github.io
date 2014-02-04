
$(document).ready(function(){
	if($("html").hasClass('csstransitions')){
		$(".bio").addClass('animated fade-down-in');
	}else{
		$(".bio").addClass('hidden');
		$(".bio").fadeIn();
	}

	var img = new Image();
	img.style.display='none';
	img.src = 'assets/img/is.jpg';
	img.onload = function() {
		if($("html").hasClass('csstransitions')){
			$(".photo").addClass('animated fade-in');
		}else{
			$(".photo").addClass('hidden');
			$(".photo").fadeIn();
		}
	};
});
