import React, { Component } from 'react';
import bird from '../../assets/bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import classes from './QuestionBlock.module.scss';

class Question extends Component {
    componentDidMount() {
        let { changeState, rightAnswerNumber } = this.props;
        rightAnswerNumber = Math.floor(Math.random() * 6) + 1;
        changeState('rightAnswerNumber', rightAnswerNumber);
    }

    componentDidUpdate() {
        const { rightAnswer } = this.props;
        if (rightAnswer) {
            this.player.audio.pause()
        }
    }

    render() {
        const { currentArr, rightAnswer, rightAnswerNumber } = this.props;
        return (
            <section className={classes.QuestionSection}>
                <div className={classes.PictureBird}>
                    <img src={rightAnswer ? currentArr[rightAnswerNumber - 1].image : bird} alt=''/>
                </div>
                <div className={classes.AudioQuestion}>
                    <p>{rightAnswer ? `${currentArr[rightAnswerNumber - 1].name}` : '******'}</p>
                    <AudioPlayer
                        className={classes.AudioPlayer}
                        src={currentArr[rightAnswerNumber - 1].audio}
                        autoPlayAfterSrcChange={false}
                        ref={c => (this.player = c)}
                    />
                </div>
            </section>
        );
    };
};

export default Question;