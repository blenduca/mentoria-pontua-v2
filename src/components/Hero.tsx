import logoPontua from 'figma:asset/a3ca0cf13218008a3e0f32593288f869856ef8de.png';
import heroDesktop from '../assets/hero-desktop.png';
import heroMobile from '../assets/hero-mobile.png';
import React from 'react';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  onOpenModal: () => void;
};

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="hero-premium" id="topo">
      <div className="hero-content">
        <img src={logoPontua} alt="Pontua Consultoria Empresarial" className="hero-logo" />

        <span className="hero-kicker">Soluções estratégicas para empresas</span>

        <h1>
          Seu negócio não cresce com mais esforço.
          <span> Ele cresce com decisões mais assertivas.</span>
        </h1>

        <p className="hero-subtitle">
          Para transformar o caos operacional em lucro previsível, a Pontua Consultoria Empresarial
          desenvolveu soluções estratégicas moldadas para a realidade de micro, pequenas e médias empresas.
        </p>

        <p className="hero-description">
          Encontre o direcionamento ideal para o momento atual do seu negócio: consultoria, mentoria,
          plano de negócio ou valuation.
        </p>

        <div className="hero-actions">
          <button className="cta-primary" onClick={onOpenModal}>
            AGENDAR SESSÃO ESTRATÉGICA
            <ArrowRight size={18} />
          </button>
          <a className="cta-secondary" href="#solucoes">
            Conhecer soluções
          </a>
        </div>

        <div className="hero-proof" aria-label="Credenciais da Pontua">
          <span>20 anos de experiência prática</span>
          <span>Finanças e gestão empresarial</span>
        </div>
      </div>

      <div className="hero-image" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="" />
        </picture>
      </div>
    </section>
  );
}
