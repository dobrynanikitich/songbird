import React, { Component } from 'react';
import correct from '../../../assets/correct.wav';
import incorrect from '../../../assets/incorrect.wav';
import classes from './Variant.module.scss';

class Variant extends Component {
    state = {
        isClicked: false,
        isCorrectAnswer: false,
    }

    getPlayerAnswer = () => {
        const { rightAnswerNumber, changeState, id, rightAnswer, gamePoints, currentScore, activePage } = this.props;
        const { isClicked } = this.state;
        let rightAnswerSound = new Audio();
        let wrongAnswerSound = new Audio();
        rightAnswerSound.src = correct;
        wrongAnswerSound.src = incorrect
        changeState('userAnswer', id - 1);
        if (!rightAnswer) {
            if (id !== rightAnswerNumber && !isClicked) {
                wrongAnswerSound.play();
            }
            if (!isClicked) {
                const newGamePoints = gamePoints - 1;
                changeState('gamePoints', newGamePoints);
                this.setState({ isClicked: true });
            }
        }
        if (id === rightAnswerNumber && !isClicked) {
            if (!rightAnswer) {
                rightAnswerSound.play();
            }
            let sum = currentScore + gamePoints;
            this.setState({ isCorrectAnswer: true });
            changeState('rightAnswer', true);
            changeState('currentScore', sum);
            if (activePage === 5) {
                changeState('activePage', 0);
                changeState('gameOver', true)
            }
        }
    }

    render() {
        const { data, id } = this.props;
        const { isCorrectAnswer, isClicked } = this.state;
        let appliedClass;
        if (isClicked && isCorrectAnswer) {
            appliedClass = classes.RightAnswer;
        } else if (isClicked && !isCorrectAnswer) {
            appliedClass = classes.WrongAnswer;
        }
        return (
            <li 
                className={isClicked ? appliedClass : ''}
                onClick={this.getPlayerAnswer}
                id={id}
                >{data}
            </li>
        );
    };
};

export default Variant;