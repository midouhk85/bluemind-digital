import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const currentText = texts[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(currentText.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, texts, speed, deleteSpeed, pauseTime]);

    // Cursor blink
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className="inline-block">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                |
            </span>
        </span>
    );
};

export default TypingAnimation;
