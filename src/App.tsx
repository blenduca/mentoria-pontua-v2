import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Audience } from './components/Audience';
import { Bio } from './components/Bio';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { ModalAgendamento } from './components/ModalAgendamento';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="landing-page">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <PainPoints />
      <Solution onOpenModal={() => setIsModalOpen(true)} />
      <Audience />
      <Testimonials />
      <Bio />
      <FAQ onOpenModal={() => setIsModalOpen(true)} />
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <ModalAgendamento 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
