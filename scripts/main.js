//Setting up the event listener to get the party started
$('form').submit(function(e) {
	e.preventDefault;

	//Creating the input variables so I have something nice to work with later
	var inputName = $('.inputName'), inputEmail = $('.inputEmail'), inputSite = $('.inputSite'), inputMessage = $('.inputMessage');
	//Creating the input error variables so I have something nice to work with later
	var errorName = $('.errorName'), errorEmail = $('.errorEmail'), errorSite = $('.errorSite'), errorMessage = $('.errorMessage');
	//Creating variables for the colored bars. Again, something nice for later, and I'm too lazy to change the bar class' format to match the others. Bet you didn't even notice until I said something. Heh heh heh.
	var barName = $('.nameBar'), barEmail = $('.emailBar'), barSite = $('.siteBar'), barMessage = $('.messageBar');
	
	
}); 