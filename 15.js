let field = document.getElementById('gamefield');

for (var i = 1; i <= 15; i++) {
	
	field.appendChild(createButton(String(i)));
};

field.appendChild(createButton('clear'));
shake();

function checkMovementAllow(id) {
	let clearNumber = checkCellNumber('clear');
	let buttonNumber = checkCellNumber(id);

	if (clearNumber - buttonNumber == 4 || clearNumber - buttonNumber == 1 || buttonNumber - clearNumber == 4 || buttonNumber - clearNumber == 1) {
		return true;
	};
	return false;
};

function checkCellNumber(id) {
	let fieldNode = document.body.firstChild.nextSibling;
	for (var i = 1; i <= 16; i++) {
		if (fieldNode.childNodes[i].textContent == id){
			return i;
		};
	};
};

function createButton(text) {
	let b = document.createElement('button');
	b.textContent = text;
	b.id = text;
	b.classList.add('playButton');
	b.addEventListener('click', function(){
		if(!checkMovementAllow(b.textContent)){
			return;
		};
		clearButton = document.getElementById('clear');

		clearButton.innerHTML = b.innerHTML;
		clearButton.id = b.id;
		b.innerHTML = 'clear';
		b.id = 'clear';
		checkGame();
	});
	return b;
};

function checkGame(){

	let fieldNode = document.body.firstChild.nextSibling;
	let first = true;

	for (var i = 1; i <= 15; i++) {
		if (first) {
			if(fieldNode.childNodes[i].textContent != '1'){
				return;
			};
			first = false;

		};
		
		if (i != Number(fieldNode.childNodes[i].textContent)) {
			return;
		};

		
	};
	alert('You are winner!');
};

function shake() {
	let fieldNode = document.body.firstChild.nextSibling;
	let first = true;
	let random = 0;
	for (var i = 1; i <= 15; i++) {
		random = Math.round(Math.random() * 15);
		
		if (random == 0) {
			secondButton = document.getElementById('clear');
		} else {
			secondButton = document.getElementById(String(random));
		};	
		secondText = secondButton.textContent;
		secondId = secondButton.id;
		secondButton.textContent = fieldNode.childNodes[i].textContent;
		secondButton.id = fieldNode.childNodes[i].id;

		fieldNode.childNodes[i].textContent = secondText;
		fieldNode.childNodes[i].id = secondId;
	};
};