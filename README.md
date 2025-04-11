# FounderPilot AI

Site institucional do FounderPilot AI, um assistente estratégico de IA para fundadores de startups.

## 📋 Sobre o Projeto

FounderPilot AI é uma plataforma de inteligência artificial estratégica desenvolvida para ajudar fundadores de startups a tomar decisões baseadas em dados. O site apresenta as funcionalidades, benefícios e o processo de inscrição na lista de espera para acesso antecipado.

### Tecnologias Utilizadas

- ⚛️ React 18
- 🔷 TypeScript
- ⚡ Vite
- 🎨 TailwindCSS
- 🔧 ShadcnUI
- 🎭 Framer Motion
- 📱 Design responsivo

## 🚀 Como Executar o Projeto

Siga estas instruções para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o projeto
Abra seu navegador e acesse: `http://localhost:5173/`

### Compilar para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
# ou
yarn preview
```

## 🌐 Deploy na Vercel

Este projeto está configurado para ser facilmente deployado na Vercel. Siga estas instruções:

### Opção 1: Deploy Direto da Interface

1. Crie uma conta ou faça login na [Vercel](https://vercel.com)
2. Clique em "New Project" ou "Import Project"
3. Conecte sua conta GitHub, GitLab ou Bitbucket e selecione o repositório
4. O framework React + Vite será detectado automaticamente
5. Configure as seguintes opções:
   - Build Command: `npm run build` ou `yarn build`
   - Output Directory: `dist`
   - Install Command: `npm install` ou `yarn install`
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

1. Instale a Vercel CLI globalmente
```bash
npm install -g vercel
# ou
yarn global add vercel
```

2. Faça login na sua conta Vercel
```bash
vercel login
```

3. No diretório do projeto, execute o comando para deploy
```bash
vercel
```

4. Siga as instruções do terminal para configurar o projeto

### Configurações Recomendadas

Para um melhor desempenho no deploy, considere adicionar um arquivo `vercel.json` na raiz do projeto:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Isso garante que as rotas funcionem corretamente para aplicações de página única (SPA).

## 📁 Estrutura do Projeto

```
founderpilot-website/
├── public/           # Arquivos públicos
├── src/              # Código fonte
│   ├── assets/       # Imagens e recursos estáticos
│   ├── components/   # Componentes React
│   │   ├── ui/       # Componentes de UI (shadcn)
│   ├── constants/    # Constantes e textos
│   ├── lib/          # Utilitários e funções auxiliares
│   └── types/        # Definições de tipos TypeScript
├── .gitignore        # Arquivos ignorados pelo Git
├── index.html        # Arquivo HTML principal
├── package.json      # Dependências e scripts
├── tailwind.config.js # Configuração do Tailwind
├── vercel.json       # Configuração da Vercel (opcional)
└── vite.config.ts    # Configuração do Vite
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença Apache 2.0. Veja `LICENSE` para mais informações.
