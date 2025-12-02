import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBackground from '../assets/hero-background.png';
import heroIllustration from '../assets/hero-illustration-new.png';
import ParticlesBackground from './ParticlesBackground';
import TypingAnimation from './TypingAnimation';
import MagneticButton from './MagneticButton';
import BookingModal from './BookingModal';

const Hero = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-white dark:bg-primary pt-24 pb-8">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Generated Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-40 animate-float-wave"
                    style={{
                        backgroundImage: `url(${heroBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 dark:from-primary/80 via-white/70 dark:via-primary/50 to-white dark:to-primary" />

                {/* Vibrant Color Blobs */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.12),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

                <div className="absolute w-96 h-96 bg-accent/20 dark:bg-accent/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow" />
                <div className="absolute w-96 h-96 bg-accentBlue/20 dark:bg-accentBlue/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow delay-1000" />
                <div className="absolute w-80 h-80 bg-accentPurple/15 dark:bg-accentPurple/15 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow delay-500" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />

                {/* Particles */}
                <ParticlesBackground />

                {/* Hero Illustration - Visible on all screens with responsive positioning */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-4/5 lg:w-2/3 h-full pointer-events-none">
                    <div
                        className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-40 md:opacity-60 lg:opacity-80"
                        style={{
                            backgroundImage: `url(${heroIllustration})`,
                            maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 65%, transparent 85%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 65%, transparent 85%)',
                        }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-left">
                        {/* Text Reveal */}
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-display"
                        >
                            <span className="block text-gray-900 dark:text-textLight mb-2 drop-shadow-sm">Automatisez aujourd'hui.</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accentBlue to-accentPurple drop-shadow-sm">
                                <TypingAnimation
                                    texts={[
                                        "Révolutionnez tout.",
                                        "Créez votre avenir.",
                                        "Automatisez le futur."
                                    ]}
                                    speed={80}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-700 dark:text-textGray font-medium mb-8 md:mb-10 max-w-xl drop-shadow-sm"
                        >
                            BlueMind Digital transforme votre entreprise grâce à l'intelligence artificielle et des solutions digitales sur mesure.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 items-start"
                        >
                            <MagneticButton className="w-full sm:w-auto flex">
                                <button
                                    onClick={() => setIsBookingOpen(true)}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accentBlue hover:from-accentBlue hover:to-accent text-white font-semibold rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 font-display"
                                >
                                    Réserver un audit
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </MagneticButton>
                            <MagneticButton className="w-full sm:w-auto flex">
                                <a href="#contact" className="w-full px-8 py-4 bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-sm border-2 border-accent text-accent dark:text-accent rounded-full transition-all text-center font-display font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                    Nous contacter
                                </a>
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* Right Column - Empty for illustration background */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
};

export default Hero;
