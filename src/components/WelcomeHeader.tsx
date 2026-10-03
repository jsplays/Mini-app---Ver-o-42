import React from 'react';
import { ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface WelcomeHeaderProps {
  studentName: string;
  onOpenDisclaimer: () => void;
}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  studentName,
  onOpenDisclaimer,
}) => {
  return (
    <div className="text-center py-2 sm:py-3 space-y-2">
      
      {/* Centered Member Tag */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200/80 dark:border-orange-800/60 text-[#FF6B6B] dark:text-orange-300 text-[11px] font-bold tracking-wide uppercase">
        <Sparkles className="w-3 h-3 text-[#FF6B6B]" />
        <span>Área de Membros VIP</span>
      </div>

      {/* Centered Welcome Title - Zero Emojis */}
      <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
        Bem-vinda, {studentName || 'Aluna'}
      </h1>

      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
        Acesse abaixo o método principal e seus 6 bônus exclusivos liberados.
      </p>

      {/* Safety Notice Quick Button */}
      <div className="pt-1">
        <button
          onClick={onOpenDisclaimer}
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
          <span>Aviso importante de saúde</span>
        </button>
      </div>

    </div>
  );
};
