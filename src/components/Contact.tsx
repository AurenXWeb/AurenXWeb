import { Send, Instagram, Linkedin } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormData({ nome: '', email: '', mensagem: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 px-6 bg-gradient-to-br from-white via-[#F0FBFF] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
            Vamos <span className="text-[#00CFFF]">conversar?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00CFFF] to-[#0099CC] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Preencha o formulário ou envie uma mensagem direta pelo Instagram.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-[#1C1C1E] mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF]/20 outline-none transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#1C1C1E] mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF]/20 outline-none transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-semibold text-[#1C1C1E] mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF]/20 outline-none transition-all resize-none"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>

            {submitMessage && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00CFFF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00B8E6] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  Enviar mensagem
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00CFFF] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00CFFF] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2025 AurenX Web — Todos os direitos reservados
          </p>
          <p className="text-[#00CFFF] mt-2 font-medium">
            Transforme sua presença digital com a AurenX Web.
          </p>
        </div>
      </div>
    </footer>
  );
}
