import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Check, Loader2 } from 'lucide-react';

export const ModalAgendamento = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ nome: '', email: '', whatsapp: '' });

  // Resetar status quando fechar o modal
  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
    }
  }, [isOpen]);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Se não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://automacao.bagents.cloud/webhook/6597cb78-ea8d-4181-beae-2ecbd4c3fbd5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', whatsapp: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Backdrop para fechar ao clicar */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-[#3E2C22] text-[#D4C5BC] w-full max-w-md rounded-lg shadow-2xl border border-[#543D32]"
        style={{
          position: 'relative',
          maxWidth: '500px',
          width: '100%',
          margin: '0 auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Botão Fechar */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[#D4C5BC] hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#F3DBB2] mb-2">Sucesso!</h3>
              <p className="mb-6">Recebemos seus dados. Entraremos em contato em breve.</p>
              <button onClick={onClose} className="px-6 py-2 bg-[#F3DBB2] text-[#3E2C22] font-bold rounded hover:bg-[#E6D5C8]">
                Fechar
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-[#F3DBB2] mb-2">Agendar Reunião Estratégica</h3>
              <p className="text-sm opacity-80 mb-6 modal-copy">
                Preencha seus dados para analisarmos o cenário atual do seu negócio e indicarmos o melhor direcionamento.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold uppercase ml-1 mb-1 text-[#F3DBB2]">Nome</label>
                  <input id="nome" type="text" name="nome" required autoComplete="name" value={formData.nome} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2A1D16] border border-[#543D32] rounded focus:border-[#F3DBB2] outline-none text-[#F0E6E0]" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase ml-1 mb-1 text-[#F3DBB2]">Email</label>
                  <input id="email" type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2A1D16] border border-[#543D32] rounded focus:border-[#F3DBB2] outline-none text-[#F0E6E0]" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-bold uppercase ml-1 mb-1 text-[#F3DBB2]">WhatsApp</label>
                  <input id="whatsapp" type="tel" name="whatsapp" required autoComplete="tel" value={formData.whatsapp} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2A1D16] border border-[#543D32] rounded focus:border-[#F3DBB2] outline-none text-[#F0E6E0]" placeholder="(00) 00000-0000" />
                </div>

                <button type="submit" disabled={status === 'loading'} className="w-full py-3 mt-4 bg-[#F3DBB2] text-[#3E2C22] font-bold rounded hover:bg-[#E6D5C8] flex justify-center items-center">
                  {status === 'loading' ? <Loader2 className="animate-spin mr-2" /> : 'Solicitar reunião gratuita'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
