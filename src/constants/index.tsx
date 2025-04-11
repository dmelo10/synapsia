/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import { MenuItem } from '@/types';

/**
 * Assets
 */
import {
  LaptopMinimal,
  ArrowBigDownDash,
  CreditCard,
  Linkedin,
  Instagram,
  MessageSquare,
  Mail,
  Database,
  LineChart,
  BrainCircuit,
  Facebook,
  Twitter,
} from 'lucide-react';


// Header
export const navMenu: MenuItem[] = [
  {
    href: '/sobre-nos',
    label: 'Sobre Nós',
  },
  {
    href: '/servicos',
    label: 'Serviços',
  },
  {
    href: '/clientes',
    label: 'Clientes',
  },
  {
    href: '/contato',
    label: 'Contato',
  },
];

// Brand
export const brandData = {
  sectionText: 'Acelerando o crescimento com Inteligência Artificial estratégica.',
};

// Hero
export const heroData = {
  sectionSubtitle: 'FounderPilot AI',
  sectionTitle: 'Seu Copiloto de IA para Decisões',
  decoTitle: 'Estratégicas',
  sectionText:
    'A inteligência que transforma dados em ação para fundadores que jogam para vencer.',
};

// Feature (Como funciona)
export const featureData = {
  sectionSubtitle: 'Como funciona',
  sectionTitle: 'Sua IA integrada ao dia a dia da gestão',
  sectionText:
    'FounderPilot AI conecta seus dados financeiros, operacionais e de agenda para antecipar riscos, sugerir melhorias e impulsionar seu crescimento.',
  list: [
    {
      icon: <Database size={32} />,
      title: 'Conecte suas contas',
      text: 'Open Finance, Google Calendar, Notion, CRM e muito mais.',
    },
    {
      icon: <LineChart size={32} />,
      title: 'Receba insights práticos',
      text: 'Riscos, oportunidades, benchmarking e direção clara.',
    },
    {
      icon: <BrainCircuit size={32} />,
      title: 'Decida com inteligência',
      text: 'Clareza financeira, estratégia operacional e visão de mercado em um só lugar.',
    },
  ],
};

// Process (Para quem é)
export const processData = {
  sectionSubtitle: 'Para quem é',
  sectionTitle: 'Desenvolvido para fundadores',
  sectionText:
    'Se você é founder, CEO ou gestor de startup, o FounderPilot foi feito para você. Ele pensa junto, antecipa o que importa e reduz a chance de erro com dados acionáveis e filosofia aplicada (Nietzsche, Sêneca, Aristóteles e Frankl como mentores invisíveis).',
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: 'Founders & CEOs',
      text: 'Fundadores que lidam com o caos da operação e a pressão da estratégia.',
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: 'Gestores de Startups',
      text: 'Líderes que precisam tomar decisões rápidas com base em dados completos.',
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Empreendedores',
      text: 'Empreendedores que buscam clareza em meio ao caos de informações.',
    },
  ],
};

// Overview (Por que a Synapsia criou isso)
export const overviewData = {
  sectionSubtitle: 'Por que criamos',
  sectionTitle: 'Startups não quebram por falta de talento',
  sectionText:
    'A maioria dos empreendedores toma decisões no escuro. Dados espalhados, contexto ausente, pouco tempo para analisar. Criamos o FounderPilot AI porque vivemos isso na pele. Agora, fundadores terão uma IA que pensa junto — e joga no mesmo time.',
  listTitle: 'Clareza, contexto e inteligência prática.',
  list: [
    {
      title: 'Projeção',
      text: 'automática de fluxo de caixa',
    },
    {
      title: 'Alertas',
      text: 'de riscos e oportunidades',
    },
    {
      title: 'Benchmarking',
      text: 'com startups do mesmo setor',
    },
  ],
};

// Review (Benefícios)
export const reviewData = {
  sectionSubtitle: 'Benefícios',
  sectionTitle: 'Clareza, contexto e inteligência prática',
  reviewCard: [
    {
      title: 'Projeção automática de fluxo de caixa',
      text: 'Visualize o futuro financeiro da sua empresa com base em dados reais e tendências de mercado.',
      reviewAuthor: 'Finanças',
      date: 'Proativo',
    },
    {
      title: 'Alertas de riscos e oportunidades',
      text: 'Receba notificações sobre potenciais problemas e chances de crescimento antes que aconteçam.',
      reviewAuthor: 'Estratégia',
      date: 'Inteligente',
    },
    {
      title: 'Sugestões para redução de custos',
      text: 'Identifique áreas para otimização de recursos e aumento de eficiência operacional.',
      reviewAuthor: 'Eficiência',
      date: 'Essencial',
    },
  ],
};

// Cta (Early Access)
export const ctaData = {
  sectionTitle: 'Seja um dos primeiros a testar o FounderPilot AI',
  sectionText: 'As primeiras 100 startups ganham acesso antecipado gratuito com suporte especial. Participe, teste e ajude a moldar o futuro da gestão com IA.',
  buttons: [
    {
      label: 'Quero acesso antecipado',
      href: '#',
      icon: <MessageSquare size={20} />,
      variant: 'default'
    }
  ]
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Synapsia',
      items: [
        {
          href: '#',
          label: 'Sobre Nós',
        },
        {
          href: '#',
          label: 'Blog',
        },
        {
          href: '#',
          label: 'Contato',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          href: '#',
          label: 'Termos de uso',
        },
        {
          href: '#',
          label: 'Política de privacidade',
        },
      ],
    },
  ],
  copyright: '© 2024 Synapsia',
  socialLinks: [
    {
      href: '#',
      icon: <Facebook size={18} />,
    },
    {
      href: '#',
      icon: <Twitter size={18} />,
    },
    {
      href: '#',
      icon: <Instagram size={18} />,
    },
    {
      href: '#',
      icon: <Linkedin size={18} />,
    },
  ],
};

