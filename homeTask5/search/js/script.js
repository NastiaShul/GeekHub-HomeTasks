"use strict";

const input = document.querySelector("input"),
	list = document.querySelector(".list");

list.style.display = "none";


input.addEventListener("input", showList);
input.addEventListener("input", hideList);
input.addEventListener("input", showList, false);

function showList() {
	setTimeout(() => {
		if (input.value.length !== 0) {
			list.style.display = "";
		}
	}, 1000)
}

function hideList() {
	list.style.display = "none";
}