function addItem() {
	// const category = document.getElementById('').value;
	const comments = document.getElementById('comments').value;
	const amount = document.getElementById('amount').value;
	let dollar = "$";

	// if user input is empty, don't add anything to to-do list
	if (comments != '' && amount != '') {
	const list = document.getElementById('item-list');
	const text = document.createElement('li');
	text.className = 'list-group-item';

	text.innerHTML = comments + " " + dollar + amount;
	list.appendChild(text);
	}
	// clears out input form after content has been added
	document.getElementById('comments').value = '';
	document.getElementById('amount').value = '';

	return totalSum();
	
	console.log(comments + " " + dollar + amount);
}

// adds functionality to Add button
document.getElementById('add').onclick = function() {
	addItem(); // calls addItem function
};

function totalSum() {
	const totalAmount = document.getElementById('total');
	totalAmount.innerHTML = amount;
	return totalAmount;
}

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