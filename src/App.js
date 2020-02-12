import React, { Component } from 'react';
import Header from './components/Header/Header';
import Question from './components/QuestionBlock/QuestionBlock';
import Answer from './components/AnswerBlock/Answer';
import Next from './components/NextBtn/Next';
import Modal from './components/Modal/Modal';
import data from './data';
import classes from './App.module.scss';

class App extends Component {
  state = {
    currentScore: 0,
    activePage: 0,
    gamePoints: 5,
    rightAnswer: false,
    rightAnswerNumber: 1,
    userAnswer: null,
    gameOver: false,
  }

  pages = ['Птицы Беларуси', 'Птицы Австралии', 'Птицы Китая', 'Птицы Канады', 'Птицы ЮАР', 'Птицы Антарктиды'];

  changeState = (prop, value) => (
    this.setState((prevState) => ({ [prop]: value }))
  );

  render() {
    const { currentScore, activePage, rightAnswer, rightAnswerNumber, userAnswer, gamePoints, gameOver } = this.state;
    if (!gameOver) {
      return (
        <div className={classes.AppWrapper}>
          <Header 
            pages={this.pages} 
            score={currentScore}
            activePage={activePage} />
          <Question 
            currentArr={data[activePage]}
            rightAnswer={rightAnswer}
            changeState={this.changeState}
            rightAnswerNumber={rightAnswerNumber}
            activePage={activePage}
            rightAnswer={rightAnswer}
          />
          <Answer
            currentArr={data[activePage]}
            rightAnswerNumber={rightAnswerNumber}
            changeState={this.changeState}
            rightAnswer={rightAnswer}
            userAnswer={userAnswer}
            gamePoints={gamePoints}
            currentScore={currentScore}
            gameOver={gameOver}
            activePage={activePage}
          />
          <Next 
            rightAnswer={rightAnswer}
            changeState={this.changeState}
            activePage={activePage}
            userAnswer={userAnswer}
            currentScore={currentScore}
          />
        </div>
      );
    } else {
      return (
        <div className={classes.AppWrapper}>
          <Header 
          pages={this.pages} 
          score={currentScore}
          activePage={activePage} />
          <Modal 
            changeState={this.changeState}
            currentScore={currentScore}
          />
        </div>
      )
    }
  };
};

export default App;
