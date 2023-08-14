import React from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, year, title, description }) => {
  // Genera la ruta dinámica basada en el año seleccionado
  const dataRoutes = {
    2017: 'datos2017',
    2018: 'datos2018',
    2019: 'datos2019',
    2020: 'datos2020',
    2021: 'datos2021'
  };

  const dataRoute = dataRoutes[year]; // Obtenemos la ruta correspondiente al año seleccionado

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-middle bg-white rounded-lg px-4 py-6 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
            {year}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="mt-2 text-sm text-gray-900">{description}</p>
          </div>

          <div className="mt-4 flex justify-center">
            {/* Use el enlace dinámico generado */}
            <Link to={dataRoute}>
              <Button>
                Mas info
              </Button>
            </Link>
            <Button className="ml-2" color="red" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
