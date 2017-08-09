function addItem() {
	const comments = document.getElementById('comments').value;
	const amount = document.getElementById('amount').value;
	let dollar = "$";
	// if user input is empty, don't add anything to to-do list
	if (comments != '') {
	const list = document.getElementById('item-list');
	const text = document.createElement('li');
	text.className = 'list-group-item col-md-12';

	text.innerHTML = comments + " " + dollar + amount;
	list.appendChild(text);
	}
	// clears out input form after content has been added
	document.getElementById('comments').value = '';
	
	console.log(comments + " " + dollar + amount);
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
const addList = document.getElementById('comments');
addList.addEventListener('keypress', function(e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		addItem();
	}
});