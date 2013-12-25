Template.coaching.rendered = function(){
	$("[href=#why]").click(function() {
		try{
			document.body.scrollTop = $("#why").offset().top;
		}catch(e){}
	});
	$("[href=#who]").click(function() {
		try{
			document.body.scrollTop = $("#who").offset().top;
		}catch(e){}
	});
	$("[href=#what]").click(function() {
		try{
			document.body.scrollTop = $("#what").offset().top;
		}catch(e){}
	});
	$("[href=#how]").click(function() {
		try{
			document.body.scrollTop = $("#how").offset().top;
		}catch(e){}
	});
};