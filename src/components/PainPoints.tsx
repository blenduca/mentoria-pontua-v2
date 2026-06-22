import React from 'react';
import { BarChart3, Flame, Shuffle, TrendingDown } from 'lucide-react';

export function PainPoints() {
  const symptoms = [
    { icon: BarChart3, text: 'Seu negócio fatura, mas falta clareza real dos números.' },
    { icon: Shuffle, text: 'As decisões são tomadas mais no "feeling" do que em dados.' },
    { icon: Flame, text: 'Cada dia é um novo incêndio para apagar.' },
    { icon: TrendingDown, text: 'A empresa cresce sem estrutura e sem controle.' },
  ];

  return (
    <section className="diagnosis-section" id="diagnostico">
      <div className="section-shell">
        <span className="section-eyebrow">Diagnóstico empresarial</span>
        <h2 className="section-title">
          Você sente que está carregando a empresa nas costas?
        </h2>
        <p className="section-lead">
          O maior erro dos empresários não é a falta de esforço. É a falta de método de gestão.
          Empresas não quebram apenas por falta de vendas. Elas quebram porque crescem sem estrutura
          e sem controle.
        </p>

        <div className="diagnosis-grid">
          <div className="diagnosis-list">
            {symptoms.map((item) => (
              <div className="diagnosis-item" key={item.text}>
                <item.icon aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="diagnosis-panel">

            <h3>Direção clara para transformar operação em lucro previsível.</h3>
            <p>
              A Pontua analisa o momento atual do negócio e aponta qual solução faz mais sentido para
              organizar a gestão, ganhar clareza financeira e apoiar decisões estratégicas com segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
