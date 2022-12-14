function game() {
	let feedRate = playRate = walkRate = batheRate = sleepRate = 100;

	const hero = document.querySelector(".js-hero"),
		input = document.querySelector("input"),
		heroName = document.querySelector(".js-hero-name"),
		modalStart = document.querySelector(".js-modal-start"),
		modalClose = document.querySelector(".js-modal-over"),
		btnYes = document.querySelector(".js-btn-go"),
		wrapper = document.querySelector(".js-wrapper"),
		rate = document.querySelector(".js-rate"),
		currantWidth = rate.offsetWidth;

	wrapper.style.opacity = "0.1";
	hero.style.backgroundColor = "#ceeb8b";

	const fed = document.getElementById("fed"),
		played = document.getElementById("played"),
		walked = document.getElementById("walked"),
		bathed = document.getElementById("bathed"),
		slept = document.getElementById("slept");

	const btnFeed = document.getElementById("btn-feed"),
		btnPlay = document.getElementById("btn-play"),
		btnWalk = document.getElementById("btn-walk"),
		btnBathe = document.getElementById("btn-bathe"),
		btnSleep = document.getElementById("btn-sleep");


	const controlGame = () => {
		let total = feedRate + playRate + walkRate + batheRate + sleepRate;
		if (feedRate === 0 || playRate === 0 || walkRate === 0 || batheRate === 0 || sleepRate === 0) {
			hero.style.backgroundColor = "#8a8888";
			wrapper.style.opacity = "0.1";
			modalClose.classList.remove("hide");
			return !decreaseLoop();
		} else if (total > 450) {
			hero.style.backgroundColor = "#ceeb8b";
		} else if (total > 300) {
			hero.style.backgroundColor = "#f8ce8e";
		} else if (total > 100) {
			hero.style.backgroundColor = "#ff9d9d";
		}
	};

	const showCurrentLoop = (value, rate) => {
		value.style.width = rate * currantWidth / 100 + 'px';
		value.innerHTML = rate + '%';
	};

	const decreaseLoop = (time) => {
		feedRate -= time;
		playRate -= time;
		walkRate -= time;
		batheRate -= time;
		sleepRate -= time;
		showCurrentLoop(fed, feedRate);
		showCurrentLoop(played, playRate);
		showCurrentLoop(walked, walkRate);
		showCurrentLoop(bathed, batheRate);
		showCurrentLoop(slept, sleepRate);
		controlGame();
	};

	const start = () => {
		modalStart.classList.add("hide");
		wrapper.style.opacity = "1";
		heroName.append(input.value);
		setInterval(() => {
			decreaseLoop(2);
		}, 3000);
	};


	btnYes.addEventListener("click", () => {
		start();
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Enter" && !modalStart.classList.contains("hide")) {
			start();
		}
	});

	btnFeed.addEventListener("click", () => {
		feedRate = 100;
		walkRate -= 2;
		batheRate -= 2;
		showCurrentLoop(fed, feedRate);
		showCurrentLoop(walked, walkRate);
		showCurrentLoop(bathed, batheRate);
		controlGame();
	});

	btnPlay.addEventListener("click", () => {
		playRate = 100;
		batheRate -= 2;
		feedRate -= 4;
		sleepRate -= 2;
		showCurrentLoop(played, playRate);
		showCurrentLoop(bathed, batheRate);
		showCurrentLoop(fed, feedRate);
		showCurrentLoop(slept, sleepRate);
		controlGame();
	});

	btnWalk.addEventListener("click", () => {
		walkRate = 100;
		batheRate -= 4;
		feedRate -= 2;
		sleepRate -= 2;
		showCurrentLoop(walked, walkRate);
		showCurrentLoop(bathed, batheRate);
		showCurrentLoop(fed, feedRate);
		showCurrentLoop(slept, sleepRate);
		controlGame();
	});

	btnBathe.addEventListener("click", () => {
		batheRate = 100;
		showCurrentLoop(bathed, batheRate);
		controlGame();
	});

	btnSleep.addEventListener("click", () => {
		sleepRate = 100;
		feedRate -= 2;
		playRate -= 2;
		showCurrentLoop(slept, sleepRate);
		showCurrentLoop(fed, feedRate);
		showCurrentLoop(played, playRate);
		controlGame();
	});
}

game();

