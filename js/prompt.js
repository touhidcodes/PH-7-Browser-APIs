const openAlert = () => {
	alert("hi");
};

const openConfirm = () => {
	const result = confirm("hi");

	if (result === false) {
		alert("sure ?");
	} else {
		alert("hi !");
	}
};

const openPrompt = () => {
	const info = prompt("your name");

	if (info === null) {
		alert("null");
	} else {
		console.log(info);
	}
};
