import React, { useState, useEffect } from 'react';
import { 
  Headphones, 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { MOTIVATION_AUDIOS } from '../../data/protocolData';
import { audioEngine } from '../../utils/audioSynthesizer';
import { AudioSession } from '../../types';

export const AudiosMotivacaoApp: React.FC = () => {
  const [activeSession, setActiveSession] = useState<AudioSession>(MOTIVATION_AUDIOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [completedTracks, setCompletedTracks] = useState<{ [day: number]: boolean }>({ 1: true });

  const togglePlay = () => {
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      audioEngine.start();
      setIsPlaying(true);
    }
  };

  const selectSession = (session: AudioSession) => {
    setActiveSession(session);
    setProgress(0);
    if (!isPlaying) {
      audioEngine.start();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCompletedTracks(c => ({ ...c, [activeSession.day]: true }));
            return 100;
          }
          return prev + 1.5;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeSession.day]);

  useEffect(() => {
    return () => {
      audioEngine.stop();
    };
  }, []);

  return (
    <div className="space-y-4 pb-6 text-left">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 text-white rounded-3xl p-5 sm:p-6 shadow-md">
        <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
          Bônus #6 Liberado
        </span>

        <h2 className="font-display font-extrabold text-xl sm:text-2xl mt-2">
          Áudios de Motivação
        </h2>
        <p className="text-indigo-100 text-xs mt-1 leading-relaxed">
          21 Dias de Mentalidade e foco consistente para orientar seu dia com clareza.
        </p>
      </div>

      {/* Main Player */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 border border-indigo-500/30 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md bg-indigo-500/30 text-indigo-300">
            Dia {activeSession.day} de 21 · {activeSession.theme}
          </span>
          <span className="text-xs text-slate-400 font-mono">{activeSession.duration}</span>
        </div>

        <h3 className="font-display font-bold text-base sm:text-lg text-white">
          {activeSession.title}
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          {activeSession.summary}
        </p>

        {/* Play Controls & Waveform */}
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF6B6B] to-[#FFD93D] text-slate-900 flex items-center justify-center shadow-md active:scale-95 transition-all"
            title={isPlaying ? 'Pausar' : 'Reproduzir áudio'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          {/* Animated Waveform */}
          <div className="flex items-center gap-1 h-5">
            {[40, 70, 30, 90, 60, 100, 45, 80, 50, 75].map((h, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-300 ${
                  isPlaying ? 'bg-indigo-400 animate-pulse' : 'bg-slate-700'
                }`}
                style={{ height: isPlaying ? `${Math.max(20, (h * (progress % 10 + 1)) % 100)}%` : '25%' }}
              />
            ))}
          </div>

          <span className="text-[11px] font-medium text-indigo-300 flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isPlaying ? 'Reproduzindo' : 'Pausado'}</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-[#FF6B6B] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Affirmation */}
        <div className="p-3 rounded-2xl bg-indigo-950/60 border border-indigo-500/20 text-xs">
          <span className="text-amber-300 font-bold block mb-0.5 text-[11px]">
            Afirmação do Dia:
          </span>
          <p className="italic text-slate-200">
            "{activeSession.affirmation}"
          </p>
        </div>
      </div>

      {/* Playlist */}
      <div className="space-y-2">
        <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white px-1">
          Lista de Sessões
        </h4>

        {MOTIVATION_AUDIOS.map((track) => {
          const isSelected = activeSession.day === track.day;
          const isDone = completedTracks[track.day];

          return (
            <div
              key={track.day}
              onClick={() => selectSession(track)}
              className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-2.5 ${
                isSelected
                  ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-300 dark:border-indigo-800'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : isDone
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : `D${track.day}`}
                </div>

                <div>
                  <h5 className="font-display font-bold text-xs text-slate-900 dark:text-white">
                    Dia {track.day}: {track.title}
                  </h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{track.theme}</p>
                </div>
              </div>

              <span className="text-xs font-medium text-slate-400">
                {track.duration}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
