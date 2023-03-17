import { useState, useEffect, useRef } from "react";
import Balloon from "../Balloon";
import EndGame from "../EndGame";
import StartGame from "../StartGame";

import "./Game.scss";

const BALLOON_COUNT = 30;

const Game = () => {
   const OFFSET_HEIGHT = document.body.offsetHeight;
   const OFFSET_WIDTH = document.body.offsetWidth;

   const ref = useRef([]);
   const [popped, setPopped] = useState(0);
   const [isReady, setIsReady] = useState(false);
   const isGameOver = popped >= BALLOON_COUNT;

   useEffect(() => {
      if (isReady) {
         init();
      }
   }, [isReady]);

   const init = () => {
      const balloons = ref.current;
      for (let i = 0; i < balloons.length; i++) {
         animateBalloon(balloons, i);
      }
   }

   const readyGame = () => {
      setIsReady(true);
   }

   const getRandomPosition = (element) => {
      const x = OFFSET_HEIGHT - element.clientHeight;
      const y = OFFSET_WIDTH - element.clientWidth;
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);
      return [randomX, randomY];
   }

   const animateBalloon = (balloons, i) => {
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

   const popBalloon = (i) => {
      const balloon = ref.current[i];
      balloon.classList.remove("animating");
      balloon.classList.add("popped");

      setPopped(popped => popped + 1);
      window.setTimeout(function () {
         balloon.style.display = "none";
      }, 500);
   }

   return (
      <>
         {isReady ?
            (
               <div className="game-field">
                  <span className="game-field__score">
                     Poped : {popped}
                  </span>
                  {isGameOver ? <EndGame />
                     : [...Array(BALLOON_COUNT)]
                        .map((_, i) => (
                           <Balloon key={i} ref={ref} index={i} pop={() => popBalloon(i)} />
                        ))}
               </div>
            ) :
            (
               <StartGame onStart={readyGame} />
            )
         }
      </>
   );
}

export default Game;
