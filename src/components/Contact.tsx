import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-6 bg-gradient-to-br from-white via-[#F0FBFF] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-6">
            Vamos <span className="text-[#00BCD4]">conversar?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00BCD4] to-[#0099CC] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Entre em contato conosco através do WhatsApp ou e-mail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/5511953695307"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-3">WhatsApp</h3>
                <p className="text-gray-600 text-lg">
                  Fale diretamente conosco pelo WhatsApp
                </p>
              </div>
              <span className="text-[#00BCD4] font-semibold group-hover:underline">
                Enviar mensagem
              </span>
            </div>
          </a>

          <a
            href="mailto:aurenxweb@gmail.com"
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00BCD4] to-[#0099CC] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mail size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-3">E-mail</h3>
                <p className="text-gray-600 text-lg">
                  Envie um e-mail e responderemos em breve
                </p>
              </div>
              <span className="text-[#00BCD4] font-semibold group-hover:underline">
                Enviar e-mail
              </span>
            </div>
          </a>

          <a
            href="https://instagram.com/aurenxweb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E1306C] to-[#C13584] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Instagram size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Instagram</h3>
                <p className="text-gray-600 text-lg">
                  Siga-nos e envie uma mensagem no direct
                </p>
              </div>
              <span className="text-[#00BCD4] font-semibold group-hover:underline">
                Acessar perfil
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <p className="text-gray-400 text-center">
            © 2025 AurenX Web — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
