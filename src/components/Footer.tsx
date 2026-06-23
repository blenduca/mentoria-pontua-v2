import React from 'react';
import { ArrowRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

type FooterProps = {
  onOpenModal: () => void;
};

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <>
      <section className="final-cta-section" id="contato">
        <div className="section-shell final-cta-inner">
          <div>
            <h2>
              Transforme clareza em decisão.
              <br />
              <span>E decisão em crescimento.</span>
            </h2>
            <p>
              A Pontua combina análise empresarial, gestão financeira e planejamento estratégico para
              ajudar você a assumir o controle do próximo passo do negócio.
            </p>
          </div>

          <button className="cta-primary" onClick={onOpenModal}>
            AGENDAR SESSÃO ESTRATÉGICA
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <footer className="footer-premium">
        <div className="footer-inner">
          <div className="footer-brand">
            <h4>Niceia Fronza</h4>
            <p>Pontua Consultoria Empresarial</p>
          </div>

          <div className="footer-links">
            <a href="tel:+5549988173962" aria-label="Telefone da Pontua">
              <Phone size={18} />
            </a>
            <a href="https://www.instagram.com/niceiafronza/" aria-label="Instagram da Niceia Fronza">
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/niceia-camila-nantes-fronza-29678b47/"
              aria-label="LinkedIn da Niceia Fronza"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:niceia.fronza@gmail.com" aria-label="E-mail da Pontua">
              <Mail size={18} />
            </a>
          </div>

          <p className="footer-copy">&copy; {new Date().getFullYear()} Niceia Fronza. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
