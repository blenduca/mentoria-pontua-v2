import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  'Empresas mais organizadas, lucrativas e previsíveis.',
  'Clareza sobre estrutura, números, riscos e oportunidades.',
  'Planos claros e executáveis para os próximos passos.',
];

export function Testimonials() {
  return (
    <section className="direction-section" aria-label="Resultados esperados">
      <div className="section-shell">
        <span className="section-eyebrow">Resultado esperado</span>
        <h2 className="section-title">
          Uma gestão mais clara para decidir com segurança.
        </h2>
        <p className="section-lead">
          A Pontua traduz análise empresarial, finanças e planejamento em ferramentas práticas para
          reduzir improvisos e aumentar previsibilidade.
        </p>

        <div className="direction-grid">
          {outcomes.map((outcome) => (
            <article className="direction-card" key={outcome}>
              <CheckCircle2 aria-hidden="true" />
              <h3>{outcome}</h3>
              <p>
                Direcionamento técnico, aplicável e alinhado à realidade de micro, pequenas e médias empresas.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
