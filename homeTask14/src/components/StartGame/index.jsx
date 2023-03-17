import "./StartGame.scss";

const StartGame = ({ onStart }) => {
   return (
      <div className="start-game">
         <h1 className="start-game__title">Welcome to the Game</h1>
         <div
            className="start-game__btn"
            onClick={onStart}>
            Play!
         </div>
         <h4 className="start-game__text">P.S: No, any rules :) Just "pop" some ballons and relax</h4>
      </div>
   )
}

export default StartGame;