//Setting up the event listener to get the party started
$('button').on('click', function(e) {
	e.preventDefault;

	//Creating the input variables so I have something nice to work with later
	var inputName = $('.inputName'), inputEmail = $('.inputEmail'), inputSite = $('.inputSite'), inputMessage = $('.inputMessage');
	//Creating the input error variables so I have something nice to work with later
	var errorName = $('.errorName'), errorEmail = $('.errorEmail'), errorSite = $('.errorSite'), errorMessage = $('.errorMessageSection');
	//Creating variables for the colored bars. Again, something nice for later, and I'm too lazy to change the bar class' format to match the others. Bet you didn't even notice until I said something. Heh heh heh.
	var barName = $('.nameBar'), barEmail = $('.emailBar'), barSite = $('.siteBar'), barMessage = $('.messageBar');
	//Creating a set of variables to determine if the information inputted is valid or not
	var validName = false, validEmail = false, validSite = false, validMessage = false;

	//Setting up the <h3> tag in the success section
	var successStatement = $('<h3></h3>').html('Thanks for contacting us '+inputName.val()+'. We have received your message and will be in touch with you shortly.');

	if(!inputName.val()) {
		errorName.show();
		errorName.html('Name cannot be left empty');
		barName.css('background-color', 'red');
		console.log('Valid Name: '+validName);
	} else {
		errorName.hide();
		barName.css('background-color', 'green');
		validName = true;
		console.log('Valid Name: '+validName);
	}


	if(!inputEmail.val()) {
		errorEmail.show();
		errorEmail.html('Email cannot be left empty');
		barEmail.css('background-color', 'red');
		console.log('Valid Email: '+validEmail);
	} else if (!inputEmail.val().split('').includes('@')) {
		errorEmail.show();
		errorEmail.html("Email must contain an '@'");
		barEmail.css('background-color', 'red');
		console.log('Valid Email: '+validEmail);
	} else {
		errorEmail.hide();
		barEmail.css('background-color', 'green');
		validEmail = true;
		console.log('Valid Email: '+validEmail);
	}


	if(!inputSite.val()) {
		errorSite.show();
		errorSite.html('Website cannot be left empty');
		barSite.css('background-color', 'red');
		console.log('Valid Site: '+validSite);
	} else if (inputSite.val().substr(0, 7) !== 'http://') {
		errorSite.show();
		errorSite.html("Website must start with http://");
		barSite.css('background-color', 'red');
		console.log('Valid Site: '+validSite);
	} else {
		errorSite.hide();
		barSite.css('background-color', 'green');
		validSite = true;
		console.log('Valid Site: '+validSite);
	}


	if(!inputMessage.val()) {
		errorMessage.show();
		errorMessage.html('Message cannot be left empty');
		barMessage.css('background-color', 'red');
		console.log('Valid Message: '+validMessage);
	} else {
		errorMessage.hide();
		barMessage.css('background-color', 'green');
		validMessage = true;
		console.log('Valid Message: '+validMessage);
	}

	if(validName && validEmail && validSite && validMessage) {
		console.log('Everything checked out');
		$('.contactSection').hide();
		$('.successSection').append(successStatement);
	}
}); 