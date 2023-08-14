// Modal.js
import React from 'react';
import Modal2017 from './Modal2017';
import Modal2018 from './Modal2018';
import Modal2019 from './Modal2019';
// Import other modal components as needed

const Modal = ({ year, isOpen, onClose, title, description }) => {
    let ModalComponent = null;

    switch (year) {
        case '2017':
            ModalComponent = Modal2017;
            break;
        case '2018':
            ModalComponent = Modal2018;
            break;
        case '2019':
            ModalComponent = Modal2019;
            break;
        // Add cases for other years and corresponding modal components

        default:
            console.log(`No modal component found for year: ${year}`);
            break;
    }

    if (!ModalComponent) {
        // Handle the case where ModalComponent is not found
        return null;
    }

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} title={title} description={description} />
    );
};

export default Modal;
