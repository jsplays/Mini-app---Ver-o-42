import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { SUPPORT_URL } from '../data/protocolData';

export const SupportSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 via-emerald-50/70 to-rose-50/50 dark:from-teal-950/40 dark:via-emerald-950/30 dark:to-rose-950/20 border border-teal-200/80 dark:border-teal-800/60 p-6 sm:p-7 shadow-xs text-center">
      
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 max-w-sm mx-auto">
        
        {/* WhatsApp Highlight Icon */}
        <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/25 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white stroke-emerald-500" />
        </div>

        {/* Status Line */}
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Suporte Exclusivo WhatsApp</span>
        </div>
        
        {/* Title */}
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white leading-tight">
          Precisa de Ajuda ou Tem Dúvidas?
        </h3>
        
        {/* Text */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Nossa equipe de suporte está pronta para te atender no WhatsApp.
        </p>

        {/* CTA Button with exact URL */}
        <div className="pt-2 w-full">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-extrabold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="uppercase">FALAR COM O SUPORTE NO WHATSAPP</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>

    </section>
  );
};
