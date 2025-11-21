import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full z-50 px-6 py-6"
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent blur-md opacity-30 rounded-full group-hover:opacity-50 transition-opacity" />
                        <Cpu className="w-8 h-8 text-accent relative z-10 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                        BlueMind Digital
                    </span>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
