import "./EndGame.scss";

const EndGame = () => {
   const handleRestart = () => {
      window.location.reload();
   };

   return (
      <div className="endgame-field">
         <h2 className="endgame-field__title">
            Congrats! You popped all the limit balloons 🎉
         </h2>
         <h3 className="endgame-field__text">One more game?</h3>
         <div
         className="endgame-field__btn"
         onClick={handleRestart}>Go</div>
      </div>
   );
};

export default EndGame;