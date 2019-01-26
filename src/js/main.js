window.onload = function() {
		var selectedClass = "";
		document.getElementsByClassName(".fil-cat").click(function(){
		selectedClass = this.getAttribute("data-rel");
     document.getElementById("#portfolio").fadeTo(100, 0.1);
		document.querySelectorAll("#portfolio div").not("."+selectedClass).fadeOut().classList.remove('scale-anm');
    setTimeout(function() {
      document.querySelectorAll("."+selectedClass).fadeIn().classList.add('scale-anm');
      document.getElementById("#portfolio").fadeTo(300, 1);
    }, 300);

	});
};
