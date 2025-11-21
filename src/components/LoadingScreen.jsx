import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-50 bg-deepBlue flex items-center justify-center"
        >
            <div className="relative">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                    }}
                    className="relative z-10"
                >
                    <Cpu className="w-16 h-16 text-accent" />
                </motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-accent blur-xl rounded-full"
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
