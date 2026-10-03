import React from 'react';
import { Sun, Moon, User, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  studentName: string;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenProfile: () => void;
  onOpenDisclaimer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  studentName,
  isDarkMode,
  onToggleTheme,
  onOpenProfile,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-xs transition-colors select-none">
      <div className="max-w-md mx-auto px-3.5 h-16 flex items-center justify-between gap-2">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#FF6B6B] to-[#FFD93D] p-0.5 shadow-sm flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
              <Sun className="w-4 h-4 text-[#FF6B6B]" />
            </div>
          </div>
          <div>
            <span className="font-display font-black text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white block leading-none">
              PROTOCOLO VERÃO 42
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Acesso VIP
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions (Tactile Theme Switcher + Profile) */}
        <div className="flex items-center gap-1.5">
          
          {/* High-visibility Mobile-friendly Segmented Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
            title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            className="h-10 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 cursor-pointer touch-manipulation active:scale-95 transition-all shadow-2xs"
          >
            {/* Sun Icon */}
            <div 
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                !isDarkMode 
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs scale-105' 
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <Sun className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>

            {/* Moon Icon */}
            <div 
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                isDarkMode 
                  ? 'bg-indigo-600 text-white font-bold shadow-xs scale-105' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Moon className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>

            <span className="text-[11px] font-bold tracking-tight pr-0.5">
              {isDarkMode ? 'Escuro' : 'Claro'}
            </span>
          </button>

          {/* Student Profile Button */}
          <button
            type="button"
            onClick={onOpenProfile}
            title="Alterar seu nome"
            aria-label="Perfil da Aluna"
            className="h-10 px-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 hover:bg-orange-100/80 dark:hover:bg-orange-900/40 border border-orange-200/80 dark:border-orange-900/50 text-slate-800 dark:text-orange-200 text-xs font-bold flex items-center gap-1.5 transition-colors active:scale-95 touch-manipulation"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#FF6B6B] to-[#FFD93D] text-white flex items-center justify-center text-[10px] font-black shrink-0">
              {studentName ? studentName.charAt(0).toUpperCase() : 'A'}
            </div>
            <span className="max-w-[60px] truncate hidden xs:inline">{studentName || 'Aluna'}</span>
          </button>

        </div>

      </div>
    </header>
  );
};
