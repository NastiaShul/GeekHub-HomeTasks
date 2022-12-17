function game (){

    class Tamagotchi {
        constructor(){
            this.name = '';
            this.feedRate = 100;
            this.playRate = 100;
            this.walkRate = 100;
            this.bathRate = 100;
            this.sleepRate = 100;
            this.isDead = false;
            this.color = "#8a8888";
        }
    
        getFeedRate = () => this.feedRate;
        getPlayRate = () => this.playRate;
        getWalkRate = () => this.walkRate;
        getBathRate = () => this.bathRate;
        getSleepRate = () => this.sleepRate;
        getColor = () => this.color;
        getIsDead = () => this.isDead;
    
        applyColor = () => {
            const total = this.feedRate + this.playRate + this.walkRate + this.bathRate + this.sleepRate;
            if (total > 450) {
                this.color = "#ceeb8b";
            } else if (total > 300) {
                this.color = "#f8ce8e";
            } else if (total < 100) {
                this.color = "#ff9d9d";
            }
        }
    
        getValidatedValue = (value, prevValue) => {
            if (value === 100) {
                return 100;
            }
            const newValue = prevValue + value;
            if (newValue < 0) {
                this.isDead = true;
                return 0;
            }
            return newValue;
        }
    
        setFeedRate = (value) => {
            this.feedRate = this.getValidatedValue(value, this.feedRate);
        }
    
        setPlayRate = (value) => {
            this.playRate = this.getValidatedValue(value, this.playRate);
        }
    
        setWalkRate = (value) => {
            this.walkRate = this.getValidatedValue(value, this.walkRate);
        }
    
        setBathRate = (value) => {
            this.bathRate = this.getValidatedValue(value, this.bathRate);
        }
    
        setSleepRate = (value) => {
            this.sleepRate = this.getValidatedValue(value, this.sleepRate);
        }
    
        setName = (value) => {
            this.name = value;
        }
    
        decreaseLifeValues = (value) => {
            this.setFeedRate(value);
            this.setPlayRate(value);
            this.setWalkRate(value);
            this.setBathRate(value);
            this.setSleepRate(value);
        } 
    }
    
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
    
    const controlGame = (tamagotchi) => {
        tamagotchi.applyColor();
        hero.style.backgroundColor = tamagotchi.getColor();
        if(tamagotchi.getIsDead()) {
            wrapper.style.opacity = "0.1";
            modalClose.classList.remove("hide");
        }
    };
    
    const showCurrentLoop = (value, getRate) => {
        const rate = getRate();
        value.style.width = rate * currantWidth / 100 + 'px';
        value.innerHTML = rate + '%';
    };
    
    const decreaseLoop = (value, tamagotchi) => {
        tamagotchi.decreaseLifeValues(-value);
        showCurrentLoop(fed, tamagotchi.getFeedRate);
        showCurrentLoop(played, tamagotchi.getPlayRate);
        showCurrentLoop(walked, tamagotchi.getWalkRate);
        showCurrentLoop(bathed, tamagotchi.getBathRate);
        showCurrentLoop(slept, tamagotchi.getSleepRate);
        controlGame(tamagotchi);
    };
        
    const tamagotchi = new Tamagotchi();
    tamagotchi.setName(input.value);
    
    btnYes.addEventListener("click", () => {
        start();
    });
    
    document.addEventListener("keydown", (e) => {
        if (e.code === "Enter" && !modalStart.classList.contains("hide")) {
            start();
        }
    });

    const start = () => {
        modalStart.classList.add("hide");
        wrapper.style.opacity = "1";
        
        heroName.append(input.value);
        setInterval(() => {
            decreaseLoop(2, tamagotchi);
        }, 1500);
    };
    
    btnFeed.addEventListener("click", () => {
        tamagotchi.setFeedRate(100);
        tamagotchi.setWalkRate(-2);
        tamagotchi.setBathRate(-2);
        showCurrentLoop(fed, tamagotchi.getFeedRate);
        showCurrentLoop(walked, tamagotchi.getWalkRate);
        showCurrentLoop(bathed, tamagotchi.getBathRate);
        controlGame(tamagotchi);
    });
    
    btnPlay.addEventListener("click", () => {
        tamagotchi.setPlayRate(100);
        tamagotchi.setBathRate(-2);
        tamagotchi.setFeedRate(-4);
        showCurrentLoop(played, tamagotchi.getPlayRate);
        showCurrentLoop(bathed, tamagotchi.getBathRate);
        showCurrentLoop(fed, tamagotchi.getFeedRate);
        controlGame(tamagotchi);
    });
    
    btnWalk.addEventListener("click", () => {
        tamagotchi.setWalkRate(100);
        tamagotchi.setBathRate(-4);
        tamagotchi.setFeedRate(-2);
        tamagotchi.setSleepRate(-2);
        showCurrentLoop(walked, tamagotchi.getWalkRate);
        showCurrentLoop(bathed, tamagotchi.getBathRate);
        showCurrentLoop(fed, tamagotchi.getFeedRate);
        showCurrentLoop(slept, tamagotchi.getSleepRate);
        controlGame(tamagotchi);
    });
    
    btnBathe.addEventListener("click", () => {
        tamagotchi.setBathRate(100);
        showCurrentLoop(bathed, tamagotchi.getBathRate);
        controlGame(tamagotchi);
    });
    
    btnSleep.addEventListener("click", () => {
        tamagotchi.setSleepRate(100);
        tamagotchi.setFeedRate(-2);
        tamagotchi.setPlayRate(-2);
        showCurrentLoop(slept, tamagotchi.getSleepRate);
        showCurrentLoop(fed, tamagotchi.getFeedRate);
        showCurrentLoop(played, tamagotchi.getPlayRate);
        controlGame(tamagotchi);
    });
}

game();

