import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import robotLogo from '../assets/robot-logo-eyes.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Detect scroll for background effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'À propos', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${isScrolled
                ? 'bg-primary/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-accent/5'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
                        <img src={robotLogo} alt="BlueMind Robot" className="w-8 h-8 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                        BlueMind Digital
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-textGray hover:text-accent transition-colors text-sm font-medium relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-3">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white hover:text-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-4 pb-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                >
                    <nav className="flex flex-col gap-4 p-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-textGray hover:text-accent transition-colors text-sm font-medium py-2 px-4 hover:bg-white/5 rounded-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
