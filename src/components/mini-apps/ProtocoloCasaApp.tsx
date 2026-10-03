import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Flame, 
  Droplets, 
  Utensils, 
  Moon, 
  Target, 
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import { CASA_PILLARS, PROTOCOL_PHASES } from '../../data/protocolData';

interface ProtocoloCasaAppProps {
  studentName: string;
}

export const ProtocoloCasaApp: React.FC<ProtocoloCasaAppProps> = ({ studentName }) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  const [dailyHabits, setDailyHabits] = useState<{ [key: string]: boolean }>({
    shot: false,
    water: false,
    diet: false,
    workout: false,
    sleep: false,
  });

  const toggleHabit = (key: string) => {
    setDailyHabits(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 pb-6 text-left">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-orange-500 via-[#FF6B6B] to-[#FF7E5F] text-white rounded-3xl p-5 sm:p-6 shadow-md">
        <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
          Método Oficial C.A.S.A
        </span>

        <h2 className="font-display font-extrabold text-xl sm:text-2xl mt-2">
          Protocolo Verão 42
        </h2>
        <p className="text-orange-100 text-xs sm:text-sm mt-1 leading-relaxed">
          Plano de ação focado em desinflamação, equilíbrio nutricional e constância para {studentName || 'você'}.
        </p>
      </div>

      {/* The 4 Pillars */}
      <div>
        <div className="mb-3">
          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
            Os 4 Pilares do Método C.A.S.A
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            A base para manter resultados consistentes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {CASA_PILLARS.map((pillar) => (
            <div
              key={pillar.letter}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs flex items-start gap-3"
            >
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${pillar.color} text-white font-display font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}
              >
                {pillar.letter}
              </div>
              <div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  {pillar.name}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Habits Checklist */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs">
        <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1 flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-[#FF6B6B]" />
          <span>Metas Diárias de Consistência</span>
        </h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
          Marque conforme for realizando ao longo do dia
        </p>

        <div className="space-y-2">
          {[
            { id: 'shot', title: 'Shot Matinal em jejum', desc: 'Água morna, limão, cúrcuma e gengibre', icon: <Flame className="w-4 h-4 text-orange-500" /> },
            { id: 'water', title: 'Meta de Água (3 Litros)', desc: 'Hidratação fracionada ao longo do dia', icon: <Droplets className="w-4 h-4 text-teal-500" /> },
            { id: 'diet', title: 'Refeições Alinhadas ao Plano', desc: 'Comida de verdade e sem ultraprocessados', icon: <Utensils className="w-4 h-4 text-[#FF6B6B]" /> },
            { id: 'workout', title: '20 Minutos de Movimento Ativo', desc: 'Caminhada ou exercício funcional', icon: <Target className="w-4 h-4 text-sky-500" /> },
            { id: 'sleep', title: 'Sono Reparador', desc: 'Descanso adequado e desligamento de telas', icon: <Moon className="w-4 h-4 text-indigo-500" /> },
          ].map((item) => {
            const isDone = dailyHabits[item.id];
            return (
              <button
                key={item.id}
                onClick={() => toggleHabit(item.id)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between gap-2.5 transition-all ${
                  isDone
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200/70 dark:border-slate-700/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${isDone ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>

                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                    isDone
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700'
                  }`}
                >
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Phases Roadmap */}
      <div>
        <div className="mb-3">
          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
            As 4 Fases do Protocolo
          </h3>
        </div>

        {/* Phase selector tabs */}
        <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl mb-3 overflow-x-auto">
          {PROTOCOL_PHASES.map((p) => (
            <button
              key={p.phase}
              onClick={() => setSelectedPhase(p.phase)}
              className={`flex-1 min-w-[85px] py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap text-center ${
                selectedPhase === p.phase
                  ? 'bg-white dark:bg-slate-800 text-[#FF6B6B] dark:text-[#FF7E5F] shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Fase {p.phase}
            </button>
          ))}
        </div>

        {/* Selected Phase Detail */}
        {(() => {
          const currentPhaseData = PROTOCOL_PHASES.find(p => p.phase === selectedPhase);
          if (!currentPhaseData) return null;
          return (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#FF6B6B] dark:text-[#FF7E5F] uppercase tracking-wider">
                    {currentPhaseData.days}
                  </span>
                  <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                    {currentPhaseData.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-[#FF6B6B] font-display font-black text-xs flex items-center justify-center">
                  #{currentPhaseData.phase}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/50">
                <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300">Objetivo:</span>
                <p className="text-xs text-amber-950 dark:text-amber-200 mt-0.5 leading-relaxed">
                  {currentPhaseData.goal}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-900/50">
                <span className="text-[11px] font-bold text-teal-800 dark:text-teal-300">Ação Principal:</span>
                <p className="text-xs text-teal-950 dark:text-teal-200 mt-0.5 leading-relaxed">
                  {currentPhaseData.action}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
