import React from 'react';
import { 
  ShoppingBag, 
  Clock, 
  Snowflake, 
  CheckCircle2 
} from 'lucide-react';
import { MARMITA_GUIDE, ASSET_IMAGES } from '../../data/protocolData';

export const GuiaMarmitaApp: React.FC = () => {
  return (
    <div className="space-y-5 pb-6 text-left">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white min-h-[160px] flex flex-col justify-end p-5 shadow-md">
        <img
          src={ASSET_IMAGES.mealprep}
          alt="Marmitas Fit"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />

        <div className="relative z-10">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
            Bônus #4 Liberado
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
            {MARMITA_GUIDE.title}
          </h2>
          <p className="text-slate-200 text-xs mt-0.5 leading-relaxed">
            {MARMITA_GUIDE.subtitle}
          </p>
        </div>
      </div>

      {/* Rules */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs">
        <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2.5 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-amber-500" />
          <span>Organização em 90 Minutos</span>
        </h3>

        <div className="space-y-2">
          {MARMITA_GUIDE.rules.map((rule, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/50 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-950 dark:text-amber-200 font-medium leading-relaxed">
                {rule}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recipes */}
      <div className="space-y-3">
        <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white px-1">
          Receitas Coringa para Congelar
        </h3>

        {MARMITA_GUIDE.recipes.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/70 px-2 py-0.5 rounded-full">
                {item.portion}
              </span>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-bold text-slate-700 dark:text-slate-300 block">Ingredientes:</span>
              <p>{item.ingredients.join(' · ')}</p>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Preparo: </strong>
              {item.prep}
            </div>
          </div>
        ))}
      </div>

      {/* Freezing Tips */}
      <div className="bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-900/60 rounded-3xl p-5 shadow-xs">
        <h3 className="font-display font-bold text-xs sm:text-sm text-sky-950 dark:text-sky-200 mb-2 flex items-center gap-1.5">
          <Snowflake className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>Dicas de Armazenamento</span>
        </h3>

        <div className="space-y-1.5 text-xs text-sky-900 dark:text-sky-200">
          {MARMITA_GUIDE.freezingTips.map((tip, idx) => (
            <p key={idx} className="flex items-start gap-1.5">
              <span className="text-sky-500 font-bold">•</span>
              <span>{tip}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
