import bioImg from 'figma:asset/3d6374ff5ce70719d89e6ec488cfb9f575e347cf.png';
import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Bio() {
  return (
    <section className="bio-section">
      <div className="section-shell">
        <div className="bio-grid">
          <div className="bio-image">
            <ImageWithFallback src={bioImg} alt="Niceia Fronza em ambiente profissional" />
          </div>

          <div>
            <span className="section-eyebrow">Quem conduz o seu direcionamento?</span>
            <h2 className="section-title">Niceia Fronza</h2>
            <p className="section-lead">Fundadora da Pontua Consultoria Empresarial.</p>

            <ul className="bio-list">
              <li>Graduada em Administração de Empresas.</li>
              <li>Pós-graduada em Administração Financeira.</li>
              <li>20 anos de experiência prática em gestão empresarial.</li>
              <li>
                Consultora Empresarial há mais de 5 anos, tendo ajudado dezenas de empresas a
                organizarem processos, estruturarem a gestão e crescerem com consistência.
              </li>
            </ul>

            <blockquote className="bio-quote">
              "Niceia não ensina teoria. Ela entrega o que funciona na prática, dentro da exata
              realidade do empresário brasileiro."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
