import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export function Modal({ isOpen, onClose, children }) {
 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Conteúdo */}
      <div className="relative bg-gray-100 dark:bg-[#1a1a1a] text-white rounded-xl p-8 max-w-lg md:max-w-xl w-full shadow-lg 
      animate-fadeIn">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-white text-lg"
        >
          <IoClose className="text-black dark:text-white 2xl" />
        </button>

        {children}
      </div>
    </div>
  );
}