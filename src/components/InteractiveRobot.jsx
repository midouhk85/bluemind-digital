import React from 'react';
import robotEyesLogo from '../assets/robot-logo-eyes.png';

const InteractiveRobot = () => {
    return (
        <div className="w-64 h-64 relative flex items-center justify-center">
            <img
                src={robotEyesLogo}
                alt="Robot Eyes"
                className="w-64 h-64 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]"
            />
        </div>
    );
};

export default InteractiveRobot;
