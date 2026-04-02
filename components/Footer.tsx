import React from 'react';

// Ícone do Gmail
const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
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
              <GmailIcon />
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
