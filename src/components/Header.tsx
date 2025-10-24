import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/ChatGPT_Image_24_de_out._de_2025__13_42_12-removebg-preview copy copy.png"
              alt="AurenX Web"
              className="h-10 md:h-12 w-auto"
              style={{
                filter: 'contrast(1.15) saturate(1.3) brightness(1.05)',
                imageRendering: 'crisp-edges'
              }}
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#00CFFF] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#00B8E6] transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Fale conosco
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1C1C1E]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#1C1C1E] hover:text-[#00CFFF] transition-colors font-medium text-left"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#00CFFF] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#00B8E6] transition-all shadow-md w-full"
            >
              Fale conosco
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
