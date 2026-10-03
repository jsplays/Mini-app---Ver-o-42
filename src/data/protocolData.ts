import { FoodSwap, RecipeItem, AudioSession } from '../types';

export const ASSET_IMAGES = {
  hero: '/src/assets/images/summer_hero_wellness_1791033503880.jpg',
  mealprep: '/src/assets/images/healthy_mealprep_bowls_1791033512609.jpg',
  desserts: '/src/assets/images/fit_dessert_sweets_1791033522748.jpg',
};

export const SUPPORT_URL = 'https://suporteexclusivoo.lovable.app/';

export const APP_LINKS = {
  protocolo: 'https://protocolo-verao-42.netlify.app/',
  bonus1: 'https://bonus1-protocoloverao42.netlify.app/',
  bonus2: 'https://bonus2-protocoloverao42.netlify.app/',
  bonus3: 'https://bonus3-protocoloverao42.netlify.app/',
  bonus4: 'https://bonus4-protocoloverao42.netlify.app/',
  bonus5: 'https://bonus5-protocoloverao42.netlify.app/',
  bonus6: null, // Em Andamento
};

export const HEALTH_DISCLAIMER_TEXT = `Este material tem finalidade educativa e não substitui consulta, diagnóstico ou tratamento realizado por médico, nutricionista, psicólogo ou outro profissional habilitado.

As sugestões são gerais e podem não ser adequadas para todas as pessoas. Gestantes, lactantes, adolescentes, pessoas idosas, pessoas com diabetes, hipertensão, doenças renais, doenças gastrointestinais, transtornos alimentares, alergias ou outras condições de saúde devem buscar orientação individualizada antes de iniciar mudanças alimentares ou de atividade física.

Não existe resultado igual para todas as pessoas. O objetivo deste programa é ajudar você a desenvolver hábitos mais consistentes, e não estabelecer uma meta obrigatória de peso.

Interrompa a atividade e procure atendimento se sentir dor no peito, falta de ar intensa, desmaio, confusão, palpitações persistentes ou qualquer sintoma importante. Sinta-se à vontade para ajustar o ritmo conforme necessário para sua segurança. Por favor, confirme se você compreendeu estas diretrizes de segurança antes de prosseguir.`;

// Pillars of C.A.S.A
export const CASA_PILLARS = [
  {
    letter: 'C',
    name: 'Constância sem Culpa',
    desc: 'O segredo é fazer o básico bem feito todos os dias, aplicando a regra 80/20 sem desistir após um deslize pontual.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    letter: 'A',
    name: 'Alimentação Anti-inflamatória',
    desc: 'Comida de verdade que reduz retenção hídrica e mantém saciedade duradoura com fibras e proteínas limpas.',
    color: 'from-[#FF6B6B] to-[#FF7E5F]',
  },
  {
    letter: 'S',
    name: 'Sono & Hidratação Ativa',
    desc: 'O corpo repara tecidos e regula hormônios sacietogênicos no sono profundo com ingestão diária de 35ml de água por kg.',
    color: 'from-[#00C9A7] to-teal-600',
  },
  {
    letter: 'A',
    name: 'Atividade Metabólica de 20 Minutos',
    desc: 'Estímulos corporais diários que ativam a taxa metabólica basal sem necessidade de treinos exaustivos.',
    color: 'from-sky-500 to-indigo-600',
  },
];

// 4 Phases of 42-Day Protocol
export const PROTOCOL_PHASES = [
  {
    phase: 1,
    days: 'Dias 1 a 10',
    title: 'Desinflamação & Choque Metabólico',
    goal: 'Eliminar retenção de líquidos acumulada e resetar a sensibilidade do paladar.',
    action: 'Redução de ultraprocessados, hidratação estratégica e shot matinal em jejum.',
  },
  {
    phase: 2,
    days: 'Dias 11 a 20',
    title: 'Ativação Termogênica',
    goal: 'Acelerar queima metabólica através de combinações alimentares funcionais.',
    action: 'Temperos digestivos e termogênicos, caminhadas ativas e janelas regulares de digestão.',
  },
  {
    phase: 3,
    days: 'Dias 21 a 32',
    title: 'Secagem & Tonicidade',
    goal: 'Otimizar composição corporal preservando massa magra e vitalidade.',
    action: 'Cardápio rotativo balanceado, lanches de saciedade e exercícios de sustentação.',
  },
  {
    phase: 4,
    days: 'Dias 33 a 42',
    title: 'Consolidação & Hábitos Duradouros',
    goal: 'Consolidar conquistas, prevenir retrocessos e viver com plena autonomia.',
    action: 'Prática autônoma de substituições inteligentes e rotina estabelecida.',
  },
];

// 4-Week Rotating Menu
export const ROTATING_WEEKS = [
  {
    id: 1,
    title: 'Semana 1: Choque Anti-Retenção',
    focus: 'Redução de retenção e melhora digestiva',
    meals: {
      cafe: 'Ovos mexidos com azeite de oliva e orégano + 1 fatia de mamão com sementes de chia + café ou chá verde puro.',
      almoco: 'Filé de peito de frango grelhado com cúrcuma + mix de folhas verdes escuras à vontade + 3 colheres de purê de abóbora cabotiá.',
      lanche: '1 pote de iogurte natural desnatado com 1 colher de farelo de aveia e morangos picados.',
      jantar: 'Sopa cremosa de abobrinha com frango desfiado e gengibre ralado ou omelete com espinafre.',
      ceia: 'Xícara de chá de camomila ou melissa morno.',
    },
    shoppingList: ['Ovos caipiras', 'Peito de frango', 'Abóbora cabotiá', 'Mamão formosa', 'Iogurte natural', 'Chia', 'Abobrinha', 'Gengibre'],
  },
  {
    id: 2,
    title: 'Semana 2: Aceleração da Queima',
    focus: 'Aumento da taxa metabólica e disposição diária',
    meals: {
      cafe: 'Crepioca leve (1 ovo + 1 colher de tapioca) recheada com queijo cottage ou ricota temperada + café preto.',
      almoco: 'Patinho moído refogado com cenoura e vagem + arroz integral ou de couve-flor + salada fresca com azeite extravirgem.',
      lanche: '1 maçã fatiada polvilhada com canela em pó + 8 castanhas ou amêndoas.',
      jantar: 'Filé de peixe grelhado com brócolis ao alho e azeite de oliva.',
      ceia: 'Chá de erva-doce ou mulungu com gotas de limão.',
    },
    shoppingList: ['Patinho moído', 'Filé de peixe', 'Ovos', 'Queijo cottage', 'Brócolis', 'Amêndoas', 'Canela em pó', 'Couve-flor'],
  },
  {
    id: 3,
    title: 'Semana 3: Secagem & Firmeza',
    focus: 'Otimização calórica e saciedade consistente',
    meals: {
      cafe: 'Vitamina de frutas vermelhas com iogurte proteico desnatado e sementes de linhaça dourada.',
      almoco: 'Sobrecoxa de frango sem pele assada com alecrim + abobrinha grelhada + salada de rúcula.',
      lanche: '2 ovos cozidos temperados com sal e orégano ou 1 fatia de pão integral com patê caseiro de atum.',
      jantar: 'Hambúrguer caseiro de carne magra grelhado sobre cama de folhas com tomate e palmito.',
      ceia: 'Chá de capim-limão com hortelã fresca.',
    },
    shoppingList: ['Frutas vermelhas congeladas', 'Linhaça dourada', 'Atum ao natural', 'Pão integral', 'Palmito', 'Rúcula', 'Alecrim'],
  },
  {
    id: 4,
    title: 'Semana 4: Lapidação & Cintura Fina',
    focus: 'Definição e abdômen compacto',
    meals: {
      cafe: 'Omelete de 2 claras e 1 gema com rodelas de tomate e manjericão fresco + 1 fatia de melão.',
      almoco: 'Iscas de carne grelhadas com cebola roxa e pimentão + salada verde generosa + batata-doce assada.',
      lanche: 'Mousse de cacau fit expresso (iogurte natural com 1 colher de cacau 100% e adoçante natural).',
      jantar: 'Creme leve de couve-flor com cubinhos de frango dourado e cheiro verde picado.',
      ceia: 'Chá de passiflora morno.',
    },
    shoppingList: ['Cacau 100%', 'Melão', 'Batata-doce', 'Manjericão', 'Cebola roxa', 'Cheiro verde', 'Adoçante natural'],
  },
];

// 150 Trocas Inteligentes (No emojis, clean text and symbols)
export const FOOD_SWAPS: FoodSwap[] = [
  {
    id: 's1',
    category: 'carboidratos',
    originalFood: 'Arroz branco tradicional (1 xícara cheia)',
    swapFood: 'Arroz de Couve-Flor refogado com alho ou Quinoa',
    caloriesSaved: '-165 kcal / -32g carboidratos',
    benefit: 'Aumenta fibras e evita picos bruscos de insulina no sangue.',
    nutriTip: 'Processe a couve-flor crua no modo pulsar e refogue por apenas 3 minutos.',
  },
  {
    id: 's2',
    category: 'carboidratos',
    originalFood: 'Macarrão tradicional de farinha refinada',
    swapFood: 'Espaguete de Abobrinha ou Pupunha com molho de tomate caseiro',
    caloriesSaved: '-220 kcal / -40g carboidratos',
    benefit: 'Leve, sem farinhas inflamatórias e com alto teor de água sacietogênica.',
    nutriTip: 'Mantenha a abobrinha al dente para melhor textura.',
  },
  {
    id: 's3',
    category: 'carboidratos',
    originalFood: 'Batata inglesa frita em óleo',
    swapFood: 'Batata-doce ou abóbora assada na Airfryer com páprica',
    caloriesSaved: '-210 kcal / -18g gorduras saturadas',
    benefit: 'Índice glicêmico moderado e fonte natural de betacaroteno.',
    nutriTip: 'Pincele suavemente com azeite extravirgem e polvilhe orégano seco.',
  },
  {
    id: 's4',
    category: 'paes-farinhas',
    originalFood: 'Pão francês de padaria com margarina',
    swapFood: 'Crepioca proteica (1 ovo + 1 colher de tapioca) com cottage',
    caloriesSaved: '-140 kcal / sem gordura vegetal hidrogenada',
    benefit: 'Proteína pura do ovo promove saciedade prolongada por horas.',
    nutriTip: 'Acrescente 1 colher de chia para enriquecer em ômega-3.',
  },
  {
    id: 's5',
    category: 'paes-farinhas',
    originalFood: 'Torrada industrializada convencional',
    swapFood: 'Pão 100% integral com sementes ou Waffle de aveia',
    caloriesSaved: '-80 kcal / +5g fibras ativas',
    benefit: 'Evita óleos vegetais inflamatórios e açúcar adicionado.',
    nutriTip: 'Verifique se o primeiro ingrediente da lista é farinha integral.',
  },
  {
    id: 's6',
    category: 'proteinas',
    originalFood: 'Cortes bovinos com capa de gordura grossa',
    swapFood: 'Patinho moído magro, filé mignon ou alcatra limpa',
    caloriesSaved: '-230 kcal / -20g gordura saturada',
    benefit: 'Mesmo teor de proteína de alto valor biológico com muito menos calorias.',
    nutriTip: 'Solicite no açougue para moer duas vezes uma peça bem limpa.',
  },
  {
    id: 's7',
    category: 'proteinas',
    originalFood: 'Salsicha, linguiça e embutidos ultraprocessados',
    swapFood: 'Peito de frango desfiado temperado ou ovos cozidos',
    caloriesSaved: '-180 kcal / -950mg de sódio',
    benefit: 'Livre de nitritos industriais e excesso de sódio que causa inchaço.',
    nutriTip: 'Mantenha potes de frango desfiado prontos na geladeira para refeições rápidas.',
  },
  {
    id: 's8',
    category: 'lanches',
    originalFood: 'Biscoito recheado de chocolate',
    swapFood: 'Creme de abacate batido com cacau 100% e adoçante natural',
    caloriesSaved: '-180 kcal / zero açúcar refinado',
    benefit: 'Gorduras monoinsaturadas boas que acalmam a vontade de doces.',
    nutriTip: 'Utilize 1/4 de abacate maduro com 1 colher de sopa de cacau puro.',
  },
  {
    id: 's9',
    category: 'lanches',
    originalFood: 'Salgadinho de pacote ultraprocessado',
    swapFood: 'Grão-de-bico crocante assado com ervas finas',
    caloriesSaved: '-150 kcal / +8g proteína vegetal',
    benefit: 'Crocância natural sem conservantes e rica em triptofano.',
    nutriTip: 'Seque bem o grão cozido antes de levar ao forno ou Airfryer.',
  },
  {
    id: 's10',
    category: 'doces-bebidas',
    originalFood: 'Refrigerante açucarado tradicional (lata 350ml)',
    swapFood: 'Água gaseificada com rodelas de limão e folhas de hortelã',
    caloriesSaved: '-149 kcal / -37g açúcar refinado',
    benefit: 'Hidratação profunda sem calorias líquidas vazias.',
    nutriTip: 'Sirva em taça com bastante gelo para um frescor especial.',
  },
  {
    id: 's11',
    category: 'molhos',
    originalFood: 'Maionese industrializada comum',
    swapFood: 'Creme de ricota light temperado com azeite e limão espremido',
    caloriesSaved: '-90 kcal por colher de sopa',
    benefit: 'Fonte pura de proteína do soro lácteo sem espessantes químicos.',
    nutriTip: 'Adicione salsinha fresca picada e alho para um molho aromático.',
  },
];

// 7-Day Anti-Inchaço Emergency Protocol
export const ANTI_INCHACO_PROTOCOL = {
  title: 'Desafio 7 Dias Anti-Inchaço',
  subtitle: 'Protocolo focado na liberação de líquidos retidos e desinflamação.',
  goldenRules: [
    'Tome o Shot Matinal em jejum antes de qualquer refeição.',
    'Consuma no mínimo 3 Litros de água fracionados ao longo do dia.',
    'Elimine refrigerantes, bebidas alcoólicas e alimentos com excesso de sódio.',
    'Pratique caminhada ou movimentação diária de 20 minutos.',
  ],
  morningShot: {
    title: 'Shot Matinal Anti-Inchaço',
    ingredients: [
      'Suco de 1/2 limão espremido na hora',
      '50ml de água morna ou temperatura ambiente',
      '1 colher (café) de cúrcuma pura (açafrão-da-terra)',
      '1 pitada de pimenta-do-reino moída',
      '1 colher (café) de gengibre em pó ou ralado',
      '10 a 15 gotas de extrato de própolis',
    ],
    mode: 'Misture bem os ingredientes em um copo pequeno e beba de uma só vez em jejum. Aguarde 20 minutos antes do café da manhã.',
  },
  teas: [
    { name: 'Chá de Cavalinha com Hibisco', time: '10:00 da manhã', benefit: 'Ação diurética sem esgotar minerais essenciais.' },
    { name: 'Chá Verde com Canela', time: '15:00 da tarde', benefit: 'Estímulo termogênico suave e disposição à tarde.' },
    { name: 'Chá de Camomila com Melissa', time: '21:00 da noite', benefit: 'Relaxamento muscular e preparo para descanso reparador.' },
  ],
  daysRoutine: [
    { day: 1, focus: 'Ativação Renal', tip: 'Eliminação inicial de retenção com o shot e hidratação correta.' },
    { day: 2, focus: 'Cuidado Hepático', tip: 'Inclusão de folhas verdes escuras no almoço e jantar.' },
    { day: 3, focus: 'Regulação Intestinal', tip: 'Aporte de fibras solúveis como chia ou aveia na alimentação.' },
    { day: 4, focus: 'Equilíbrio de Sódio', tip: 'Temperos puramente naturais: ervas frescas, cúrcuma e orégano.' },
    { day: 5, focus: 'Circulação Ativa', tip: 'Caminhada moderada para ativar a bomba muscular dos membros inferiores.' },
    { day: 6, focus: 'Digestão Noturna Leve', tip: 'Jantar com sopas ou grelhados de digestão fácil antes das 20h.' },
    { day: 7, focus: 'Sensação de Leveza', tip: 'Avalie a sensação corporal e continuidade dos novos hábitos.' },
  ],
};

// Guia Marmita Fit
export const MARMITA_GUIDE = {
  title: 'Guia Marmita Fit',
  subtitle: 'Planejamento e organização de refeições saudáveis em 90 minutos.',
  rules: [
    'Escolha 2 proteínas magras principais para a semana',
    'Escolha 2 fontes de carboidratos complexos (como abóbora ou batata-doce)',
    'Escolha legumes consistentes que preservam textura ao descongelar',
    'Utilize potes de vidro herméticos ou livres de bisfenol A (BPA)',
  ],
  recipes: [
    {
      title: 'Frango Cremoso com Purê de Abóbora Cabotiá',
      portion: '3 porções',
      ingredients: ['450g de peito de frango cozido e desfiado', '500g de abóbora cabotiá cozida', '2 colheres de creme de ricota light', 'Cúrcuma, alho e cheiro verde'],
      prep: 'Amasse a abóbora com o creme de ricota até homogeneizar. Refogue o frango com alho, cúrcuma e ervas. Disponha lado a lado no recipiente.',
    },
    {
      title: 'Patinho Moído com Cenoura e Vagem',
      portion: '3 porções',
      ingredients: ['450g de patinho moído fresco', '1 cenoura média ralada', '1 xícara de vagem picada', 'Cebola picada e páprica'],
      prep: 'Doure a cebola, sele o patinho moído. Adicione a vagem e a cenoura, tampando a panela por 5 minutos até amaciar preservando firmeza.',
    },
    {
      title: 'Filé de Peixe com Brócolis e Ervas',
      portion: '2 porções',
      ingredients: ['350g de filé de peixe branco', '1 maço de brócolis fresco', 'Suco de limão', 'Azeite de oliva e alecrim'],
      prep: 'Tempere o peixe com limão e alecrim. Grelhe rapidamente por cerca de 3 minutos de cada lado. Cozinhe o brócolis no vapor al dente.',
    },
  ],
  freezingTips: [
    'Espere a comida esfriar totalmente antes de vedar a tampa.',
    'Armazenamento em geladeira comum: consumo em até 3 dias.',
    'Armazenamento em congelador: até 30 dias com textura e sabor preservados.',
    'Descongelamento ideal: transferir para a geladeira na noite anterior.',
  ],
};

// 20 Doces Fit Permitidos
export const FIT_DESSERTS: RecipeItem[] = [
  {
    id: 'd1',
    title: 'Mousse de Chocolate com Iogurte Natural',
    category: 'Chocolatudos',
    time: '5 min',
    calories: '110 kcal',
    protein: '12g',
    difficulty: 'Fácil',
    tag: 'Prático',
    ingredients: ['1 pote de iogurte natural desnatado consistente (160g)', '2 colheres de cacau em pó 100%', 'Adoçante natural a gosto'],
    instructions: ['Adicione o iogurte, o cacau puro e o adoçante em uma tigela.', 'Bata com garfo ou fouet até obter textura aerada e homogênea.', 'Leve ao congelador por 15 minutos antes de consumir.'],
  },
  {
    id: 'd2',
    title: 'Taça de Uvas Verdes com Creme Leve',
    category: 'Gelados',
    time: '10 min',
    calories: '95 kcal',
    protein: '8g',
    difficulty: 'Fácil',
    tag: 'Refrescante',
    ingredients: ['1 xícara de uvas verdes sem semente cortadas', '1 pote de iogurte natural com 1 colher de leite em pó desnatado', '30g de chocolate 70% cacau derretido'],
    instructions: ['Disponha as uvas no fundo de uma taça.', 'Cubra com o creme de iogurte e leite em pó.', 'Finalize com o chocolate meio amargo derretido por cima e refrigere.'],
  },
  {
    id: 'd3',
    title: 'Brigadeiro Fit de Colher',
    category: 'Chocolatudos',
    time: '8 min',
    calories: '85 kcal',
    protein: '9g',
    difficulty: 'Fácil',
    tag: 'Sem Açúcar',
    ingredients: ['150ml de leite desnatado ou vegetal', '2 colheres (sopa) de cacau puro 100%', '2 colheres (sopa) de leite em pó desnatado', 'Adoçante culinário a gosto'],
    instructions: ['Leve todos os ingredientes ao fogo brando em panela antiaderente.', 'Mexa continuamente com espátula até engrossar e soltar do fundo.', 'Deixe esfriar em recipiente de louça.'],
  },
  {
    id: 'd4',
    title: 'Picolé de Frutas Vermelhas com Iogurte',
    category: 'Gelados',
    time: '10 min',
    calories: '65 kcal',
    protein: '7g',
    difficulty: 'Fácil',
    tag: 'Verão',
    ingredients: ['1 xícara de morangos e amoras picados', '1 pote de iogurte natural desnatado', 'Gotas de limão e adoçante natural'],
    instructions: ['Bata metade das frutas com o iogurte e o adoçante.', 'Misture a outra metade das frutas em pedaços.', 'Coloque em formas de picolé e congele por 4 horas.'],
  },
  {
    id: 'd5',
    title: 'Bolo de Caneca de Cacau e Aveia',
    category: 'Rápidos',
    time: '3 min',
    calories: '135 kcal',
    protein: '12g',
    difficulty: 'Fácil',
    tag: 'Expresso',
    ingredients: ['1 ovo inteiro', '1 colher (sopa) de cacau puro 100%', '1 colher (sopa) de farelo de aveia', '1 colher de adoçante natural', '1 pitada de fermento químico'],
    instructions: ['Bata o ovo na própria caneca com garfo.', 'Adicione o cacau, farelo de aveia e adoçante até homogeneizar.', 'Junte o fermento e leve ao micro-ondas por 60 a 70 segundos.'],
  },
];

// 21 Days of Motivation Audios
export const MOTIVATION_AUDIOS: AudioSession[] = [
  {
    day: 1,
    title: 'O Poder da Decisão Consciente',
    theme: 'Mentalidade',
    duration: '4:15 min',
    summary: 'Construir um corpo saudável é um processo contínuo de respeito ao próprio ritmo, superando pressões estéticas com foco no bem-estar.',
    affirmation: 'Eu escolho cuidar de mim hoje. Cada hábito saudável é um ato de respeito ao meu corpo.',
  },
  {
    day: 2,
    title: 'Manejo da Impulsividade Noturna',
    theme: 'Comportamento',
    duration: '3:48 min',
    summary: 'A vontade de comer no período noturno frequentemente reflete cansaço acumulado. Reconhecer a fadiga ajuda a evitar excessos alimentares.',
    affirmation: 'Eu escuto as necessidades reais do meu corpo e acolho meu cansaço com descanso, não com excessos.',
  },
  {
    day: 3,
    title: 'A Regra da Consistência Realista',
    theme: 'Constância',
    duration: '5:10 min',
    summary: 'Oscilações ocasionais fazem parte da vida cotidiana. Retomar o plano com serenidade é muito mais eficaz do que qualquer atitude punitiva.',
    affirmation: 'Eu não busco perfeição inalcançável; cultivo constância serena e persistente.',
  },
  {
    day: 4,
    title: 'A Relação Positiva com o Espelho',
    theme: 'Autoestima',
    duration: '4:30 min',
    summary: 'O cuidado com a saúde surge da valorização do próprio corpo, e não de cobranças severas ou comparações desiguais.',
    affirmation: 'Meu corpo merece meu carinho, respeito e cuidado diário.',
  },
  {
    day: 5,
    title: 'Foco Pessoal em Ambientes Sociais',
    theme: 'Autonomia',
    duration: '4:02 min',
    summary: 'Manter suas escolhas nutricionais com calma e firmeza em eventos sociais reforça sua autonomia e segurança pessoal.',
    affirmation: 'Minhas decisões de saúde me pertencem e protegem minha vitalidade.',
  },
  {
    day: 6,
    title: 'Superando o Pensamento Tudo ou Nada',
    theme: 'Psicologia',
    duration: '4:45 min',
    summary: 'Pequenos passos mantidos com regularidade geram transformações muito mais sustentáveis do que mudanças extremas.',
    affirmation: 'Avanço um passo de cada vez com tranquilidade e paciência.',
  },
  {
    day: 7,
    title: 'Reconhecendo as Pequenas Vitórias',
    theme: 'Reforço Positivo',
    duration: '5:00 min',
    summary: 'Cada dia em que você escolhe alimentos frescos e hidratação adequada é um avanço significativo que merece reconhecimento.',
    affirmation: 'Comemoro meu progresso diário e confio no meu caminho.',
  },
];
