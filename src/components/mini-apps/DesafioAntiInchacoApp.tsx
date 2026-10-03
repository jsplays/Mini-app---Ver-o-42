import React, { useState } from 'react';
import { 
  Zap, 
  Flame, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { ANTI_INCHACO_PROTOCOL } from '../../data/protocolData';

export const DesafioAntiInchacoApp: React.FC = () => {
  const [completedDays, setCompletedDays] = useState<{ [day: number]: boolean }>({ 1: true });

  const toggleDay = (day: number) => {
    setCompletedDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="space-y-5 pb-6 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-[#FF6B6B] to-rose-600 text-white rounded-3xl p-5 sm:p-6 shadow-md">
        <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
          Bônus #3 Liberado
        </span>

        <h2 className="font-display font-extrabold text-xl sm:text-2xl mt-2">
          Desafio 7 Dias Anti-Inchaço
        </h2>
        <p className="text-orange-100 text-xs mt-1 leading-relaxed">
          {ANTI_INCHACO_PROTOCOL.subtitle}
        </p>
      </div>

      {/* 4 Golden Rules */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs">
        <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2.5 flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-orange-500" />
          <span>As 4 Diretrizes do Desafio</span>
        </h3>

        <div className="space-y-2">
          {ANTI_INCHACO_PROTOCOL.goldenRules.map((rule, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/60 dark:border-orange-900/50 flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-[#FF6B6B] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs text-orange-950 dark:text-orange-200 font-medium leading-relaxed">
                {rule}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Morning Shot Recipe */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200/80 dark:border-amber-900/60 rounded-3xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <h3 className="font-display font-bold text-xs sm:text-sm text-amber-950 dark:text-amber-200">
              {ANTI_INCHACO_PROTOCOL.morningShot.title}
            </h3>
          </div>
          <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/60 px-2 py-0.5 rounded-full">
            Em Jejum
          </span>
        </div>

        <ul className="space-y-1 mb-3 text-xs text-amber-950 dark:text-amber-200">
          {ANTI_INCHACO_PROTOCOL.morningShot.ingredients.map((ing, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
              <span>{ing}</span>
            </li>
          ))}
        </ul>

        <p className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-amber-900/60 text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>Preparo: </strong>{ANTI_INCHACO_PROTOCOL.morningShot.mode}
        </p>
      </div>

      {/* Teas Schedule */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs">
        <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2.5 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>Horário dos Chás do Dia</span>
        </h3>

        <div className="space-y-2">
          {ANTI_INCHACO_PROTOCOL.teas.map((tea, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-900/50 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-xs text-teal-950 dark:text-teal-200">
                  {tea.name}
                </h4>
                <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400 uppercase">
                  {tea.time}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {tea.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Day Checklist */}
      <div className="space-y-2">
        <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white px-1">
          Roteiro dos 7 Dias
        </h3>

        {ANTI_INCHACO_PROTOCOL.daysRoutine.map((item) => {
          const isDone = completedDays[item.day];
          return (
            <div
              key={item.day}
              className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-2.5 ${
                isDone
                  ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-lg font-display font-bold text-xs flex items-center justify-center shrink-0 ${
                    isDone ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  D{item.day}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white">
                    Dia {item.day}: {item.focus}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.tip}</p>
                </div>
              </div>

              <button
                onClick={() => toggleDay(item.day)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                  isDone
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300'
                }`}
              >
                {isDone ? 'Feito' : 'Concluir'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
