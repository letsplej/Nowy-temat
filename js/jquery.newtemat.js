jQuery(document).ready(function($) {
	$('.tborder input[name=subject]').keyup(function(event) {
		var textBox = event.target;
		var start = textBox.selectionStart;
		var end = textBox.selectionEnd;
		textBox.value = textBox.value.charAt(0).toUpperCase() + textBox.value.slice(1);
		textBox.setSelectionRange(start, end);
	});
	$('.tborder input[name=subject]').focusout(function() {
		// Wywal wiecej niz 1 ! ?, usun spacje przed znakami:
		var regex = /\s+([?.,!:])/g;
		var titleText = $('input[name=subject]').val().replace(regex, '$1').replace(/\?+/g,'?').replace(/\!+/g,'!'); 
		// Przepisz tytul:
		$('input[name=subject]').val(titleText);
	});
});
