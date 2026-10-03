import React from 'react';
import { 
  UtensilsCrossed, 
  Repeat, 
  Zap, 
  ShoppingBag, 
  Sparkles, 
  Headphones, 
  ArrowRight,
  Clock,
  ExternalLink
} from 'lucide-react';
import { APP_LINKS } from '../data/protocolData';

interface BonusCardData {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  href?: string | null;
  isInProgress?: boolean;
  icon: React.ReactNode;
  iconBg: string;
  accentBorder: string;
  tagColor: string;
}

export const BonusGrid: React.FC = () => {
  const cards: BonusCardData[] = [
    {
      id: 'bonus-1',
      tag: 'BÔNUS #1',
      title: 'Cardápio Rotativo 42D',
      subtitle: 'Semana a semana sem enjoar',
      buttonLabel: 'Abrir Cardápio',
      href: APP_LINKS.bonus1,
      icon: <UtensilsCrossed className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-900/60',
      accentBorder: 'hover:border-emerald-300 dark:hover:border-emerald-600',
      tagColor: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60',
    },
    {
      id: 'bonus-2',
      tag: 'BÔNUS #2',
      title: 'Buscador de Substituições',
      subtitle: '150 Trocas Inteligentes',
      buttonLabel: 'Buscar Alimentos',
      href: APP_LINKS.bonus2,
      icon: <Repeat className="w-5 h-5 text-[#4D96FF] dark:text-blue-400" />,
      iconBg: 'bg-blue-50 dark:bg-blue-950/50 border-blue-100 dark:border-blue-900/60',
      accentBorder: 'hover:border-blue-300 dark:hover:border-blue-600',
      tagColor: 'text-[#4D96FF] dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60',
    },
    {
      id: 'bonus-3',
      tag: 'BÔNUS #3',
      title: 'Desafio 7 Dias Anti-Inchaço',
      subtitle: 'Protocolo de Emergência',
      buttonLabel: 'Iniciar Desafio',
      href: APP_LINKS.bonus3,
      icon: <Zap className="w-5 h-5 text-[#FF7E5F] dark:text-orange-400" />,
      iconBg: 'bg-orange-50 dark:bg-orange-950/50 border-orange-100 dark:border-orange-900/60',
      accentBorder: 'hover:border-orange-300 dark:hover:border-orange-600',
      tagColor: 'text-[#FF7E5F] dark:text-orange-300 bg-orange-50 dark:bg-orange-950/60 border border-orange-200/60 dark:border-orange-800/60',
    },
    {
      id: 'bonus-4',
      tag: 'BÔNUS #4',
      title: 'Guia Marmita Fit',
      subtitle: 'Meal Prep Rápido',
      buttonLabel: 'Ver Receitas',
      href: APP_LINKS.bonus4,
      icon: <ShoppingBag className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      iconBg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-100 dark:border-amber-900/60',
      accentBorder: 'hover:border-amber-300 dark:hover:border-amber-600',
      tagColor: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/60',
    },
    {
      id: 'bonus-5',
      tag: 'BÔNUS #5',
      title: '20 Doces Fit Permitidos',
      subtitle: 'Sem Culpa e Sem Açúcar',
      buttonLabel: 'Ver Doces',
      href: APP_LINKS.bonus5,
      icon: <Sparkles className="w-5 h-5 text-pink-500 dark:text-pink-400" />,
      iconBg: 'bg-pink-50 dark:bg-pink-950/50 border-pink-100 dark:border-pink-900/60',
      accentBorder: 'hover:border-pink-300 dark:hover:border-pink-600',
      tagColor: 'text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800/60',
    },
    {
      id: 'bonus-6',
      tag: 'BÔNUS #6',
      title: 'Áudios de Motivação',
      subtitle: '21 Dias de Mentalidade',
      buttonLabel: 'Em Andamento',
      href: null,
      isInProgress: true,
      icon: <Headphones className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      iconBg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-100 dark:border-amber-900/60',
      accentBorder: 'hover:border-amber-300 dark:hover:border-amber-600',
      tagColor: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/60',
    },
  ];

  return (
    <section className="space-y-4 text-center">
      {/* Centered Section Header */}
      <div>
        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
          Mini-Apps & Bônus Exclusivos
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Seus 6 módulos complementares liberados
        </p>
      </div>

      {/* Grid: 2 columns mobile */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`group bg-white dark:bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between ${card.accentBorder}`}
          >
            {/* Top Row: Icon + Tag */}
            <div>
              <div className="flex items-center justify-between gap-1 mb-3">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${card.iconBg}`}>
                  {card.icon}
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${card.tagColor}`}>
                  {card.isInProgress ? 'EM ANDAMENTO' : card.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-[#FF6B6B] dark:group-hover:text-[#FF7E5F] transition-colors leading-snug">
                {card.title}
              </h3>
              
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">
                {card.subtitle}
              </p>
            </div>

            {/* Action Link / Button */}
            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800">
              {card.isInProgress ? (
                <div
                  className="w-full h-9 px-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 cursor-not-allowed select-none"
                  title="Conteúdo em gravação e atualização para sua turma VIP"
                >
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                  <span className="truncate">Em Andamento</span>
                </div>
              ) : (
                <a
                  href={card.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-9 px-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] hover:text-white dark:hover:text-white border border-slate-200/80 dark:border-slate-700 hover:border-transparent text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-center gap-1 transition-all active:scale-95 group/btn"
                >
                  <span className="truncate">{card.buttonLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
