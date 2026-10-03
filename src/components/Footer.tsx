import React from 'react';
import { Sun, ShieldAlert } from 'lucide-react';
import { SUPPORT_URL } from '../data/protocolData';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTerms,
  onOpenPrivacy,
  onOpenDisclaimer,
}) => {
  return (
    <footer className="mt-8 pt-6 pb-12 border-t border-slate-200/80 dark:border-slate-800 text-center">
      <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-3">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Sun className="w-4 h-4 text-[#FF6B6B]" />
          <span className="font-display font-bold text-xs tracking-tight text-slate-800 dark:text-slate-200">
            PROTOCOLO VERÃO 42
          </span>
          <span className="text-[11px] text-slate-400">· Hub VIP</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
          <button
            onClick={onOpenDisclaimer}
            className="text-amber-600 dark:text-amber-400 font-semibold hover:underline flex items-center gap-1"
          >
            <ShieldAlert className="w-3 h-3" />
            <span>Aviso Importante</span>
          </button>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <button
            onClick={onOpenTerms}
            className="hover:text-[#FF6B6B] transition-colors"
          >
            Termos de Uso
          </button>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <button
            onClick={onOpenPrivacy}
            className="hover:text-[#FF6B6B] transition-colors"
          >
            Política de Privacidade
          </button>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            Suporte WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-slate-400 dark:text-slate-500">
          Direitos Reservados © {new Date().getFullYear()} Protocolo Verão 42.
        </p>

      </div>
    </footer>
  );
};
