// Modal.js
import React from 'react';
import Modal0 from './Modal0';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Modal5 from './Modal5';
import Modal6 from './Modal6';
import Modal7 from './Modal7';
import Modal8 from './Modal8';
import Modal9 from './Modal9';
import Modal10 from './Modal10';
import Modal11 from './Modal11';
import Modal12 from './Modal12';
import Modal13 from './Modal13';
import Modal14 from './Modal14';
import Modal15 from './Modal15';
import Modal16 from './Modal16';
import Modal17 from './Modal17';
import Modal18 from './Modal18';
import Modal19 from './Modal19';
import Modal20 from './Modal20';
import Modal21 from './Modal21';
import Modal22 from './Modal22';
import Modal23 from './Modal23';
import Modal24 from './Modal24';
import Modal25 from './Modal25';
import Modal26 from './Modal26';
import Modal27 from './Modal27';
import Modal28 from './Modal28';
import Modal29 from './Modal29';
import Modal30 from './Modal30';
import Modal31 from './Modal31';
import Modal32 from './Modal32';
import Modal33 from './Modal33';
import Modal34 from './Modal34';
import Modal35 from './Modal35';
import Modal36 from './Modal36';
import Modal37 from './Modal37';
import Modal38 from './Modal38';
import Modal39 from './Modal39';
import Modal40 from './Modal40';
import Modal41 from './Modal41';
import Modal42 from './Modal42';
import Modal43 from './Modal43';
import Modal44 from './Modal44';
import Modal45 from './Modal45';
import Modal46 from './Modal46';
import Modal47 from './Modal47';
import Modal48 from './Modal48';
import Modal49 from './Modal49';
import Modal50 from './Modal50';
import Modal51 from './Modal51';
import Modal52 from './Modal52';
import Modal53 from './Modal53';
import Modal54 from './Modal54';
import Modal55 from './Modal55';
import Modal56 from './Modal56';
import Modal57 from './Modal57';
import Modal58 from './Modal58';
import Modal59 from './Modal59';
import Modal60 from './Modal60';
import Modal61 from './Modal61';
import Modal62 from './Modal62';
import Modal63 from './Modal63';

// Import other modal components as needed

const Modal = ({ year, isOpen, onClose, title, description }) => {
    let ModalComponent = null;

    switch (year) {
          case '0':
            ModalComponent = Modal0;
            break;
        case '3':
            ModalComponent = Modal1;
            break;
        case '6':
            ModalComponent = Modal2;
            break;
        case '9':
            ModalComponent = Modal3;
            break;
        case '10':
            ModalComponent = Modal4;
            break;
  case '13':
    ModalComponent = Modal5;
    break;
  case '14':
    ModalComponent = Modal6;
    break;
  case '17':
    ModalComponent = Modal7;
    break;
  case '18':
    ModalComponent = Modal8;
    break;
  case '19':
    ModalComponent = Modal9;
    break;
  case '20':
    ModalComponent = Modal10;
    break;
  case '22':
    ModalComponent = Modal11;
    break;
  case '23':
    ModalComponent = Modal12;
    break;
  case '24':
    ModalComponent = Modal13;
    break;
  case '25':
    ModalComponent = Modal14;
    break;
  case '30':
    ModalComponent = Modal15;
    break;
  case '31':
    ModalComponent = Modal16;
    break;
  case '32':
    ModalComponent = Modal17;
    break;
  case '33':
    ModalComponent = Modal18;
    break;
  case '34':
    ModalComponent = Modal19;
    break;
  case '36':
    ModalComponent = Modal20;
    break;
  case '37':
    ModalComponent = Modal21;
    break;
  case '38':
    ModalComponent = Modal22;
    break;
  case '39':
    ModalComponent = Modal23;
    break;
  case '40':
    ModalComponent = Modal24;
    break;
  case '41':
    ModalComponent = Modal25;
    break;
  case '44':
    ModalComponent = Modal26;
    break;
  case '47':
    ModalComponent = Modal27;
    break;
  case '49':
    ModalComponent = Modal28;
    break;
  case '53':
    ModalComponent = Modal29;
    break;
  case '55':
    ModalComponent = Modal30;
    break;
  case '58':
    ModalComponent = Modal31;
    break;
  case '59':
    ModalComponent = Modal32;
    break;
  case '60':
    ModalComponent = Modal33;
    break;
  case '63':
    ModalComponent = Modal34;
    break;
  case '66':
    ModalComponent = Modal35;
    break;
  case '67':
    ModalComponent = Modal36;
    break;
  case '68':
    ModalComponent = Modal37;
    break;
  case '69':
    ModalComponent = Modal38;
    break;
  case '70':
    ModalComponent = Modal39;
    break;
  case '73':
    ModalComponent = Modal40;
    break;
  case '74':
    ModalComponent = Modal41;
    break;
  case '77':
    ModalComponent = Modal42;
    break;
  case '80':
    ModalComponent = Modal43;
    break;
  case '81':
    ModalComponent = Modal44;
    break;
  case '82':
    ModalComponent = Modal45;
    break;
  case '83':
    ModalComponent = Modal46;
    break;
  case '85':
    ModalComponent = Modal47;
    break;
  case '91':
    ModalComponent = Modal48;
    break;
  case '93':
    ModalComponent = Modal49;
    break;
  case '95':
    ModalComponent = Modal50;
    break;
  case '96':
    ModalComponent = Modal51;
    break;
  case '97':
    ModalComponent = Modal52;
    break;
  case '100':
    ModalComponent = Modal53;
    break;
  case '101':
    ModalComponent = Modal54;
    break;
  case '102':
    ModalComponent = Modal55;
    break;
  case '104':
    ModalComponent = Modal56;
    break;
  case '105':
    ModalComponent = Modal57;
    break;
  case '107':
    ModalComponent = Modal58;
    break;
  case '109':
    ModalComponent = Modal59;
    break;
  case '112':
    ModalComponent = Modal60;
    break;
  case '113':
    ModalComponent = Modal61;
    break;
  case '114':
    ModalComponent = Modal62;
    break;
  case '115':
    ModalComponent = Modal63;
    break;

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