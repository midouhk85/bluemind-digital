import React, { useRef, useState } from 'react';

const MagneticButton = ({ children, className = '', ...props }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Magnetic effect (max 15px displacement)
        const maxDistance = 80;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < maxDistance) {
            const strength = (maxDistance - distance) / maxDistance;
            setPosition({
                x: deltaX * strength * 0.3,
                y: deltaY * strength * 0.3
            });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <div
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transition: 'transform 0.2s ease-out'
                }}
                className={className}
                {...props}
            >
                {children}
            </div>
        </div>
    );
};

export default MagneticButton;
