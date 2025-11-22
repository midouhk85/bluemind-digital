import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InteractiveRobot from './InteractiveRobot';

const Hero = () => {
    return (
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-primary pt-24 pb-8">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
                <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow" />
                <div className="absolute w-96 h-96 bg-accentBlue/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow delay-1000" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent blur-2xl opacity-30 rounded-full" />
                        <InteractiveRobot />
                    </div>
                </motion.div>

                {/* Text Reveal */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display"
                >
                    <span className="block text-textLight mb-2">Automatisez aujourd’hui.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accentBlue to-accentGlow">
                        Prenez l’avance demain.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-textGray mb-10 max-w-2xl mx-auto"
                >
                    BlueMind Digital transforme votre entreprise grâce à l'intelligence artificielle et des solutions digitales sur mesure.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#services" className="px-8 py-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-accent/30 hover:border-accent text-white font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(96,253,252,0.5)] flex items-center justify-center gap-2 font-display">
                        Découvrir nos services
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-white/10 hover:bg-white/5 text-textLight rounded-full transition-all backdrop-blur-sm text-center font-body">
                        Nous contacter
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
