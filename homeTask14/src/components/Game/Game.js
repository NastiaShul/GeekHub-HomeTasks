import { useState, useEffect } from "react";
import Ballon from "../Ballon/Balloon";
import EndGame from "../EndGame/EndGame";
import "./Game.scss";

const Game = () => {

   const balloonCount = 30;
   const [popped, setPopped] = useState(0);
   const [ready, setReady] = useState(false);

   useEffect(() => {
      if (ready) {
         init();
      }
   }, [ready])

   const init = () => {
      const balloons = document.querySelectorAll(".balloon");
      for (let i = 0; i < balloons.length; i++) {
         animateBallon(balloons, i);
      }
   }

   const readyGame = () => {
      setReady(true);
   }

   const getRandomPosition = (element) => {
      const x = document.body.offsetHeight - element.clientHeight;
      const y = document.body.offsetWidth - element.clientWidth;
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);
      return [randomX, randomY];
   }

   const animateBallon = (balloons, i) => {
      const balloon = balloons[i];
      const xy = getRandomPosition(balloon);

      Object.assign(balloon.style, {
         top: xy[0] + "px",
         left: xy[1] + "px",
         zIndex: i,
         animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s"
      });
      balloon.classList.add("animating");
   }

   const popBallon = (event) => {
      const balloon = event.target;
      balloon.classList.remove("animating");
      balloon.classList.add("popped");

      setPopped(popped => popped + 1);
      window.setTimeout(function () {
         balloon.style.display = "none";
      }, 500);
   }

   const renderBallons = () => {
      if(popped >= balloonCount) {
         return <EndGame/>
      }
      return [...Array(balloonCount)].map((_, i) => (
         <Ballon key={i} pop={popBallon} />
      ));
   }

   return (
      <>
         {ready ? (
            <div className="game-field">
               <span className="game-field__score">
                  Poped : {popped}
               </span>
               {renderBallons()}
            </div>
         ) : (
            <div className="start-game">
               <h1 className="start-game__title">Welcome to the Game</h1>
               <div
                  onClick={readyGame}
                  className="start-game__btn">
                  Play!
               </div>
            </div>
         )}
      </>
   );
}

export default Game;
