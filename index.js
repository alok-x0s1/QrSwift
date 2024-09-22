const inputValue = document.querySelector("#inputValue");
const divImage = document.querySelector("#divImage");
const imgSrc = document.querySelector("#imgSrc");
const form = document.getElementById("form");

const qrCodeGenerator = (e) => {
	e.preventDefault();
	inputValue.classList.remove("error");
	divImage.classList.remove("show-img");
	if (inputValue.value.length > 0) {
		imgSrc.src =
			"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
			inputValue.value;
		divImage.classList.add("show-img");
		document.querySelector(".links").style.visibility = "visible";
	} else {
		inputValue.classList.add("error");
		setTimeout(() => {
			inputValue.classList.remove("error");
		}, 1000);
	}
};

form.addEventListener("submit", qrCodeGenerator);
