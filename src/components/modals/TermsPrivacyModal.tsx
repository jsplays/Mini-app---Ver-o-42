import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface TermsPrivacyModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const TermsPrivacyModal: React.FC<TermsPrivacyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm sm:max-w-md w-full p-6 shadow-2xl relative border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2 mb-3 text-[#FF6B6B]">
          <ShieldCheck className="w-5 h-5" />
          <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
            {isTerms ? 'Termos de Uso' : 'Política de Privacidade'}
          </h3>
        </div>

        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {isTerms ? (
            <>
              <p>
                <strong>1. Acesso Pessoal:</strong> O Protocolo Verão 42 e seus bônus exclusivos são disponibilizados para uso individual da aluna adquirente. É vedado o compartilhamento ou reprodução sem autorização prévia.
              </p>
              <p>
                <strong>2. Finalidade Educativa:</strong> Os cardápios, orientações e receitas possuem propósito informativo de reeducação nutricional e hábitos de bem-estar.
              </p>
              <p>
                <strong>3. Variabilidade Individual:</strong> As respostas metabólicas são individuais. O foco do programa reside no desenvolvimento de rotinas consistentes e sustentáveis.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Dados e Privacidade:</strong> O aplicativo armazena apenas seus dados de preferências e personalização de forma local no seu próprio dispositivo.
              </p>
              <p>
                <strong>2. Segurança:</strong> Nenhuma informação pessoal ou confidencial é comercializada ou transmitida para terceiros.
              </p>
              <p>
                <strong>3. Atendimento:</strong> Dúvidas relacionadas ao uso do portal podem ser sanadas diretamente com nosso canal oficial de WhatsApp.
              </p>
            </>
          )}
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
