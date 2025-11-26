import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Code, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Audit & Découverte",
        description: "Nous analysons vos flux de travail actuels et identifions les opportunités à fort impact pour l'automatisation par l'IA.",
        icon: Search,
        color: "from-blue-400 to-cyan-400"
    },
    {
        id: 2,
        title: "Stratégie & Architecture",
        description: "Nous concevons une feuille de route IA personnalisée et une architecture technique adaptée à vos objectifs commerciaux.",
        icon: Cpu,
        color: "from-cyan-400 to-teal-400"
    },
    {
        id: 3,
        title: "Développement & Intégration",
        description: "Nos ingénieurs construisent et intègrent vos solutions IA, assurant une compatibilité transparente avec votre stack.",
        icon: Code,
        color: "from-teal-400 to-emerald-400"
    },
    {
        id: 4,
        title: "Formation & Mise à l'échelle",
        description: "Nous formons votre équipe et surveillons les performances pour garantir que votre IA évolue efficacement avec votre croissance.",
        icon: Rocket,
        color: "from-emerald-400 to-green-400"
    }
];

const Process = () => {
    return (
        <section className="py-20 bg-deepBlue relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Processus</span>
                    </h2>
                    <p className="text-textLight/70 max-w-2xl mx-auto">
                        De l'analyse initiale au déploiement à grande échelle, nous vous guidons à chaque étape de votre transformation digitale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-accent/20 via-cyan-400/20 to-emerald-400/20 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-accent/30 transition-all duration-300 h-full hover:-translate-y-2">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-accent/10 group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="w-7 h-7 text-deepBlue" />
                                </div>

                                <div className="absolute top-6 right-6 text-4xl font-bold text-white/5 select-none">
                                    0{step.id}
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-textLight/70 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
