import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Coffee, 
  Sun, 
  Apple, 
  Moon, 
  Sparkles, 
  ShoppingBag, 
  Check, 
  Copy 
} from 'lucide-react';
import { ROTATING_WEEKS } from '../../data/protocolData';

export const CardapioRotativoApp: React.FC = () => {
  const [selectedWeekId, setSelectedWeekId] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const currentWeek = ROTATING_WEEKS.find(w => w.id === selectedWeekId) || ROTATING_WEEKS[0];

  const handleCopyShoppingList = () => {
    const listText = `Lista de Compras — ${currentWeek.title}:\n` + currentWeek.shoppingList.map(item => `• ${item}`).join('\n');
    navigator.clipboard.writeText(listText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="space-y-5 pb-6 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-3xl p-5 sm:p-6 shadow-md">
        <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
          Bônus #1 Liberado
        </span>

        <h2 className="font-display font-extrabold text-xl sm:text-2xl mt-2">
          Cardápio Rotativo 42D
        </h2>
        <p className="text-emerald-100 text-xs mt-1 leading-relaxed">
          Refeições anti-inflamatórias, práticas e balanceadas divididas semana a semana sem monotonia.
        </p>
      </div>

      {/* Week Tabs */}
      <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-x-auto">
        {ROTATING_WEEKS.map((w) => (
          <button
            key={w.id}
            onClick={() => setSelectedWeekId(w.id)}
            className={`flex-1 min-w-[90px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap text-center ${
              selectedWeekId === w.id
                ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Semana {w.id}
          </button>
        ))}
      </div>

      {/* Week Focus Title */}
      <div className="px-1">
        <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
          {currentWeek.title}
        </h3>
        <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
          Foco: {currentWeek.focus}
        </p>
      </div>

      {/* 5 Daily Meals Cards */}
      <div className="space-y-2.5">
        {[
          { title: 'Café da Manhã', icon: <Coffee className="w-4 h-4 text-amber-500" />, content: currentWeek.meals.cafe },
          { title: 'Almoço', icon: <Sun className="w-4 h-4 text-[#FF7E5F]" />, content: currentWeek.meals.almoco },
          { title: 'Lanche da Tarde', icon: <Apple className="w-4 h-4 text-emerald-500" />, content: currentWeek.meals.lanche },
          { title: 'Jantar', icon: <UtensilsCrossed className="w-4 h-4 text-teal-500" />, content: currentWeek.meals.jantar },
          { title: 'Ceia (antes de dormir)', icon: <Moon className="w-4 h-4 text-indigo-500" />, content: currentWeek.meals.ceia },
        ].map((meal, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center">
                {meal.icon}
              </div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {meal.title}
              </h4>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 pl-9 leading-relaxed">
              {meal.content}
            </p>
          </div>
        ))}
      </div>

      {/* Shopping List */}
      <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 rounded-3xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h4 className="font-display font-bold text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
              Lista de Supermercado
            </h4>
          </div>

          <button
            onClick={handleCopyShoppingList}
            className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold flex items-center gap-1 transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {currentWeek.shoppingList.map((item) => {
            const isChecked = checkedItems[item];
            return (
              <button
                key={item}
                onClick={() => toggleCheck(item)}
                className={`p-2 rounded-xl border text-left flex items-center justify-between text-xs transition-colors ${
                  isChecked
                    ? 'bg-emerald-100/80 dark:bg-emerald-900/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 line-through opacity-70'
                    : 'bg-white dark:bg-slate-900 border-emerald-200/70 dark:border-emerald-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>• {item}</span>
                <div
                  className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                    isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 dark:border-slate-600'
                  }`}
                >
                  {isChecked && <Check className="w-2.5 h-2.5" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
