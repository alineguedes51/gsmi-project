import React from 'react';

// Ícone de Envelope (E-mail) para substituir o do Instagram
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-earthy-brown text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="mb-4">
            <p className="font-semibold text-lg">Entre em contato conosco!</p>
            {/* Texto atualizado com o seu novo e-mail */}
            <p className="text-md opacity-90">gsmigarassu@gmail.com</p> 
            <div className="flex justify-center gap-6 mt-3">
                {/* O LINK FOI ALTERADO AQUI: De https para mailto */}
                <a href="mailto:gsmigarassu@gmail.com" aria-label="E-mail" className="hover:opacity-75 transition-opacity">
                  <EmailIcon />
                </a>
            </div>
        </div>
        <div className="border-t border-white/20 pt-4 mt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Projeto de Gestão Ambiental. Todos os direitos reservados.
            </p>
            <p className="text-xs mt-2 opacity-75">
              Desenvolvido para a comunidade de Igarassu.
            </p>
        </div>
      </div>
    </footer>
  );
};
