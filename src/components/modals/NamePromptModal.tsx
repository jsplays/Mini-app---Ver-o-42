import React, { useState } from 'react';
import { User, ArrowRight, ShieldCheck, Sun } from 'lucide-react';

interface NamePromptModalProps {
  isOpen: boolean;
  onSaveName: (name: string) => void;
}

export const NamePromptModal: React.FC<NamePromptModalProps> = ({
  isOpen,
  onSaveName,
}) => {
  const [inputName, setInputName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName.trim()) return;
    onSaveName(inputName.trim());
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl relative text-center animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* App Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF6B6B] to-[#FFD93D] p-0.5 mx-auto mb-4 shadow-md shadow-orange-500/15">
          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
            <Sun className="w-7 h-7 text-[#FF6B6B]" />
          </div>
        </div>

        <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          Acesso VIP Liberado
        </span>

        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mt-1">
          Qual é o seu nome?
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
          Informe seu nome para personalizar seu portal exclusivo e seus materiais.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              autoFocus
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Digite seu primeiro nome..."
              className="w-full h-12 pl-10 pr-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/20 text-center"
            />
          </div>

          <button
            type="submit"
            disabled={!inputName.trim()}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#FF6B6B] to-[#FF7E5F] disabled:opacity-50 text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-orange-500/15 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            <span>Acessar Meu Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
