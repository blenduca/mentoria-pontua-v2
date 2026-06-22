import React, { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';

type FAQProps = {
  onOpenModal: () => void;
};

const faqs = [
  {
    q: 'Qual solução faz mais sentido para o meu negócio?',
    a: 'A reunião estratégica gratuita existe justamente para analisar o cenário atual da empresa e apontar o melhor direcionamento entre consultoria, mentoria, plano de negócio ou valuation.',
  },
  {
    q: 'A Pontua trabalha apenas com empresas novas?',
    a: 'Não. As soluções atendem tanto negócios em operação quanto projetos em abertura, reestruturação, expansão, reorganização societária ou validação financeira.',
  },
  {
    q: 'O trabalho é teórico ou aplicado?',
    a: 'A abordagem é prática, aplicada e orientada a resultados. O objetivo é transformar diagnóstico, números e planejamento em decisões e ações executáveis.',
  },
  {
    q: 'A consultoria pode ser online ou presencial?',
    a: 'Sim. A consultoria prevê encontros periódicos online ou presenciais, com acompanhamento e ajustes contínuos conforme os resultados apresentados.',
  },
];

export function FAQ({ onOpenModal }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="reuniao">
      <div className="section-shell">
        <span className="section-eyebrow">Próximo passo</span>
        <h2 className="section-title">
          Ainda em dúvida sobre qual o melhor caminho para o seu momento?
        </h2>

        <div className="faq-grid">
          <div className="faq-note">
            <p>
              Agende uma Reunião Estratégica Gratuita diretamente com a equipe da Pontua. Vamos
              analisar o cenário atual do seu negócio e apontar qual solução faz mais sentido para
              o seu próximo passo de crescimento.
            </p>
            <button className="cta-primary" onClick={onOpenModal}>
              Sessão estratégica gratuita
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className="faq-item" key={faq.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.q}</span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {openIndex === index && <div className="faq-answer">{faq.a}</div>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
