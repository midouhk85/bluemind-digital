import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BookingModal from './BookingModal';
import robotLogo from '../assets/robot-logo-eyes.png';
import robotLogoLight from '../assets/robot-logo-light.png';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

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
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-primary/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg dark:shadow-accent/5'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
                            <img src={robotLogoLight} alt="BlueMind Robot" className="w-8 h-8 relative z-10 dark:hidden" />
                            <img src={robotLogo} alt="BlueMind Robot" className="w-8 h-8 relative z-10 hidden dark:block drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-textLight tracking-tight group-hover:text-accent transition-colors">
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
                        <ThemeToggle />
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="px-6 py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent/50 text-accent rounded-full transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] font-display tracking-wide"
                        >
                            Réserver un audit
                        </button>
                    </nav>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Theme Toggle on Mobile */}
                        <ThemeToggle />
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors"
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
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 pb-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
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
                                <button
                                    onClick={() => {
                                        setIsBookingOpen(true);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full py-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 text-accent rounded-lg transition-all text-sm font-medium"
                                >
                                    Réserver un audit
                                </button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
};

export default Header;
