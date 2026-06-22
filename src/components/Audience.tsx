import React from 'react';
import { Building2, LineChart, Map } from 'lucide-react';

export function Audience() {
  const directions = [
    {
      icon: Building2,
      title: 'Para empresas em operação',
      text: 'Empresários que sentem que a empresa fatura, mas não gera o lucro esperado, crescem sem estrutura ou precisam assumir o controle estratégico.',
    },
    {
      icon: Map,
      title: 'Para novos projetos ou reorganizações',
      text: 'Empreendedores que querem tirar uma ideia do papel com segurança ou reorganizar o negócio com base em dados, viabilidade e direção clara.',
    },
    {
      icon: LineChart,
      title: 'Para decisões de alto impacto',
      text: 'Empresários que buscam vender, negociar, reorganizar sociedade ou entender quais alavancas podem valorizar a empresa no futuro.',
    },
  ];

  return (
    <section className="direction-section">
      <div className="section-shell">
        <span className="section-eyebrow">Direcionamento</span>
        <h2 className="section-title">
          A escolha certa depende do momento real da sua empresa.
        </h2>
        <p className="section-lead">
          A reunião estratégica gratuita existe para analisar o cenário atual do negócio e apontar qual
          solução faz mais sentido para o próximo passo de crescimento.
        </p>

        <div className="direction-grid">
          {directions.map((item) => (
            <article className="direction-card" key={item.title}>
              <item.icon aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
