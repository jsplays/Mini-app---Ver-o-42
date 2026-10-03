import React, { useState, useMemo } from 'react';
import { 
  Repeat, 
  Search, 
  Check, 
  X, 
  Flame, 
  Sparkles 
} from 'lucide-react';
import { FOOD_SWAPS } from '../../data/protocolData';

export const BuscadorSubstituicoesApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'carboidratos', label: 'Carboidratos' },
    { id: 'proteinas', label: 'Proteínas' },
    { id: 'paes-farinhas', label: 'Pães' },
    { id: 'lanches', label: 'Lanches' },
    { id: 'doces-bebidas', label: 'Bebidas' },
    { id: 'molhos', label: 'Molhos' },
  ];

  const filteredSwaps = useMemo(() => {
    return FOOD_SWAPS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.originalFood.toLowerCase().includes(q) ||
        item.swapFood.toLowerCase().includes(q) ||
        item.benefit.toLowerCase().includes(q) ||
        item.nutriTip.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-4 pb-6 text-left">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white rounded-3xl p-5 sm:p-6 shadow-md">
        <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
          Bônus #2 Liberado
        </span>

        <h2 className="font-display font-extrabold text-xl sm:text-2xl mt-2">
          Buscador de Substituições
        </h2>
        <p className="text-blue-100 text-xs mt-1 leading-relaxed">
          150 Trocas Inteligentes para manter prazer à mesa sem inflamação ou excesso calórico.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busque por pão, arroz, açúcar, maionese..."
          className="w-full h-11 pl-10 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            Limpar
          </button>
        )}
      </div>

      {/* Category Chips */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-[11px] text-slate-500 dark:text-slate-400 px-1">
        Mostrando {filteredSwaps.length} trocas inteligentes
      </div>

      {/* Cards List */}
      <div className="space-y-3">
        {filteredSwaps.map((swap) => (
          <div
            key={swap.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-2.5"
          >
            {/* Substitution Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/50">
                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wide flex items-center gap-1">
                  <X className="w-3.5 h-3.5" />
                  <span>Em vez de comer:</span>
                </span>
                <p className="text-xs font-bold text-rose-950 dark:text-rose-200 mt-0.5">
                  {swap.originalFood}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50">
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Substitua por:</span>
                </span>
                <p className="text-xs font-bold text-emerald-950 dark:text-emerald-200 mt-0.5">
                  {swap.swapFood}
                </p>
              </div>
            </div>

            {/* Benefit & Calorie info */}
            <div className="text-[11px] space-y-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold">
                {swap.caloriesSaved}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {swap.benefit}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-[10px]">
                <strong>Dica: </strong>{swap.nutriTip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
