import React from 'react';
import { PopupModal } from 'react-calendly';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <PopupModal
                    url="https://calendly.com/mr-benyelles-mohamed/30min"
                    onModalClose={onClose}
                    open={isOpen}
                    rootElement={document.getElementById("root")}
                />
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
