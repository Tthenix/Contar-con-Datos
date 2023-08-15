// Modal.js
import React from 'react';
import Modal2017 from './Modal2017';
import Modal2018 from './Modal2018';
import Modal2019 from './Modal2019';
import Modal2020 from './Modal2020';
import Modal2021 from './Modal2021';
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
        case '2020':
            ModalComponent = Modal2020;
            break;
        case '2021':
            ModalComponent = Modal2021;
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