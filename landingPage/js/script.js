"use strict";
// burger

const burger = document.querySelector(".menu__burger");

function burgerMenu(burger, menuBlock, lockClass, activeClass) {
	if (burger) {
		const menuBody = document.querySelector(menuBlock);

		burger.addEventListener("click", () => {
			document.body.classList.toggle(lockClass);
			burger.classList.toggle(activeClass);
			menuBody.classList.toggle(activeClass);
		});
	}
}

burgerMenu(burger, ".menu__body", "lock", "body-active");

// Open footer links

const footerLinks = document.querySelectorAll(".nav__label");

function openBlocks(triger, activeClass) {
	triger.forEach(item => {
		item.addEventListener("click", () => {
			const parent = item.parentNode;

			parent.classList.toggle(activeClass);
		})
	});
}

openBlocks(footerLinks, "menu-footer--active");

