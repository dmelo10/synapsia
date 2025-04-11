"use client";

import { Pricing } from "@/components/ui/pricing";
import { motion } from "framer-motion";
import * as variants from '@/lib/motionVariants';

const founderPilotPlans = [
  {
    name: "STARTER",
    price: "20",
    yearlyPrice: "16",
    period: "per month",
    features: [
      "Conectar 1 conta bancária",
      "Insights básicos de finanças",
      "Projeção de fluxo de caixa (1 mês)",
      "Suporte por e-mail",
      "Acesso a atualizações futuras",
    ],
    description: "Para empreendedores iniciando sua jornada",
    buttonText: "Quero acesso antecipado",
    href: "#",
    isPopular: false,
  },
  {
    name: "PROFISSIONAL",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Conectar até 3 contas bancárias",
      "Analytics avançado",
      "Projeção de fluxo de caixa (6 meses)",
      "Insights diários personalizados",
      "Alertas de riscos e oportunidades",
      "Benchmarking com o mercado",
      "Suporte prioritário",
    ],
    description: "Ideal para startups em crescimento",
    buttonText: "Quero acesso antecipado",
    href: "#",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "100",
    yearlyPrice: "80",
    period: "per month",
    features: [
      "Conectar contas ilimitadas",
      "Analytics completo com IA",
      "Projeção de fluxo de caixa (12 meses)",
      "Recomendações estratégicas avançadas",
      "Integração completa com ferramentas",
      "Insights filosóficos personalizados",
      "Suporte dedicado 24/7",
      "Acesso antecipado a novos recursos",
    ],
    description: "Para empresas que buscam excelência em gestão",
    buttonText: "Falar com vendas",
    href: "/contact",
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section bg-background/30" id="pricing">
      <div className="container">
        <div className="section-head">
          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Planos
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-title"
          >
            Preços transparentes para seu crescimento
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-text max-w-screen-lg mx-auto"
          >
            Escolha o plano que melhor se adapta às necessidades da sua startup. Todos os planos incluem acesso à nossa plataforma, ferramentas de análise e suporte dedicado.
          </motion.p>
        </div>

        <motion.div
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
        >
          <Pricing 
            plans={founderPilotPlans}
            title=""
            description=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 