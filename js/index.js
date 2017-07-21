	$("#dj").click(function(){
		$(".xy").stop().slideToggle();
	})
	$("body").mouseup(function(){
		$(".xy").slideUp();
		$(".xy1").slideUp();
	})
	$("#dj3").click(function(){
		$(".xy1").stop().slideToggle();
	})
	$(".xy li").click(function(){
		$(".xy").stop().slideToggle();
	})
	$(".xy li").click(function(){
		var txt =$(this).text();
		console.log(parseInt(txt));
		$('#txt').val(parseInt(txt))
	})
	$(".xy1 li").click(function(){
		$(".xy1").stop().slideToggle();
	})
	$(".xy1 li").click(function(){
		var txt1 =$(this).text();
		console.log(parseInt(txt1));
		$('#txt1').val(parseInt(txt1))
	})
