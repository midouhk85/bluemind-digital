import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';
import robotLogo from '../assets/robot-logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Services",
            links: [
                { name: "Digitalisation", href: "#services" },
                { name: "Social Ads", href: "#services" },
                { name: "Développement SaaS", href: "#services" },
                { name: "Solutions IA", href: "#services" }
            ]
        },
        {
            title: "Entreprise",
            links: [
                { name: "À propos", href: "#about" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" }
            ]
        },
        {
            title: "Contact",
            links: [
                { name: "contact@bluemind.digital", href: "mailto:contact@bluemind.digital", icon: Mail },
                { name: "+213 540 035 753", href: "tel:+213540035753", icon: Phone },
                { name: "Alger, Algérie", href: "#", icon: MapPin }
            ]
        }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/bluemind-digital", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/bluemind.digital", label: "Instagram" },
        { icon: Facebook, href: "https://www.facebook.com/blueminddigital", label: "Facebook" }
    ];

    return (
        <footer className="relative bg-primary border-t border-white/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -top-48 -left-48" />
                <div className="absolute w-[600px] h-[600px] bg-accentBlue/5 rounded-full blur-[100px] -bottom-48 -right-48" />
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Logo & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center gap-3 mb-4 group cursor-pointer">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
                                <img src={robotLogo} alt="BlueMind Robot" className="w-8 h-8 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                BlueMind Digital
                            </span>
                        </div>
                        <p className="text-textGray text-sm leading-relaxed mb-6 max-w-md">
                            Transformez votre entreprise grâce à l'intelligence artificielle et des solutions digitales sur mesure. Innovation, expertise et résultats.
                        </p>
                        <div className="flex gap-3 relative z-20">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] text-textGray cursor-pointer"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-white font-bold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-textGray hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                        >
                                            {link.icon && <link.icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />}
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-textGray text-sm flex items-center gap-1">
                        © {currentYear} BlueMind Digital. Tous droits réservés.
                    </p>
                    <p className="text-textGray text-sm flex items-center gap-1">
                        Fait avec <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> à Alger
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
