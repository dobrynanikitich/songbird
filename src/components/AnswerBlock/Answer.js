import React from 'react';
import Variant from './AnswerVariant/Variant';
import BirdsInfo from './BirdsInfo/BirdsInfo';
import classes from './Answer.module.scss';

const Answer = ({ currentArr, rightAnswerNumber, changeState, rightAnswer, userAnswer, gamePoints, currentScore, activePage, gameOver }) => {
    return (
        <section className={classes.AnswerBlock}>
            <ul className={classes.AnwerList}>
                {currentArr.map((data, i) => {
                    return (
                        <Variant
                            key={`${data.name}${i}`}
                            id={data.id}
                            data={data.name}
                            rightAnswerNumber={rightAnswerNumber}
                            changeState={changeState}
                            rightAnswer={rightAnswer}
                            userAnswer={userAnswer}
                            gamePoints={gamePoints}
                            currentScore={currentScore}
                            gameOver={gameOver}
                            activePage={activePage}
                        />
                    )
                })}
            </ul>
            <div className={classes.BirdsInfoWrapper}>
                {userAnswer !== null ? 
                    <BirdsInfo
                        birdImage={currentArr[userAnswer].image}
                        birdName={currentArr[userAnswer].name}
                        birdLatineName={currentArr[userAnswer].species}
                        birdSound={currentArr[userAnswer].audio}
                        birdsDesc={currentArr[userAnswer].description}
                    /> :
                    <p>Прослушайте аудио и выберите ответ</p>}
            </div>
        </section>
    );
};

export default Answer;