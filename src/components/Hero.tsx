import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-br from-white via-[#F0FBFF] to-white overflow-hidden relative min-h-[calc(100vh-80px)]"
    >
      {/* blobs decorativos */}
      <div className="absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-[#00BCD4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#00BCD4]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Bloco de texto */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-[#00BCD4]/20 shadow-sm">
              <Sparkles size={14} className="text-[#00BCD4] md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium text-[#2D3748]">
                Desenvolvimento web moderno
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight">
              Transformamos ideias em{' '}
              <span className="text-[#00BCD4]">experiências digitais</span>.
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Desenvolvimento web moderno, rápido e inteligente.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-[#00BCD4] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#00B8E6] transition-all shadow-lg hover:shadow-xl hover:scale-105 group text-sm md:text-base"
            >
              Solicitar orçamento
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5"
              />
            </button>
          </div>

          {/* Ilustração – agora visível no mobile também */}
          <div className="relative flex justify-center md:block mt-8 md:mt-0">
            {/* brilho de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00BCD4]/20 to-transparent rounded-3xl blur-2xl" />

            {/* cartão/ilustração */}
            <div className="relative bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-[#00BCD4]/20 shadow-xl w-full max-w-sm sm:max-w-md md:max-w-none">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#00BCD4] to-[#0099CC] h-3 w-20 rounded-full" />
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00BCD4] to-[#0099CC] rounded-lg" />
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-24 mb-2" />
                      <div className="h-2 bg-gray-100 rounded w-32" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 rounded w-full" />
                    <div className="h-2 bg-gray-100 rounded w-4/5" />
                    <div className="h-2 bg-gray-100 rounded w-3/4" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="w-8 h-8 bg-[#00BCD4]/20 rounded-lg mb-2" />
                    <div className="h-2 bg-gray-100 rounded w-16" />
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="w-8 h-8 bg-[#00BCD4]/20 rounded-lg mb-2" />
                    <div className="h-2 bg-gray-100 rounded w-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fim da ilustração */}
        </div>
      </div>
    </section>
  );
}
