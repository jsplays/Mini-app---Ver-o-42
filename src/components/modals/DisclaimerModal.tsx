import React from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';
import { HEALTH_DISCLAIMER_TEXT } from '../../data/protocolData';

interface DisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
  canDismiss?: boolean;
  onClose?: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onAccept,
  canDismiss = false,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl relative text-left my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
      >
        {/* Header Icon + Title */}
        <div className="flex flex-col items-center text-center pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mb-3">
            <AlertTriangle className="w-6 h-6 stroke-[2.2]" />
          </div>
          <h2 id="disclaimer-title" className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
            Aviso importante
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Diretrizes de saúde, segurança e responsabilidade
          </p>
        </div>

        {/* Exact Disclaimer Text */}
        <div className="my-4 max-h-[55vh] overflow-y-auto pr-1 space-y-3.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Este material tem finalidade educativa e não substitui consulta, diagnóstico ou tratamento realizado por médico, nutricionista, psicólogo ou outro profissional habilitado.
          </p>
          <p>
            As sugestões são gerais e podem não ser adequadas para todas as pessoas. Gestantes, lactantes, adolescentes, pessoas idosas, pessoas com diabetes, hipertensão, doenças renais, doenças gastrointestinais, transtornos alimentares, alergias ou outras condições de saúde devem buscar orientação individualizada antes de iniciar mudanças alimentares ou de atividade física.
          </p>
          <p>
            Não existe resultado igual para todas as pessoas. O objetivo deste programa é ajudar você a desenvolver hábitos mais consistentes, e não estabelecer uma meta obrigatória de peso.
          </p>
          <p className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 font-medium">
            Interrompa a atividade e procure atendimento se sentir dor no peito, falta de ar intensa, desmaio, confusão, palpitações persistentes ou qualquer sintoma importante. Sinta-se à vontade para ajustar o ritmo conforme necessário para sua segurança. Por favor, confirme se você compreendeu estas diretrizes de segurança antes de prosseguir.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={onAccept}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#FF6B6B] to-[#FF7E5F] hover:opacity-95 text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-orange-500/15 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Compreendo e Confirmo as Diretrizes</span>
          </button>
          {canDismiss && onClose && (
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold"
            >
              Fechar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
