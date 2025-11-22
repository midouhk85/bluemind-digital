import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construire le message WhatsApp
        const whatsappNumber = '213540035753'; // Numéro sans le +
        const message = `*Nouvelle demande de contact*%0A%0A` +
            `*Nom:* ${formData.name}%0A` +
            `*Entreprise:* ${formData.company || 'Non renseignée'}%0A` +
            `*Email:* ${formData.email}%0A%0A` +
            `*Message:*%0A${formData.message}`;

        // Ouvrir WhatsApp avec le message pré-rempli
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');

        // Réinitialiser le formulaire après ouverture WhatsApp
        setFormData({ name: '', company: '', email: '', message: '' });
    };

    const socialLinks = [
        { Icon: Linkedin, href: 'https://www.linkedin.com/company/bluemind-digital', label: 'LinkedIn' },
        { Icon: Instagram, href: 'https://www.instagram.com/bluemind.digital', label: 'Instagram' },
        { Icon: Facebook, href: 'https://www.facebook.com/blueminddigital', label: 'Facebook' }
    ];

    return (
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -top-48 -right-48" />
                <div className="absolute w-[600px] h-[600px] bg-accentBlue/10 rounded-full blur-[100px] -bottom-48 -left-48" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Contactez-nous</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Parlons de votre projet</h2>
                        <p className="text-textGray text-lg mb-12">
                            Prêt à transformer votre entreprise ? Notre équipe est là pour vous accompagner.
                        </p>

                        <div className="space-y-8">
                            <a href="mailto:contact@bluemind.digital" className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                                    <p className="text-textGray group-hover:text-accent transition-colors">contact@bluemind.digital</p>
                                </div>
                            </a>

                            <a href="tel:+213540035753" className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Téléphone</h3>
                                    <p className="text-textGray group-hover:text-accent transition-colors">+213 540 035 753</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Adresse</h3>
                                    <p className="text-textGray group-hover:text-accent transition-colors">Alger, Algérie</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4 relative z-20">
                            {socialLinks.map(({ Icon, href, label }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] cursor-pointer"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-textGray mb-2">Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white/5 transition-all text-white placeholder:text-white/20"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-textGray mb-2">Entreprise</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white/5 transition-all text-white placeholder:text-white/20"
                                        placeholder="Votre entreprise"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textGray mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white/5 transition-all text-white placeholder:text-white/20"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textGray mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white/5 transition-all text-white placeholder:text-white/20"
                                    placeholder="Parlez-nous de votre projet..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black/70 hover:bg-black/90 backdrop-blur-sm border border-accent/30 hover:border-accent text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/25 font-display"
                            >
                                Envoyer le message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
