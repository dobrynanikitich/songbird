import React from 'react';
import classes from './Modal.module.scss';

const Modal = ({ changeState, currentScore }) => {
    const playAgainHandler = () => {
        const newRightAnswerNumber = Math.floor(Math.random() * 6) + 1;
        changeState('currentScore', 0);
        changeState('gamePoints', 5);
        changeState('rightAnswer', false);
        changeState('rightAnswerNumber', newRightAnswerNumber);
        changeState('userAnswer', null);
        changeState('gameOver', false);
    }

    return currentScore === 30 ? 
    <div className={classes.GameFinish}>
        <p className={classes.Congrats}>Поздравляем!</p>
        <p className={classes.CongratsMessage}>Невероятно! Вы набрали максимальное число баллов! (30/30)</p>
        <button onClick={playAgainHandler}>Закрепить знания</button>
    </div> : 
    <div className={classes.GameFinish}>
        <p className={classes.Congrats}>Поздравляем!</p>
        <p className={classes.CongratsMessage}>{`Вы прошли викторину и набрали ${currentScore}/30 балов`}</p>
        <button onClick={playAgainHandler}>Играть снова</button>
    </div>
}

export default Modal;