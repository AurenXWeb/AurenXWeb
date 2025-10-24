import { Code2, Zap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
            Sobre a <span className="text-[#00CFFF]">AurenX Web</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00CFFF] to-[#0099CC] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            AurenX Web é uma desenvolvedora focada em criar sites e soluções
            digitais de alta performance. Nosso propósito é unir design,
            tecnologia e estratégia para conectar marcas ao futuro digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F0FBFF] to-white border border-[#00CFFF]/10 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#0099CC] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Code2 size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
              Tecnologia
            </h3>
            <p className="text-gray-600">
              Utilizamos as mais modernas ferramentas e frameworks do mercado
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F0FBFF] to-white border border-[#00CFFF]/10 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#0099CC] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
              Performance
            </h3>
            <p className="text-gray-600">
              Sites rápidos, otimizados e com excelente experiência do usuário
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F0FBFF] to-white border border-[#00CFFF]/10 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#0099CC] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
              Estratégia
            </h3>
            <p className="text-gray-600">
              Soluções alinhadas aos objetivos e necessidades do seu negócio
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-[#00CFFF] italic">
            Feito por quem vive tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}
