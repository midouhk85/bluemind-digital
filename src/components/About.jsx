import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';
import bluemindFullLogo from '../assets/bluemind-full-logo.png';

const values = [
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Innovation",
        description: "Toujours à la pointe de la technologie pour vous offrir le meilleur."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Accompagnement",
        description: "Une équipe dédiée à votre réussite à chaque étape du projet."
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Performance",
        description: "Des résultats mesurables et un retour sur investissement optimisé."
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-deepBlue relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                            Notre Histoire
                        </h2>
                        <p className="text-textGray text-lg mb-6 leading-relaxed">
                            Fondée il y a 6 ans, BlueMind Digital est née d'une vision simple : rendre la transformation digitale accessible et performante pour toutes les entreprises.
                        </p>
                        <p className="text-textGray text-lg mb-8 leading-relaxed">
                            Aujourd'hui, nous sommes fiers d'accompagner les plus grands acteurs du marché dans leur évolution numérique, en alliant créativité humaine et puissance de l'intelligence artificielle.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-4 bg-secondary/30 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-accent mb-3">{value.icon}</div>
                                    <h3 className="font-bold mb-2 font-display">{value.title}</h3>
                                    <p className="text-sm text-textGray font-body">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-deepBlue/80 to-transparent z-10" />
                            {/* BlueMind Full Logo */}
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary p-8 md:p-12 pb-32 md:pb-32">
                                <img src={bluemindFullLogo} alt="BlueMind Digital Team" className="w-full h-full object-contain" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <h3 className="text-2xl font-bold text-white mb-2 font-display">L'Équipe BlueMind</h3>
                                <p className="text-accent font-body">Experts en IA & Digital</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-accentGlow/10 rounded-full blur-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
