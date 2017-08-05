function addItem() {
	const input = document.getElementById('input').value;
	// if user input is empty, don't add anything to to-do list
	if (input != '') {
	const body = document.getElementById('budget');
	const div = document.createElement('div');
	const text = document.createElement('li');
	text.className = 'list-group-item col-md-12';

	text.innerHTML = input;
	body.appendChild(div);
	div.appendChild(text);
	}
	// clears out input form after content has been added
	document.getElementById('input').value = '';
	
	console.log(input);
}

// adds functionality to Add button
document.getElementById('add').onclick = function() {
	addItem(); // calls addItem function
};

// create delete button next to new to-do item
function deleteItem(item) {
	const remove = document.getElementById(item);
	const itemList = remove.parentNode;
	itemList.removeChild(remove);
}

// adds input on Enter/Return key
const addList = document.getElementById('input');
addList.addEventListener('keypress', function(e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		addItem();
	}
});