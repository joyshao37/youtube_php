//Its means when the document on the web page is ready, it's loaded all of its dependencies.
$(document).ready(function(){
	$(".navShowHide").on("click",function(){

		var main = $("#mainSectionContainer");
		var nav = $("#sideNavContainer");

		if(main.hasClass('leftPadding')){
			nav.hide();
		}else{
			nav.show();
		}

		main.toggleClass("leftPadding");

	});

});