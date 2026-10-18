import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private synth: SpeechSynthesis | null = typeof window !== 'undefined' && 'speechSynthesis' in window
    ? window.speechSynthesis
    : null;

  private voices: SpeechSynthesisVoice[] = [];
  public isSpeaking = signal<boolean>(false);
  public speechSupported = signal<boolean>(!!this.synth);

  constructor() {
    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): void {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  /**
   * ახმოვანებს ინგლისურ ტექსტს.
   * @param text წასაკითხი ინგლისური ტექსტი
   * @param rate სისწრაფე (1.0 სტანდარტული, 0.65 ნელი/დამწყებთათვის)
   */
  public speak(text: string, rate: number = 0.9): void {
    if (!this.synth || !text) return;

    // თუ უკვე საუბრობს, გავაჩეროთ წინა აუდიო
    this.synth.cancel();

    const cleanText = text.replace(/___+/g, ' blank ');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // შევარჩიოთ ხარისხიანი ინგლისური ხმა (Google, Natural ან US/UK)
    if (this.voices.length === 0) {
      this.loadVoices();
    }
    const preferredVoice =
      this.voices.find(v => v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Natural'))) ||
      this.voices.find(v => v.lang === 'en-US') ||
      this.voices.find(v => v.lang.startsWith('en'));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => this.isSpeaking.set(true);
    utterance.onend = () => this.isSpeaking.set(false);
    utterance.onerror = () => this.isSpeaking.set(false);

    this.synth.speak(utterance);
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking.set(false);
    }
  }
}