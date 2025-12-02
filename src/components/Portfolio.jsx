import React from 'react';
import { motion } from 'framer-motion';
import clientLogos from '/client-logos.png';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -top-24 -right-24" />
                <div className="absolute w-[500px] h-[500px] bg-accentBlue/5 rounded-full blur-3xl -bottom-24 -left-24" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accentGlow/5 rounded-full blur-[100px] dark:hidden" />
            </div>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Confiance & Excellence</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-black dark:text-white">6 ans d'expertise</h2>
                    <p className="text-textGray max-w-2xl mx-auto">
                        Ils nous font confiance pour leur transformation digitale.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <img
                        src={clientLogos}
                        alt="Nos clients : Ooredoo, Oppo, Aigle, Zara, Pepsi, Renault, LG, et autres..."
                        className="w-full max-w-7xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
