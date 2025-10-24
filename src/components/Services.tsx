import { Monitor, FileText, Settings, Boxes } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Desenvolvimento de Sites Responsivos',
    description:
      'Sites modernos que se adaptam perfeitamente a qualquer dispositivo, garantindo a melhor experiência para seus usuários.',
  },
  {
    icon: FileText,
    title: 'Landing Pages e Portfólios',
    description:
      'Páginas otimizadas para conversão e portfólios profissionais que destacam sua marca no mercado digital.',
  },
  {
    icon: Settings,
    title: 'Manutenção e Otimização Web',
    description:
      'Mantenha seu site sempre atualizado, rápido e seguro com nosso serviço especializado de manutenção.',
  },
  {
    icon: Boxes,
    title: 'Integrações e Automação Digital',
    description:
      'Conecte sistemas, automatize processos e integre ferramentas para aumentar a eficiência do seu negócio.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
            Nossos <span className="text-[#00CFFF]">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00CFFF] to-[#0099CC] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#0099CC] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C1C1E] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
