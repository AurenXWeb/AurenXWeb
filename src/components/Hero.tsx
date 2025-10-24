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
      className="pt-32 pb-20 px-6 bg-gradient-to-br from-white via-[#F0FBFF] to-white overflow-hidden relative"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00CFFF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00CFFF]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00CFFF]/20 shadow-sm">
              <Sparkles size={16} className="text-[#00CFFF]" />
              <span className="text-sm font-medium text-[#1C1C1E]">
                Desenvolvimento web moderno
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#1C1C1E] leading-tight">
              Transformamos ideias em{' '}
              <span className="text-[#00CFFF]">experiências digitais</span>.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Desenvolvimento web moderno, rápido e inteligente.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-[#00CFFF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00B8E6] transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              Solicitar orçamento
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00CFFF]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-[#00CFFF]/20 shadow-xl">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#00CFFF] to-[#0099CC] h-3 w-20 rounded-full"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00CFFF] to-[#0099CC] rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 rounded w-full"></div>
                    <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="w-8 h-8 bg-[#00CFFF]/20 rounded-lg mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-16"></div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="w-8 h-8 bg-[#00CFFF]/20 rounded-lg mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
