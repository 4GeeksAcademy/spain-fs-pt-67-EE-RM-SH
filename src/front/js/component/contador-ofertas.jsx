import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const SecondsCounter = (props) => {
    return (
        <div className="container-counter">
            <div className="container d-flex justify-content-center">
                <div className='d-block'>
                    <h1 className='d-flex justify-content-center'>Counter</h1>
                    <div className='d-flex'>
                        <div className="clock"><i className="fa-regular fa-clock fa-spin fa-lg"></i></div>
                    </div>
                </div>

                <div className='d-block'>
                    <h1 className='d-flex justify-content-center'>Horas</h1>
                    <div className='d-flex'>
                        <div className="six">{props.sixTime}</div>
                        <div className="five">{props.fiveTime}</div>
                    </div>
                </div>

                <div className='d-block'>
                    <h1 className='d-flex justify-content-center'>Minutos</h1>
                    <div className='d-flex'>
                        <div className="four">{props.fourTime}</div>
                        <div className="three">{props.threeTime}</div>
                    </div>
                </div>

                <div className='d-block'>
                    <h1 className='d-flex justify-content-center'>Segundos</h1>
                    <div className='d-flex'>
                        <div className="two">{props.twoTime}</div>
                        <div className="one">{props.oneTime}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SecondsCounter.propTypes = {
    sixTime: PropTypes.number,
    fiveTime: PropTypes.number,
    fourTime: PropTypes.number,
    threeTime: PropTypes.number,
    twoTime: PropTypes.number,
    oneTime: PropTypes.number,
};

const App = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const sixTime = Math.floor(hours / 10);
    const fiveTime = hours % 10;
    const fourTime = Math.floor(minutes / 10);
    const threeTime = minutes % 10;
    const twoTime = Math.floor(remainingSeconds / 10);
    const oneTime = remainingSeconds % 10;

    return (
        <SecondsCounter
            sixTime={sixTime}
            fiveTime={fiveTime}
            fourTime={fourTime}
            threeTime={threeTime}
            twoTime={twoTime}
            oneTime={oneTime}
        />
    );
};


