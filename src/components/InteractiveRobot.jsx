import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveRobot = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);
    const containerRef = useRef(null);

    // Suivi de la souris
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculer la position relative de la souris (-1 à 1)
            const x = (e.clientX - centerX) / (window.innerWidth / 2);
            const y = (e.clientY - centerY) / (window.innerHeight / 2);

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Clignement des yeux aléatoire
    useEffect(() => {
        const blinkLoop = () => {
            const nextBlink = Math.random() * 3000 + 2000; // Entre 2s et 5s
            setTimeout(() => {
                setIsBlinking(true);
                setTimeout(() => {
                    setIsBlinking(false);
                    blinkLoop();
                }, 150); // Durée du clignement
            }, nextBlink);
        };

        blinkLoop();
        return () => { }; // Cleanup handled by timeouts naturally finishing or being ignored
    }, []);

    // Calcul des mouvements
    const headRotation = {
        x: Math.min(0, mousePosition.y * 10), // Rotation X basée sur Y souris (seulement vers le haut)
        y: mousePosition.x * 10  // Rotation Y basée sur X souris (gauche-droite)
    };

    const eyeMovement = {
        x: mousePosition.x * 10, // Déplacement horizontal max 10px
        y: Math.min(0, mousePosition.y * 8) // Déplacement vertical uniquement vers le haut
    };

    return (
        <div ref={containerRef} className="w-48 h-48 relative flex items-center justify-center">
            <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                animate={{
                    rotateX: -headRotation.x,
                    rotateY: headRotation.y,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{ perspective: 1000 }}
            >
                {/* Groupe Tête + Antenne */}
                <motion.g>
                    {/* Antenne */}
                    <line x1="100" y1="20" x2="100" y2="50" stroke="#60fdfc" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="100" cy="20" r="8" fill="#60fdfc" />

                    {/* Visage (Contour) */}
                    {/* Forme de "C" stylisée ou rectangle arrondi ouvert */}
                    <path
                        d="M 60 50 
                           H 140 
                           A 40 40 0 0 1 180 90 
                           V 130 
                           A 40 40 0 0 1 140 170 
                           H 60 
                           A 40 40 0 0 1 20 130 
                           V 90 
                           A 40 40 0 0 1 60 50"
                        fill="none"
                        stroke="#60fdfc"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />

                    {/* Yeux */}
                    <motion.g
                        animate={{
                            x: eyeMovement.x,
                            y: eyeMovement.y
                        }}
                        transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                        {/* Oeil Gauche */}
                        <motion.circle
                            cx="70"
                            cy="110"
                            r="12"
                            fill="#60fdfc"
                            animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                            transition={{ duration: 0.1 }}
                        />
                        {/* Oeil Droit */}
                        <motion.circle
                            cx="130"
                            cy="110"
                            r="12"
                            fill="#60fdfc"
                            animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                            transition={{ duration: 0.1 }}
                        />
                    </motion.g>
                </motion.g>

                {/* Nœud Papillon (Fixe ou bouge un peu moins ?) */}
                <motion.path
                    d="M 80 180 L 120 180 L 120 200 L 80 200 Z"
                    fill="none" // Placeholder pour le noeud papillon, je vais faire deux triangles
                />
                <path
                    d="M 85 180 L 115 180 L 100 190 Z M 85 200 L 115 200 L 100 190 Z"
                    fill="#60fdfc"
                    transform="translate(0, 10)"
                />
                {/* Noeud papillon style sablier */}
                <path
                    d="M 80 185 L 120 185 L 120 205 L 80 205 Z"
                    fill="none"
                />
                <path
                    d="M 100 195 L 80 185 V 205 Z M 100 195 L 120 185 V 205 Z"
                    fill="#60fdfc"
                />

            </motion.svg>
        </div>
    );
};

export default InteractiveRobot;
