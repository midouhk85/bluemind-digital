import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, BarChart3, Code2, BrainCircuit } from 'lucide-react';
import LogoCarousel from './LogoCarousel';

const services = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Digitalisation",
        description: "Transformation numérique complète de vos processus métier pour une efficacité maximale.",
        color: "from-accent to-accentBlue"
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Social Ads",
        description: "Stratégies publicitaires performantes sur Meta, Google Ads, LinkedIn, TikTok et DV360.",
        color: "from-accentBlue to-accentGlow"
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Développement SaaS & ERP",
        description: "Solutions logicielles sur mesure, robustes et évolutives pour votre entreprise.",
        color: "from-accent to-accentGlow"
    },
    {
        icon: <BrainCircuit className="w-8 h-8" />,
        title: "Solutions IA",
        description: "Intégration d'intelligence artificielle pour automatiser et optimiser vos opérations.",
        color: "from-accentGlow to-accent"
    }
];

const ServiceCard = ({ service, index }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotX = -(y - centerY) / 10;
        const rotY = (x - centerX) / 10;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.2s ease-out'
            }}
            className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 text-accent shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {service.title}
                </h3>
                <p className="text-textGray text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-8 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <LogoCarousel />
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Nos Expertises</h2>
                    <p className="text-textGray max-w-2xl mx-auto">
                        Des solutions technologiques de pointe pour propulser votre croissance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
