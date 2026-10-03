// Web Audio ambient sound generator for the 21-Day Motivation player
class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 1.5);
      this.gainNode.connect(this.ctx.destination);

      // Warm soothing harmonic chord (432Hz inspired soothing frequency)
      const freqs = [216, 324, 432, 540];
      this.oscillators = freqs.map((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);
        
        // Gentle vibrato LFO
        const lfo = this.ctx!.createOscillator();
        const lfoGain = this.ctx!.createGain();
        lfo.frequency.value = 0.2 + idx * 0.1;
        lfoGain.gain.value = 1.5;
        lfo.connect(osc.frequency);
        lfo.start();

        osc.connect(this.gainNode!);
        osc.start();
        return osc;
      });

      this.isPlaying = true;
    } catch {
      // AudioContext might be blocked until user gesture
    }
  }

  public stop() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      if (this.gainNode) {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      }
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        this.oscillators = [];
        if (this.ctx && this.ctx.state !== 'closed') {
          this.ctx.close();
        }
        this.ctx = null;
        this.isPlaying = false;
      }, 800);
    } catch {
      this.isPlaying = false;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new AmbientAudioEngine();
