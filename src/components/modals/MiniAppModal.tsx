import React, { useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { AppId } from '../../types';
import { ProtocoloCasaApp } from '../mini-apps/ProtocoloCasaApp';
import { CardapioRotativoApp } from '../mini-apps/CardapioRotativoApp';
import { BuscadorSubstituicoesApp } from '../mini-apps/BuscadorSubstituicoesApp';
import { DesafioAntiInchacoApp } from '../mini-apps/DesafioAntiInchacoApp';
import { GuiaMarmitaApp } from '../mini-apps/GuiaMarmitaApp';
import { DocesFitApp } from '../mini-apps/DocesFitApp';
import { AudiosMotivacaoApp } from '../mini-apps/AudiosMotivacaoApp';

interface MiniAppModalProps {
  appId: AppId | null;
  onClose: () => void;
  studentName: string;
}

export const MiniAppModal: React.FC<MiniAppModalProps> = ({
  appId,
  onClose,
  studentName,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!appId) return null;

  const titles: Record<AppId, string> = {
    'protocolo-casa': 'Protocolo Verão 42 — Método C.A.S.A',
    'cardapio-rotativo': 'Cardápio Rotativo 42D',
    'buscador-trocas': 'Buscador de Substituições',
    'desafio-inchaco': 'Desafio 7 Dias Anti-Inchaço',
    'guia-marmita': 'Guia Marmita Fit',
    'doces-fit': '20 Doces Fit Permitidos',
    'audios-motivacao': 'Áudios de Motivação — 21 Dias',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex justify-center items-start sm:p-4">
      <div 
        className="w-full max-w-md min-h-screen sm:min-h-0 sm:my-4 bg-[#F8F9FA] dark:bg-slate-950 sm:rounded-3xl shadow-2xl flex flex-col border border-slate-200/90 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Sticky Mobile App Bar */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-4 h-14 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1.5 -ml-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          <span id="modal-headline" className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate max-w-[200px] text-center">
            {titles[appId]}
          </span>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 overflow-y-auto max-h-[calc(100vh-3.5rem)] sm:max-h-[85vh]">
          {appId === 'protocolo-casa' && (
            <ProtocoloCasaApp studentName={studentName} />
          )}
          {appId === 'cardapio-rotativo' && (
            <CardapioRotativoApp />
          )}
          {appId === 'buscador-trocas' && (
            <BuscadorSubstituicoesApp />
          )}
          {appId === 'desafio-inchaco' && (
            <DesafioAntiInchacoApp />
          )}
          {appId === 'guia-marmita' && (
            <GuiaMarmitaApp />
          )}
          {appId === 'doces-fit' && (
            <DocesFitApp />
          )}
          {appId === 'audios-motivacao' && (
            <AudiosMotivacaoApp />
          )}
        </div>
      </div>
    </div>
  );
};
