import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Flame, 
  ChevronRight,
  X
} from 'lucide-react';
import { FIT_DESSERTS, ASSET_IMAGES } from '../../data/protocolData';
import { RecipeItem } from '../../types';

export const DocesFitApp: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  const categories = ['all', 'Chocolatudos', 'Gelados', 'Rápidos'];

  const filtered = FIT_DESSERTS.filter(
    r => selectedCategory === 'all' || r.category === selectedCategory
  );

  return (
    <div className="space-y-4 pb-6 text-left">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white min-h-[160px] flex flex-col justify-end p-5 shadow-md">
        <img
          src={ASSET_IMAGES.desserts}
          alt="Doces Fit"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />

        <div className="relative z-10">
          <span className="px-2.5 py-0.5 rounded-full bg-pink-500 text-white text-[10px] font-bold uppercase tracking-wider">
            Bônus #5 Liberado
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
            20 Doces Fit Permitidos
          </h2>
          <p className="text-pink-100 text-xs mt-0.5 leading-relaxed">
            Sem Culpa e Sem Açúcar. Receitas aprovadas para saciar a vontade de doce com equilíbrio.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-pink-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800'
            }`}
          >
            {cat === 'all' ? 'Todos' : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3"
          >
            <div className="space-y-1 max-w-[70%]">
              <span className="text-[10px] font-bold text-pink-700 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-900/60 px-2 py-0.5 rounded-md">
                {item.tag}
              </span>
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {item.calories} · {item.protein} proteína · {item.time}
              </p>
            </div>

            <button
              onClick={() => setSelectedRecipe(item)}
              className="py-2 px-3 rounded-xl bg-pink-50 dark:bg-pink-950/60 hover:bg-pink-600 text-pink-700 dark:text-pink-300 hover:text-white font-bold text-xs shrink-0 transition-colors"
            >
              Ver Receita
            </button>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full p-5 shadow-2xl relative border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute right-4 top-4 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <span className="text-[11px] font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wide">
              {selectedRecipe.category}
            </span>
            <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white mt-0.5 pr-6">
              {selectedRecipe.title}
            </h3>

            <div className="my-3 p-2.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/50 text-xs text-slate-700 dark:text-slate-300 flex justify-between">
              <span>{selectedRecipe.calories}</span>
              <span>{selectedRecipe.protein} Proteína</span>
              <span>{selectedRecipe.time}</span>
            </div>

            <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
              <div>
                <strong className="block text-slate-900 dark:text-white mb-1">Ingredientes:</strong>
                <ul className="space-y-1">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-pink-500 mt-1.5 shrink-0"></span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="block text-slate-900 dark:text-white mb-1">Modo de Preparo:</strong>
                <ol className="space-y-1.5">
                  {selectedRecipe.instructions.map((step, i) => (
                    <li key={i} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 leading-relaxed">
                      <span className="font-bold text-pink-600 dark:text-pink-400">{i + 1}. </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <button
              onClick={() => setSelectedRecipe(null)}
              className="w-full mt-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
