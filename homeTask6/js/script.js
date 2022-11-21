"use strict";

document.addEventListener("DOMContentLoaded", () => {
	
	async function getResource(url) {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getResource("https://api.github.com/users/nastyashul")
		.then(data => createProfile(data));

	function createProfile(data) {
		console.log(data);
		const profileContainer = document.querySelector(".my-profile__container");
		profileContainer.innerHTML = `
		<h3 class="my-profile__name">${data.name}</h3>
		<h4 class="my-profile__nickname">${data.login}</h4>
		<h5 class="my-profile__role">${data.bio}</h5>
		<div class="my-profile__contacts contacts">
			<div class="contacts__email">
				<img src="./img/email.svg" alt="email">
				<a href="maito:shulhaevich@gmail.com">shulhaevich@gmail.com</a>
			</div>
			<div class="contacts__social">
				<img src="./img/link.svg" alt="link">
				<a href="https://www.l${data.blog}"
					target="_blank">${data.blog}</a>
			</div >
		</div >
		`;
	}


	const reposBtn = document.getElementById("load"),
		reposTittle = document.querySelector(".repos__tittle"),
		reposRow = document.querySelector(".repos__row"),
		loadStatus = document.createElement("img"),
		loading = "img/spinner.svg";

	getResource("https://api.github.com/users/nastyashul/repos")
		.then(data => {
			reposBtn.addEventListener("click", () => {

				loadStatus.src = loading;
				reposRow.insertAdjacentElement("beforeBegin", loadStatus);

				return loadRepos(data);
			});
		})


	function loadRepos(data) {

		const dataForRepo = data.map(item => {
			const repoBlock = `
			<div class="repos__item repo">
				<h3 class="repo__name">${item.name}</h3>
				<p>
					<span class="repo__update">Last updated:</span>
					<span class="repo__date">${new Date(item.updated_at).toLocaleDateString('en-EN', { day: 'numeric', month: 'long', year: 'numeric' }).replace(" y.", "")}</span>
				</p>
			</div>
				`;
			return repoBlock;
		})
		reposRow.insertAdjacentHTML('afterbegin', dataForRepo.join(' '));

		reposBtn.classList.add("hide");
		reposTittle.classList.remove("hide");
		loadStatus.classList.add("hide");
	}
});

