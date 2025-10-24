# AurenX Web

Site institucional da AurenX Web - Agência de desenvolvimento web moderno.

## Sobre o Projeto

Site desenvolvido com foco em design moderno, responsividade e performance. Apresenta os serviços da agência, portfólio e canais de contato.

## Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones
- **Supabase** - Backend as a Service

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx      # Navegação principal
│   ├── Hero.tsx        # Seção inicial
│   ├── Services.tsx    # Serviços oferecidos
│   ├── About.tsx       # Sobre a agência
│   └── Contact.tsx     # Contatos e footer
├── App.tsx             # Componente principal
├── main.tsx           # Entry point
└── index.css          # Estilos globais
```

## Funcionalidades

- Design responsivo (mobile-first)
- Navegação suave entre seções
- Menu mobile interativo
- Animações e transições fluidas
- Integração com redes sociais
- Links para WhatsApp, E-mail, Instagram e GitHub

## Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint

# Verificação de tipos
npm run typecheck
```

## Deploy

O projeto está configurado para deploy na Vercel através do arquivo `vercel.json`.

### Passos para Deploy:

1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório do GitHub
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático

### Domínio Personalizado

Após o deploy, configure o domínio `aurenxweb.com.br` nas configurações do projeto na Vercel.

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

## Contato

- **WhatsApp**: [+55 11 95369-5307](https://wa.me/5511953695307)
- **E-mail**: aurenxweb@gmail.com
- **Instagram**: [@aurenxweb](https://instagram.com/aurenxweb)
- **GitHub**: [AurenXWeb](https://github.com/AurenXWeb)

## Licença

© 2025 AurenX Web - Todos os direitos reservados
