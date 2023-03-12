const addItem = () => {
	const productNameId = document.getElementById("input-product");
	const productQuantityId = document.getElementById("input-quantity");
	const name = productNameId.value;
	const quantity = productQuantityId.value;
	productNameId.value = "";
	productQuantityId.value = "";
	console.log(name, quantity);
	displayItem(name, quantity);
};

const displayItem = (name, quantity) => {
	const itemContainer = document.getElementById("item-container");
	const item = document.createElement("li");
	item.innerHTML += `
    ${name} : ${quantity}
    `;
	itemContainer.appendChild(item);
};
