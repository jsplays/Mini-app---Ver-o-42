import React from 'react';
import { ArrowRight, Flame, ExternalLink } from 'lucide-react';
import { ASSET_IMAGES, APP_LINKS } from '../data/protocolData';

export const MasterProductCard: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl shadow-orange-500/10 border border-orange-500/25 group text-center">
      
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="Protocolo Verão 42 Bem-Estar"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
        />
        {/* Measured dark scrim for WCAG AA text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/60" />
      </div>

      {/* Foreground Content (Fully Centered) */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col items-center justify-center">
        
        {/* Top Product Badge - Zero Emojis */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B6B] text-white text-[11px] font-bold tracking-wider uppercase shadow-sm mb-3">
          <Flame className="w-3.5 h-3.5 fill-white" />
          <span>Produto Master Oficial</span>
        </div>

        {/* Hero Title & Description - Centered */}
        <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight max-w-sm">
          Protocolo Verão 42 — O Método C.A.S.A
        </h2>
        
        <p className="text-slate-200 text-xs sm:text-sm mt-2 max-w-xs leading-relaxed font-medium">
          Seu plano de ação diário de 42 dias para secar sem passar fome.
        </p>

        {/* The 4 Pillars Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-md my-5 py-3 border-y border-white/15 text-[11px] text-slate-300">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#FFD93D] text-slate-900 font-black flex items-center justify-center text-[9px]">C</span>
            <span className="font-medium">Constância</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#FF6B6B] text-white font-black flex items-center justify-center text-[9px]">A</span>
            <span className="font-medium">Alimentação</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#00C9A7] text-white font-black flex items-center justify-center text-[9px]">S</span>
            <span className="font-medium">Sono & Água</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-sky-400 text-white font-black flex items-center justify-center text-[9px]">A</span>
            <span className="font-medium">Atividade 20m</span>
          </div>
        </div>

        {/* CTA Button Zone - Direct Netlify Link */}
        <a
          href={APP_LINKS.protocolo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B6B] via-[#FF7E5F] to-[#FFD93D] hover:opacity-95 text-[#2B2D42] font-display font-extrabold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          <span>ACESSAR O MÉTODO AGORA</span>
          <ArrowRight className="w-4 h-4 text-[#2B2D42] transition-transform group-hover:translate-x-1" />
        </a>

      </div>

    </section>
  );
};
