export type AppId = 
  | 'protocolo-casa'
  | 'cardapio-rotativo'
  | 'buscador-trocas'
  | 'desafio-inchaco'
  | 'guia-marmita'
  | 'doces-fit'
  | 'audios-motivacao';

export interface UserProfile {
  name: string;
  disclaimerAccepted: boolean;
}

export interface FoodSwap {
  id: string;
  category: 'carboidratos' | 'proteinas' | 'paes-farinhas' | 'lanches' | 'doces-bebidas' | 'molhos';
  originalFood: string;
  swapFood: string;
  caloriesSaved: string;
  benefit: string;
  nutriTip: string;
}

export interface RecipeItem {
  id: string;
  title: string;
  category: string;
  time: string;
  calories: string;
  protein: string;
  difficulty: 'Fácil' | 'Médio';
  ingredients: string[];
  instructions: string[];
  tag: string;
}

export interface AudioSession {
  day: number;
  title: string;
  theme: string;
  duration: string;
  summary: string;
  affirmation: string;
}
