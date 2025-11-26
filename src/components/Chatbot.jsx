import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Bonjour ! Je suis l'assistant IA de BlueMind. Comment puis-je vous aider à transformer votre entreprise ?",
            sender: 'bot'
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsTyping(true);

        // Simulate AI processing
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage.text);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (text) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('prix') || lowerText.includes('tarif') || lowerText.includes('coût')) {
            return "Nos solutions sont sur mesure. Un audit gratuit est la meilleure façon d'estimer le ROI pour votre projet. Souhaitez-vous réserver un créneau ?";
        }
        if (lowerText.includes('service') || lowerText.includes('offre')) {
            return "Nous proposons : Automatisation IA, Chatbots Intelligents, et Analyse de Données. Quel domaine vous intéresse le plus ?";
        }
        if (lowerText.includes('contact') || lowerText.includes('rdv') || lowerText.includes('audit')) {
            return "Excellente idée ! Vous pouvez réserver un audit gratuit directement via le bouton 'Réserver' en haut de la page.";
        }
        return "C'est un sujet passionnant ! Nos experts seraient ravis d'en discuter plus en détail lors d'un audit personnalisé.";
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-24 right-6 z-50 p-4 rounded-full shadow-lg shadow-accent/20 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 bg-gradient-to-r from-accent to-cyan-500 text-deepBlue'
                    }`}
            >
                <MessageSquare className="w-6 h-6" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-deepBlue/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-accent/10 to-cyan-500/10 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">BlueMind AI</h3>
                                    <span className="text-xs text-accent flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        En ligne
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-textGray hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-purple-500/20' : 'bg-accent/20'
                                        }`}>
                                        {msg.sender === 'user' ? <User className="w-4 h-4 text-purple-400" /> : <Bot className="w-4 h-4 text-accent" />}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${msg.sender === 'user'
                                        ? 'bg-purple-500/20 text-white rounded-tr-none border border-purple-500/30'
                                        : 'bg-white/5 text-textLight rounded-tl-none border border-white/10'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-4 h-4 text-accent" />
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-textGray/50 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-textGray/50 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-textGray/50 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Posez une question..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim()}
                                    className="p-2 bg-accent text-deepBlue rounded-full hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
