$(document).ready(function() {

	var menuCounter = 0;

	$("#menu-icon").on("click", function() {

		if (menuCounter == 0) {

			$("#nav-menu").animate({marginLeft: "2%", opacity: "1"}, 600);

			menuCounter++;
		
		} else if (menuCounter == 1) {

			$("#nav-menu").animate({marginLeft: "0%", opacity: "0"}, 600);

			menuCounter--;
		}
	});
});