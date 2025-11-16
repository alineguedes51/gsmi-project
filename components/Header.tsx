// components/Header.tsx

import React from 'react';
import logoImage from './logo.png'; 

export const Header: React.FC = () => {
    return (
        <header className="bg-[#f1f1d1] shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3">
                <a href="/" className="flex flex-col md:flex-row items-center justify-center no-underline" aria-label="Página Inicial">
                    <img
                        src={logoImage}
                        alt="Logo Gestão Sustentável Manguezais de Igarassu"
                        // ALTERAÇÃO AQUI: Mudei de h-14 para h-20
                        className="h-20 w-auto mb-2 md:mb-0 md:mr-4"
                    />
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-earthy-brown text-center md:text-left">
                        Gestão Sustentável dos Manguezais de Igarassu
                    </h1>
                </a>
            </div>
        </header>
    );
};
