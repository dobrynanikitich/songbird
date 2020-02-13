import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import classes from './BirdsInfo.module.scss';

const BirdsInfo = ({ birdImage, birdName, birdLatineName, birdSound, birdsDesc }) => (
    <>
        <div className={classes.BirdsInfoImage}>
            <img
                className={classes.BirdImage} 
                src={birdImage}
                alt=''/>
        </div>
        <div className={classes.BirdsInfoAudio}>
            <p>{birdName}</p>
            <p>{birdLatineName}</p>
            <div><AudioPlayer 
                src={birdSound} 
                autoPlayAfterSrcChange={false}/>
            </div>
        </div>
        <div className={classes.BirdsDesc}>
            {birdsDesc}
        </div>
    </>
);

export default BirdsInfo;