//JavaScript Document
//Thank you treecon from StackOverflow
// https://stackoverflow.com/questions/44572859/a-function-that-runs-on-the-second-click
var timesClicked = 0;
$(document).ready(function(){
	$(".supporting").fadeOut(0);
	$(".extra1").click(function() {
		timesClicked++;
		if (timesClicked%2==0) {
			$(".supporting").fadeOut(1000,function(){
				$("header, .preamble").fadeIn(1000);
			});
		} 
		else {
			$("header, .preamble").fadeOut(1000,function(){
				$(".supporting").fadeIn(1000);
			});
		}
	})
})
