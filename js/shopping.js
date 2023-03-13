const addItem = () => {
	const productNameId = document.getElementById("input-product");
	const productQuantityId = document.getElementById("input-quantity");
	const name = productNameId.value;
	const quantity = productQuantityId.value;
	productNameId.value = "";
	productQuantityId.value = "";
	console.log(name, quantity);
	displayItem(name, quantity);
	saveToLocalStorage(name, quantity);
};

const displayItem = (name, quantity) => {
	const itemContainer = document.getElementById("item-container");
	const item = document.createElement("li");
	item.innerHTML += `
    ${name} : ${quantity}
    `;
	itemContainer.appendChild(item);
};

const getSavedLocalStorageData = () => {
	let cart = {};
	const getCart = localStorage.getItem("cart");
	if (getCart) {
		cart = JSON.parse(getCart);
	}
	return cart;
};

const saveToLocalStorage = (name, quantity) => {
	const cart = getSavedLocalStorageData();
	cart[name] = quantity;
	const stringifiedCart = JSON.stringify(cart);
	localStorage.setItem("cart", stringifiedCart);
};

const displayLocalStorage = () => {
	const savedItem = getSavedLocalStorageData();
	for (const product in savedItem) {
		const quantity = savedItem[product];
		// console.log(product, quantity);
		displayItem(product, quantity);
	}
};

displayLocalStorage();
