//Click line to check off item handler
$("ul").on("click", "li", function(){
	$(this).toggleClass("finished");
});

//Click x to remove item handler
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
})

//Add item
$("input[type='text'").keypress(function(e){
	if(e.which === 13){
		var input = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ input +"</li>");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text'").fadeToggle();
})