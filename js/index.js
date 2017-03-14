// non of use
$(function() {
	$("[data-toggle]").click(function() {
		var target = $(".my-text");
		if($(this).prop('checked')) {
			target.html('Vì em là cuộc sống của anh <span class="text-red"><3</span>');
		} else {
			target.html('Cuộc sống của anh thật đẹp, em biết vì sao không?...');
		}
	})
})
