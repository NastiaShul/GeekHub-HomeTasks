const StartGame = ({game}) => {
   <div className="start-game">
      <h1 className="start-game__title">Welcome to the Game</h1>
      <div
         onClick={game}
         className="start-game__btn">
         Play!
      </div>
   </div>
}export default StartGame;