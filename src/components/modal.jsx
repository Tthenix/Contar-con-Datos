import React from 'react';
import { Dialog } from '@headlessui/react';

const Modal = ({ isOpen, onClose, year, title, description }) => {
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

          <div className="mt-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
