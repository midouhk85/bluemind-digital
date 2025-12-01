import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import n8nLogo from '../assets/n8n-logo.png';
import makeLogo from '../assets/make-logo.png';

const MaskedIcon = ({ src, size = "w-12 h-12" }) => (
    <div
        className={`${size} bg-current`}
        style={{
            maskImage: `url(${src})`,
            WebkitMaskImage: `url(${src})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center'
        }}
    />
);

const logos = [
    {
        name: "Facebook",
        icon: <Facebook className="w-8 h-8" />
    },
    {
        name: "Instagram",
        icon: <Instagram className="w-8 h-8" />
    },
    {
        name: "Google",
        // Simple G logo path
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.08 2.72-5.2 2.72-7.707 0-.52-.053-1.04-.16-1.52h-10.613z" />
            </svg>
        )
    },
    {
        name: "Youtube",
        icon: <Youtube className="w-8 h-8" />
    },
    {
        name: "TikTok",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.12-.17 2.54-.38 5.15-1.12 7.59-1.02 3.34-4.09 5.54-7.55 5.47-4.4-.15-7.97-3.75-7.97-8.17 0-4.42 3.58-8.02 7.98-8.17 1.05-.03 2.1.19 3.09.63v4.13c-.58-.53-1.35-.84-2.13-.9-.9-.06-1.8.19-2.54.71-.74.52-1.24 1.33-1.39 2.23-.22 1.4.44 2.86 1.67 3.61 1.23.75 2.84.6 3.92-.37.89-.79 1.32-1.98 1.32-3.16V.02h-1.39z" />
            </svg>
        )
    },
    {
        name: "LinkedIn",
        icon: <Linkedin className="w-8 h-8" />
    },
    {
        name: "n8n",
        icon: <MaskedIcon src={n8nLogo} size="w-12 h-12" />
    },
    {
        name: "Make",
        icon: <MaskedIcon src={makeLogo} size="w-12 h-12" />
    },
    {
        name: "Zapier",
        // Placeholder for Zapier - stylized asterisk/bolt
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M4 12h16M12 4v16M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        )
    }
];

const LogoCarousel = () => {
    return (
        <div className="w-full py-12 overflow-hidden bg-deepBlue/50">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-textGray text-sm uppercase tracking-widest">Outils maîtrisés</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="mx-8 flex flex-col items-center justify-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group/item"
                        >
                            <div className="text-white group-hover/item:text-accent transition-colors duration-300 h-12 flex items-center justify-center">
                                {logo.icon}
                            </div>
                            <span className="text-xs font-medium text-textGray group-hover/item:text-white transition-colors duration-300">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={`clone-${index}`}
                            className="mx-8 flex flex-col items-center justify-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group/item"
                        >
                            <div className="text-white group-hover/item:text-accent transition-colors duration-300 h-12 flex items-center justify-center">
                                {logo.icon}
                            </div>
                            <span className="text-xs font-medium text-textGray group-hover/item:text-white transition-colors duration-300">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
