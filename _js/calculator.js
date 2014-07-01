function Calculator () {

	var memory = 0;
	var register = 0;
	var display = 0;
	var operation = 'add';
	var lastKeyOperation = true;
	


	//Private methods

	var updateDisplay = function () {

		document.getElementById('calcScreen').value = display;
        };
	


	//Public methods

	this.pressNumberKey = function (digit) {
		if (lastKeyOperation){
			display = digit;
			lastKeyOperation = false;
		}
		else{
			display = display * 10 + digit;
		}
		updateDisplay();
		console.log(display);
	};

	this.pressOperationKey = function (oper) {

		console.log("ok");
		
		if (lastKeyOperation == false){
			register = display;
		}

		if (oper !== 'evaluate' && lastKeyOperation == true) {
			register = 0;
		}

		lastKeyOperation = true;

		switch(operation){
			case 'add':
				memory += register; 
				break;

			case 'subtract':
				memory -= register;
				break;
		
			case 'multiply':
				memory *= register;
				break;

			case 'divide':
				memory /= register;
				break;
			default:
				console.log("Error: undefined operation.");
		}

		if (oper !== 'evaluate'){
			operation = oper;
		}
		else{
			display = memory;
			updateDisplay();
		}

		return memory;
	};

	this.clear = function () {
		memory = 0;
		register = 0;
		display = 0;
		lastKeyOperation = true;
		updateDisplay();
	};

}


//Sample operations
var calculator = new Calculator();

