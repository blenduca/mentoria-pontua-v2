import React from 'react';
import { ArrowRight } from 'lucide-react';

type SolutionProps = {
  onOpenModal: () => void;
};

const mentorLink = 'https://chk.eduzz.com/KW8KDX5O01';

const cards = [
  {
    number: '01',
    title: 'Consultoria Empresarial',
    text: 'Atuação direta ao lado de micro e pequenas empresas que precisam organizar a gestão, ganhar clareza financeira e tomar decisões estratégicas com segurança.',
    cta: 'Quero falar com um especialista',
    href: '#consultoria',
  },
  {
    number: '02',
    title: 'Mentoria Gestão Empresarial em Grupo',
    text: 'Programa estruturado, prático e acessível que une método aplicado, acompanhamento e troca de experiências entre empresários.',
    cta: 'Garantir minha vaga',
    href: '#mentoria',
  },
  {
    number: '03',
    title: 'Plano de Negócio',
    text: 'Projeto para estruturar, validar ou reorganizar uma empresa com base em dados, viabilidade financeira e direção clara.',
    cta: 'Estruturar meu plano',
    href: '#plano',
  },
  {
    number: '04',
    title: 'Valuation',
    text: 'Determinação técnica do valor econômico real da empresa, considerando números, ativos, riscos e capacidade de geração de caixa futura.',
    cta: 'Descobrir meu valuation',
    href: '#valuation',
  },
];

const serviceDetails = [
  {
    id: 'consultoria',
    label: 'Solução 01',
    title: 'Consultoria Empresarial',
    summary:
      'Trabalho prático, aplicado e totalmente orientado a resultados, sem teorias genéricas ou soluções engessadas.',
    blocks: [
      {
        title: 'Principais frentes',
        items: [
          'Diagnóstico empresarial completo: financeiro, processos, posicionamento e gestão.',
          'Gestão econômico-financeira: fluxo de caixa, capital de giro, indicadores, formação de preço, margem e lucratividade.',
          'Planejamento estratégico e tático com metas, prioridades, plano de ação e acompanhamento.',
          'Organização de processos e rotinas para reduzir improvisos, retrabalho e dependência excessiva do dono.',
        ],
      },
      {
        title: 'Como funciona',
        items: [
          'Contratos mensais de 6 ou 12 meses.',
          'Encontros periódicos online ou presenciais.',
          'Entregáveis práticos: planilhas, indicadores, planos de ação e relatórios estratégicos.',
          'Acompanhamento e ajustes contínuos conforme os resultados apresentados.',
        ],
      },
    ],
    result:
      'Resultado esperado: empresas mais organizadas, lucrativas e previsíveis, com decisões baseadas em dados e um empresário muito mais seguro e confiante.',
  },
  {
    id: 'mentoria',
    label: 'Solução 02',
    title: 'Mentoria Gestão Empresarial em Grupo',
    summary:
      'Aqui você não assiste a aulas genéricas: você trabalha no seu próprio negócio, com orientação estratégica.',
    blocks: [
      {
        title: 'O que trabalhamos',
        items: [
          'Diagnóstico empresarial guiado para uma leitura clara da situação atual do negócio.',
          'Gestão financeira na prática: fluxo de caixa, capital de giro, precificação, margem e indicadores essenciais.',
          'Planejamento, metas, prioridades e plano de ação executável.',
          'Discussão de casos reais dos participantes com orientação da mentora.',
        ],
      },
      {
        title: 'Como funciona',
        items: [
          'Encontros semanais e 100% online, ao vivo.',
          'Programa com duração definida.',
          'Conteúdo aplicável combinado com ferramentas práticas.',
          'Espaço aberto para dúvidas, direcionamento e networking qualificado.',
        ],
      },
    ],
    result:
      'Resultado esperado: clareza financeira, gestão previsível, decisões menos intuitivas e um plano claro para os próximos passos da empresa.',
  },
  {
    id: 'plano',
    label: 'Solução 03',
    title: 'Plano de Negócio',
    summary:
      'Um mapa sólido, organizado e economicamente viável para estruturar, validar ou reorganizar uma empresa.',
    blocks: [
      {
        title: 'Quando é indicado',
        items: [
          'Abertura de uma nova empresa.',
          'Reestruturação ou reposicionamento de mercado.',
          'Expansão, mudança de formato ou novos investimentos estruturais.',
          'Validação financeira do modelo de negócio.',
        ],
      },
      {
        title: 'O que a Pontua entrega',
        items: [
          'Análise do modelo de negócio, produtos, público-alvo e proposta de valor.',
          'Planejamento estratégico, objetivos, posicionamento e direcionamento mercadológico.',
          'Estudo financeiro completo com custos, precificação, ponto de equilíbrio e projeções.',
          'Análise de viabilidade, riscos, retorno sobre investimento e sustentabilidade.',
        ],
      },
    ],
    result:
      'Resultado esperado: clareza absoluta sobre estrutura e números, segurança técnica para investir ou ajustar e um mapa estratégico para crescer com sustentabilidade.',
  },
  {
    id: 'valuation',
    label: 'Solução 04',
    title: 'Valuation',
    summary:
      'Determinação do valor econômico real de uma empresa, eliminando percepções emocionais ou valores superficiais de mercado.',
    blocks: [
      {
        title: 'Quando é indicado',
        items: [
          'Venda total ou parcial da empresa.',
          'Entrada ou saída de sócios.',
          'Negociações com investidores.',
          'Reorganização societária, planejamento sucessório ou decisões críticas de expansão ou venda.',
        ],
      },
      {
        title: 'O que a Pontua entrega',
        items: [
          'Diagnóstico financeiro e operacional minucioso.',
          'Análise de faturamento, custos, margens, lucratividade e ativos.',
          'Mapeamento de riscos, dependências operacionais e oportunidades latentes.',
          'Relatório explicativo, profissional e objetivo, pronto para compradores ou investidores.',
        ],
      },
    ],
    result:
      'Resultado esperado: domínio técnico sobre o valor real do patrimônio empresarial e uma base sólida para decisões estratégicas de grande porte.',
  },
];

export function Solution({ onOpenModal }: SolutionProps) {
  return (
    <>
      <section className="solutions-section" id="solucoes">
        <div className="section-shell">
          <span className="section-eyebrow">Conheça nossas soluções estratégicas</span>
          <h2 className="section-title">
            Encontre o direcionamento ideal para o momento atual do seu negócio.
          </h2>
          <p className="section-lead">
            Cada solução foi desenhada para dar clareza, método e segurança técnica a decisões que
            impactam diretamente o crescimento e a lucratividade da empresa.
          </p>

          <div className="solutions-grid">
            {cards.map((card) => (
              <article className="solution-card" key={card.title}>
                <div>
                  <div className="solution-card-number">{card.number}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <a href={card.href}>
                  {card.cta}
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="section-shell">
          {serviceDetails.map((service) => (
            <article className="service-detail" id={service.id} key={service.id}>
              <div>
                <span className="service-label">{service.label}</span>
                <h3>{service.title}</h3>
                <p className="service-summary">{service.summary}</p>
                {service.id === 'mentoria' ? (
                  <a className="cta-dark" href={mentorLink} target="_blank" rel="noopener noreferrer">
                    Garantir minha vaga
                  </a>
                ) : (
                  <button className="cta-dark" onClick={onOpenModal}>
                    {service.id === 'consultoria' && 'Falar com especialista'}
                    {service.id === 'plano' && 'Estruturar meu Plano de Negócio'}
                    {service.id === 'valuation' && 'Descobrir meu Valuation'}
                  </button>
                )}
              </div>

              <div className="service-columns">
                {service.blocks.map((block) => (
                  <div className="service-block" key={block.title}>
                    <h4>{block.title}</h4>
                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="service-result">
                  <strong>{service.result.split(':')[0]}:</strong>
                  {service.result.includes(':') ? ` ${service.result.split(':').slice(1).join(':').trim()}` : service.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
