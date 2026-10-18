import { CourseUnit, Exercise, StudyWeek } from '../models/course.model';

export const CURRICULUM_A2_B1_UNITS: CourseUnit[] = [
  // A2 დონე
  {
    id: 'a2-unit-11',
    level: 'A2',
    unitNumber: 11,
    titleGe: 'Present Simple vs Present Continuous და პროფესიები',
    titleEn: 'Present Simple vs Continuous & Jobs',
    descriptionGe: 'მუდმივი ჩვევები თუ დროებითი მოქმედებები? დროების გარჩევა და პროფესიების ლექსიკა.',
    estimatedMinutes: 30,
    icon: '💼',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Present Simple vs Continuous', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-12',
    level: 'A2',
    unitNumber: 12,
    titleGe: 'ზედსართავი სახელების შედარება (Comparatives & Superlatives)',
    titleEn: 'Comparatives & Superlatives, Shopping',
    descriptionGe: 'როგორ შევადაროთ საგნები (უფრო დიდი, ყველაზე სწრაფი) და საყიდლების ლექსიკა.',
    estimatedMinutes: 30,
    icon: '🛍️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Comparatives & Superlatives', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-13',
    level: 'A2',
    unitNumber: 13,
    titleGe: 'სამომავლო გეგმები: Be going to vs Will',
    titleEn: 'Future Forms: Be going to vs Will & Travel',
    descriptionGe: 'წინასწარ დაგეგმილი გადაწყვეტილებები (going to) და უეცარი დაპირებები/პროგნოზი (will).',
    estimatedMinutes: 30,
    icon: '✈️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Going to vs Will', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-14',
    level: 'A2',
    unitNumber: 14,
    titleGe: 'Present Perfect — გამოცდილება (Ever, Never, Just, Already)',
    titleEn: 'Present Perfect for Life Experiences',
    descriptionGe: 'მოქმედება, რომელიც წარსულში მოხდა, მაგრამ შედეგი ახლა ჩანს. Have/Has + V3.',
    estimatedMinutes: 35,
    icon: '🏆',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Present Perfect', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-15',
    level: 'A2',
    unitNumber: 15,
    titleGe: 'მოდალური ზმნები: Must, Have to, Should და ჯანმრთელობა',
    titleEn: 'Modals: Must, Have to, Should & Health',
    descriptionGe: 'ვალდებულება (must / have to), რჩევა (should) და ექიმთან ვიზიტის ლექსიკა.',
    estimatedMinutes: 30,
    icon: '🩺',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Must, Have to, Should', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-16',
    level: 'A2',
    unitNumber: 16,
    titleGe: 'Past Continuous vs Past Simple (When / While)',
    titleEn: 'Past Continuous vs Past Simple & Stories',
    descriptionGe: 'წარსულში მიმდინარე მოქმედება, რომელიც სხვა მოქმედებამ შეწყვიტა.',
    estimatedMinutes: 30,
    icon: '📖',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Past Continuous vs Simple', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-17',
    level: 'A2',
    unitNumber: 17,
    titleGe: 'რაოდენობები: Much, Many, A lot of, Too, Enough',
    titleEn: 'Quantifiers & Restaurant Vocabulary',
    descriptionGe: 'ბევრი, ცოტა, ზედმეტად და საკმარისი. შეკვეთა კაფესა და რესტორანში.',
    estimatedMinutes: 25,
    icon: '☕',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Quantifiers', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-18',
    level: 'A2',
    unitNumber: 18,
    titleGe: 'Zero & First Conditional (პირობითი წინადადებები 0 და 1)',
    titleEn: 'Conditionals 0 & 1, Nature & Environment',
    descriptionGe: 'ფაქტები და რეალური მომავალი შედეგები (If it rains, I will stay at home).',
    estimatedMinutes: 30,
    icon: '🌱',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Conditionals 0 & 1', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-19',
    level: 'A2',
    unitNumber: 19,
    titleGe: 'გერუნდი და ინფინიტივი (Verb + -ing vs To + Verb)',
    titleEn: 'Gerund vs Infinitive & Phrasal Verbs 1',
    descriptionGe: 'როდის გამოიყენება ზმნის ინგ-იანი ფორმა და როდის to-ნაწილაკი. გავრცელებული ფრაზული ზმნები.',
    estimatedMinutes: 30,
    icon: '🔄',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Gerund vs Infinitive', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a2-unit-20',
    level: 'A2',
    unitNumber: 20,
    titleGe: 'მიმართებითი ნაცვალსახელები (Who, Which, That) + A2 ფინალი',
    titleEn: 'Relative Clauses & A2 Level Final Test',
    descriptionGe: 'წინადადებების გაერთიანება Who/Which/That-ით და A2 დონის შემაჯამებელი ტესტი.',
    estimatedMinutes: 40,
    icon: '🎓',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Relative Clauses', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },

  // B1 დონე
  {
    id: 'b1-unit-21',
    level: 'B1',
    unitNumber: 21,
    titleGe: 'Present Perfect vs Past Simple და For/Since',
    titleEn: 'Present Perfect vs Past Simple, Career & Work',
    descriptionGe: 'ზუსტი დრო წარსულში თუ კავშირი აწმყოსთან? გასაუბრებისა და CV-ის ლექსიკა.',
    estimatedMinutes: 35,
    icon: '👔',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Present Perfect vs Past Simple', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-22',
    level: 'B1',
    unitNumber: 22,
    titleGe: 'Present Perfect Continuous და წარსული ჩვევები (Used to)',
    titleEn: 'Present Perfect Continuous & Used to, Tech',
    descriptionGe: 'რამდენი ხანია რაღაც გრძელდება (have been doing) და წარსულის ჩვევები (used to). ტექნოლოგიები.',
    estimatedMinutes: 35,
    icon: '💻',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Present Perfect Continuous & Used to', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-23',
    level: 'B1',
    unitNumber: 23,
    titleGe: 'Second Conditional — წარმოსახვითი სიტუაციები და ოცნებები',
    titleEn: 'Second Conditional, Dreams & Money',
    descriptionGe: 'არარეალური აწმყო და ოცნებები: If I had money, I would buy a car.',
    estimatedMinutes: 35,
    icon: '💭',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Second Conditional', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-24',
    level: 'B1',
    unitNumber: 24,
    titleGe: 'Passive Voice (ვნებითი გვარი — აწმყო და წარსული)',
    titleEn: 'Passive Voice (Present & Past), Inventions',
    descriptionGe: 'როდესაც მთავარია მოქმედების ობიექტი და არა შემსრულებელი (The car was made in Japan).',
    estimatedMinutes: 35,
    icon: '⚙️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Passive Voice', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-25',
    level: 'B1',
    unitNumber: 25,
    titleGe: 'Past Perfect (წინარე წარსული დრო) და ისტორიების თხრობა',
    titleEn: 'Past Perfect (Had done) & Storytelling',
    descriptionGe: 'მოქმედება, რომელიც წარსულში სხვა მოქმედებაზე ადრე მოხდა (When I arrived, the train had left).',
    estimatedMinutes: 35,
    icon: '🎬',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Past Perfect', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-26',
    level: 'B1',
    unitNumber: 26,
    titleGe: 'მოდალური ზმნები ლოგიკური დასკვნისთვის (Must, Might, Can\'t)',
    titleEn: 'Modals of Deduction (Must, Might, Can\'t)',
    descriptionGe: 'როგორ გამოვხატოთ ეჭვი ან 100%-იანი დარწმუნებულობა (He must be at home; She can\'t be hungry).',
    estimatedMinutes: 35,
    icon: '🕵️‍♂️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Modals of Deduction', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-27',
    level: 'B1',
    unitNumber: 27,
    titleGe: 'Reported Speech (ირიბი ნათქვამი)',
    titleEn: 'Reported Speech & Communication',
    descriptionGe: 'სხვისი ნათქვამის გადმოცემა და დროების ერთი საფეხურით უკან გადაწევა.',
    estimatedMinutes: 35,
    icon: '🗣️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Reported Speech', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-28',
    level: 'B1',
    unitNumber: 28,
    titleGe: 'ფრაზული ზმნები (ნაწილი 2) და ყოველდღიური იდიომები',
    titleEn: 'Advanced Phrasal Verbs & Common Idioms',
    descriptionGe: 'სასაუბრო ფრაზები: Give up, Look forward to, Break a leg, Piece of cake და სხვა.',
    estimatedMinutes: 35,
    icon: '💡',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Phrasal Verbs & Idioms', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-29',
    level: 'B1',
    unitNumber: 29,
    titleGe: 'ტექსტის დამაკავშირებლები (Although, However, Therefore)',
    titleEn: 'Linking Words & Essay/Email Writing',
    descriptionGe: 'როგორ დავწეროთ გამართული იმეილი ან მოკლე ესე ლოგიკური გადასვლებით.',
    estimatedMinutes: 35,
    icon: '✍️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Linking Words', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'b1-unit-30',
    level: 'B1',
    unitNumber: 30,
    titleGe: 'B1 დონის სრული შემაჯამებელი გამოცდა',
    titleEn: 'B1 Comprehensive Final Exam',
    descriptionGe: 'ყველა ნასწავლი თემის, დროისა და ლექსიკის საბოლოო შემოწმება და სერტიფიცირება.',
    estimatedMinutes: 60,
    icon: '🏆',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'B1 Final Review', summaryGe: '', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  }
];

export const PLACEMENT_TEST_QUESTIONS: Exercise[] = [
  {
    id: 'pt-1',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'აირჩიე სწორი ვარიანტი (A1):',
    question: 'I ___ from Rustavi, Georgia.',
    options: ['am', 'is', 'are', 'be'],
    correctAnswer: 'am',
    explanationGe: '"I" პირთან ყოველთვის გამოიყენება "am".'
  },
  {
    id: 'pt-2',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'აირჩიე სწორი არტიკლი (A1):',
    question: 'She wants to buy ___ apple and a banana.',
    options: ['a', 'an', 'the', '—'],
    correctAnswer: 'an',
    explanationGe: 'apple იწყება ხმოვანი ბგერით, ამიტომ სჭირდება "an".'
  },
  {
    id: 'pt-3',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'მრავლობითი რიცხვი (A1):',
    question: 'There are five ___ in the park.',
    options: ['child', 'childs', 'children', 'childrens'],
    correctAnswer: 'children',
    explanationGe: 'child-ის არაწესიერი მრავლობითი ფორმაა children.'
  },
  {
    id: 'pt-4',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'კუთვნილება (A1):',
    question: 'Look at Nika. ___ brother is a developer.',
    options: ['Her', 'His', 'Their', 'Its'],
    correctAnswer: 'His',
    explanationGe: 'ნიკა მამრობითი სქესია, ამიტომ კუთვნილებაა "His" (მისი).'
  },
  {
    id: 'pt-5',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'Present Simple (A1):',
    question: 'He ___ work at the weekend.',
    options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'],
    correctAnswer: 'doesn\'t',
    explanationGe: 'He/She/It პირებთან აწმყო მარტივ დროში უარყოფაა "doesn\'t".'
  },
  {
    id: 'pt-6',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'Past Simple (A1-A2):',
    question: 'Where ___ you yesterday evening?',
    options: ['was', 'were', 'are', 'did'],
    correctAnswer: 'were',
    explanationGe: 'You პირთან წარსულ დროში გამოიყენება "were".'
  },
  {
    id: 'pt-7',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'Present Continuous (A2):',
    question: 'Listen! Someone ___ the piano.',
    options: ['plays', 'is playing', 'play', 'played'],
    correctAnswer: 'is playing',
    explanationGe: '"Listen!" მიუთითებს, რომ მოქმედება ახლა მიმდინარეობს (Present Continuous).'
  },
  {
    id: 'pt-8',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'შედარებითი ხარისხი (A2):',
    question: 'Tbilisi is ___ than Rustavi.',
    options: ['big', 'biger', 'bigger', 'more big'],
    correctAnswer: 'bigger',
    explanationGe: 'ერთმარცვლიან ზედსართავებს ემატება -er და ბოლო თანხმოვანი ორმაგდება (bigger).'
  },
  {
    id: 'pt-9',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'მომავალი დრო (A2):',
    question: 'Look at those dark clouds! It ___ rain.',
    options: ['will', 'is going to', 'rains', 'shall'],
    correctAnswer: 'is going to',
    explanationGe: 'როდესაც აწმყოში გვაქვს ცხადი მტკიცებულება (შავი ღრუბლები), გამოიყენება "is going to".'
  },
  {
    id: 'pt-10',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'Present Perfect (A2):',
    question: '___ you ever visited London?',
    options: ['Did', 'Have', 'Has', 'Do'],
    correctAnswer: 'Have',
    explanationGe: 'ცხოვრებისეული გამოცდილების კითხვისას (ever) გამოიყენება Present Perfect (Have you ever).'
  },
  {
    id: 'pt-11',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'First Conditional (A2-B1):',
    question: 'If you study hard, you ___ the exam.',
    options: ['pass', 'passed', 'will pass', 'would pass'],
    correctAnswer: 'will pass',
    explanationGe: 'I ტიპის პირობით წინადადებაში If-იან ნაწილში აწმყოა, მთავარში — Future (will pass).'
  },
  {
    id: 'pt-12',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'For vs Since (B1):',
    question: 'I have lived in this city ___ five years.',
    options: ['since', 'for', 'during', 'from'],
    correctAnswer: 'for',
    explanationGe: 'დროის ხანგრძლივობასთან (5 წელი) გამოიყენება "for".'
  },
  {
    id: 'pt-13',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'Second Conditional (B1):',
    question: 'If I ___ a million dollars, I would travel around the world.',
    options: ['have', 'had', 'will have', 'would have'],
    correctAnswer: 'had',
    explanationGe: 'წარმოსახვით პირობაში (II ტიპი) If-ის შემდეგ იწერება Past Simple (had).'
  },
  {
    id: 'pt-14',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'Passive Voice (B1):',
    question: 'This bridge ___ in 1995.',
    options: ['built', 'was built', 'is built', 'has built'],
    correctAnswer: 'was built',
    explanationGe: 'ხიდი თვითონ არ აშენებულა (ვნებითი გვარი წარსულში: was + V3).'
  },
  {
    id: 'pt-15',
    unitId: 'placement',
    type: 'multiple-choice',
    promptGe: 'Past Perfect (B1):',
    question: 'When we arrived at the cinema, the film ___ already started.',
    options: ['had', 'has', 'was', 'did'],
    correctAnswer: 'had',
    explanationGe: 'ფილმი ჩვენს მისვლამდე დაიწყო (წინარე წარსული: had + V3).'
  }
];

export const STUDY_PLAN_WEEKS: StudyWeek[] = [
  {
    weekNumber: 1,
    level: 'A1',
    titleGe: 'კვირა 1: საფუძვლები, არტიკლები და ოჯახი',
    goalGe: 'გაიარე პირველი 3 იუნიტი, ისწავლე 70 სიტყვა და გაიგე ზმნა To Be-ს არსი.',
    days: [
      { id: 'w1-d1', dayTitleGe: 'დღე 1: Placement Test & Unit 1 ლექსიკა', descriptionGe: 'გაიარე დონის ტესტი და ისწავლე Unit 1-ის მისალმების სიტყვები Web Speech აუდიოთი.', durationMinutes: 45, linkedUnitId: 'a1-unit-1' },
      { id: 'w1-d2', dayTitleGe: 'დღე 2: ზმნა "To Be" და სავარჯიშოები', descriptionGe: 'წაიკითხე Unit 1-ის გრამატიკა (am/is/are) და შეასრულე 7-ვე ინტერაქტიული სავარჯიშო.', durationMinutes: 50, linkedUnitId: 'a1-unit-1' },
      { id: 'w1-d3', dayTitleGe: 'დღე 3: Unit 2 არტიკლები და რიცხვები', descriptionGe: 'ისწავლე A/An/The-ს გარჩევა, მრავლობითი რიცხვი და რიცხვები 1-დან 100-მდე.', durationMinutes: 55, linkedUnitId: 'a1-unit-2' },
      { id: 'w1-d4', dayTitleGe: 'დღე 4: This / That და სავარჯიშოები', descriptionGe: 'გაიარე Unit 2-ის სავარჯიშოები და იმუშავე Leitner-ის ფლეშ-ბარათებზე.', durationMinutes: 45, linkedUnitId: 'a1-unit-2' },
      { id: 'w1-d5', dayTitleGe: 'დღე 5: Unit 3 ოჯახი და Have Got', descriptionGe: 'ისწავლე ოჯახის წევრები, կუთვნილება (\'s, his/her) და Have/Has got.', durationMinutes: 50, linkedUnitId: 'a1-unit-3' },
      { id: 'w1-d6', dayTitleGe: 'დღე 6: Unit 3-ის სავარჯიშოები და ტესტი', descriptionGe: 'დაასრულე Unit 3, ჩააბარე მოკლე ტესტი და გადახედე შეცდომების განყოფილებას.', durationMinutes: 50, linkedUnitId: 'a1-unit-3' },
      { id: 'w1-d7', dayTitleGe: 'დღე 7: კვირის შეჯამება და ფლეშ-ბარათები', descriptionGe: 'გაიმეორე პირველი 3 იუნიტის ყველა სიტყვა Leitner Flashcards-ით (15-20 წთ).', durationMinutes: 30 }
    ]
  },
  {
    weekNumber: 2,
    level: 'A1',
    titleGe: 'კვირა 2: ყოველდღიური რუტინა და კითხვების დასმა',
    goalGe: 'დაეუფლე Present Simple-ს (Do/Does) და ისწავლე როგორ დასვა Wh- კითხვები.',
    days: [
      { id: 'w2-d1', dayTitleGe: 'დღე 8: Unit 4 Present Simple ლექსიკა', descriptionGe: 'დილის და საღამოს რუტინის ზმნები და დროის მაჩვენებლები.', durationMinutes: 45, linkedUnitId: 'a1-unit-4' },
      { id: 'w2-d2', dayTitleGe: 'დღე 9: Do / Does გრამატიკა', descriptionGe: 'უარყოფა (don\'t / doesn\'t) და კითხვები. პრაქტიკული მაგალითები.', durationMinutes: 50, linkedUnitId: 'a1-unit-4' },
      { id: 'w2-d3', dayTitleGe: 'დღე 10: Unit 5 Wh- კითხვები', descriptionGe: 'What, Where, When, Who, Why, How კითხვების აგება.', durationMinutes: 45, linkedUnitId: 'a1-unit-5' },
      { id: 'w2-d4', dayTitleGe: 'დღე 11: საჭმელი და Some/Any', descriptionGe: 'თვლადი და უთვლადი სახელები. როდის ვამბობთ some-ს და any-ს.', durationMinutes: 50, linkedUnitId: 'a1-unit-5' },
      { id: 'w2-d5', dayTitleGe: 'დღე 12: Unit 6 ქალაქი და There is/are', descriptionGe: 'მაღაზიები, ქუჩები და ადგილმდებარეობის წინდებულები (in, on, at, next to).', durationMinutes: 50, linkedUnitId: 'a1-unit-6' },
      { id: 'w2-d6', dayTitleGe: 'დღე 13: მარშრუტის ახსნა ინგლისურად', descriptionGe: 'დიალოგი: როგორ მივიდე ბანკამდე? სავარჯიშოების სრული ბლოკი.', durationMinutes: 45, linkedUnitId: 'a1-unit-6' },
      { id: 'w2-d7', dayTitleGe: 'დღე 14: კვირის შეჯამება', descriptionGe: 'შეცდომების ბანკის გასუფთავება და სიტყვების გამეორება.', durationMinutes: 30 }
    ]
  },
  {
    weekNumber: 3,
    level: 'A1',
    titleGe: 'კვირა 3: მოქმედება ამ წუთას და პირადი უნარები',
    goalGe: 'ისწავლე Present Continuous და მოდალური ზმნა Can/Can\'t.',
    days: [
      { id: 'w3-d1', dayTitleGe: 'დღე 15: Unit 7 რა ხდება ახლა?', descriptionGe: 'Present Continuous-ის წარმოება (am/is/are + -ing).', durationMinutes: 50, linkedUnitId: 'a1-unit-7' },
      { id: 'w3-d2', dayTitleGe: 'დღე 16: ტანსაცმელი და ამინდი', descriptionGe: 'რა მაცვია დღეს და როგორი ამინდია გარეთ.', durationMinutes: 45, linkedUnitId: 'a1-unit-7' },
      { id: 'w3-d3', dayTitleGe: 'დღე 17: Unit 8 ზმნა Can / Can\'t', descriptionGe: 'უნარებისა და შესაძლებლობების გამოხატვა (I can drive/swim).', durationMinutes: 45, linkedUnitId: 'a1-unit-8' },
      { id: 'w3-d4', dayTitleGe: 'დღე 18: სხეულის ნაწილები და ჰობი', descriptionGe: 'სპორტისა და ჯანმრთელობის საწყისი ლექსიკა.', durationMinutes: 45, linkedUnitId: 'a1-unit-8' },
      { id: 'w3-d5', dayTitleGe: 'დღე 19: წინადადებების აგების პრაქტიკა', descriptionGe: 'Present Simple vs Present Continuous შედარება პრაქტიკაში.', durationMinutes: 50 },
      { id: 'w3-d6', dayTitleGe: 'დღე 20: მოსმენის დღე (Listening Focus)', descriptionGe: 'ყველა ნასწავლი იუნიტის აუდიო დიალოგების მოსმენა Web Speech-ით.', durationMinutes: 45 },
      { id: 'w3-d7', dayTitleGe: 'დღე 21: კვირის შეჯამება', descriptionGe: 'ფლეშ-ბარათების მე-3 და მე-4 ყუთების შემოწმება.', durationMinutes: 35 }
    ]
  },
  {
    weekNumber: 4,
    level: 'A1',
    titleGe: 'კვირა 4: წარსული დრო (Past Simple) და A1 ფინალური ტესტი',
    goalGe: 'დახურე A1 დონე: ისწავლე Was/Were და ძირითადი არაწესიერი ზმნები.',
    days: [
      { id: 'w4-d1', dayTitleGe: 'დღე 22: Unit 9 ზმნა To Be წარსულში', descriptionGe: 'Was და Were-ის გამოყენება. თარიღები და წლები.', durationMinutes: 50, linkedUnitId: 'a1-unit-9' },
      { id: 'w4-d2', dayTitleGe: 'დღე 23: სად იყავი გუშინ?', descriptionGe: 'კითხვები: Were you at home? დიალოგები და სავარჯიშოები.', durationMinutes: 45, linkedUnitId: 'a1-unit-9' },
      { id: 'w4-d3', dayTitleGe: 'დღე 24: Unit 10 წესიერი ზმნები (-ed)', descriptionGe: 'Walked, played, watched და მათი წარმოთქმა (/t/, /d/, /ɪd/).', durationMinutes: 50, linkedUnitId: 'a1-unit-10' },
      { id: 'w4-d4', dayTitleGe: 'დღე 25: არაწესიერი ზმნები (Top 30)', descriptionGe: 'Went, saw, had, came, bought, took და მათი გამოყენება.', durationMinutes: 55, linkedUnitId: 'a1-unit-10' },
      { id: 'w4-d5', dayTitleGe: 'დღე 26: Did და Didn\'t კითხვასა და უარყოფაში', descriptionGe: 'როგორ დავსვათ კითხვები წარსულში სწორად.', durationMinutes: 45, linkedUnitId: 'a1-unit-10' },
      { id: 'w4-d6', dayTitleGe: 'დღე 27: A1 დონის შემაჯამებელი გამოცდა', descriptionGe: 'სრული 30-კითხვიანი ტესტი A1-ის ყველა თემაზე.', durationMinutes: 60, linkedUnitId: 'a1-unit-10' },
      { id: 'w4-d7', dayTitleGe: 'დღე 28: A1-ის შედეგების ანალიზი', descriptionGe: 'შეცდომების გამოსწორება და A2-სთვის მომზადება.', durationMinutes: 30 }
    ]
  },
  {
    weekNumber: 5,
    level: 'A2',
    titleGe: 'კვირა 5: A2-ზე გადასვლა — დროების სინთეზი და ხარისხები',
    goalGe: 'ისწავლე შედარებითი ხარისხები და მომავალი დროის ფორმები.',
    days: [
      { id: 'w5-d1', dayTitleGe: 'დღე 29: Unit 11 დროების გარჩევა', descriptionGe: 'Present Simple vs Continuous ცხოვრებისეულ კონტექსტში.', durationMinutes: 45, linkedUnitId: 'a2-unit-11' },
      { id: 'w5-d2', dayTitleGe: 'დღე 30: სამუშაო ადგილის ლექსიკა', descriptionGe: 'პროფესიები, მოვალეობები და ოფისის კომუნიკაცია.', durationMinutes: 45, linkedUnitId: 'a2-unit-11' },
      { id: 'w5-d3', dayTitleGe: 'დღე 31: Unit 12 შედარებები', descriptionGe: 'Fast -> Faster -> The fastest; Expensive -> More -> The most.', durationMinutes: 50, linkedUnitId: 'a2-unit-12' },
      { id: 'w5-d4', dayTitleGe: 'დღე 32: შოპინგი და ფასები', descriptionGe: 'დიალოგები მაღაზიაში: ზომა, ფასი, შედარება.', durationMinutes: 45, linkedUnitId: 'a2-unit-12' },
      { id: 'w5-d5', dayTitleGe: 'დღე 33: Unit 13 Be going to', descriptionGe: 'სამომავლო გეგმები: What are you going to do this weekend?', durationMinutes: 50, linkedUnitId: 'a2-unit-13' },
      { id: 'w5-d6', dayTitleGe: 'დღე 34: Will და მოგზაურობა', descriptionGe: 'სპონტანური გადაწყვეტილებები და აეროპორტის ფრაზები.', durationMinutes: 45, linkedUnitId: 'a2-unit-13' },
      { id: 'w5-d7', dayTitleGe: 'დღე 35: კვირის შეჯამება', descriptionGe: 'A2 დონის პირველი ბლოკის ფლეშ-ბარათები.', durationMinutes: 35 }
    ]
  },
  {
    weekNumber: 6,
    level: 'A2',
    titleGe: 'კვირა 6: Present Perfect და მოდალური ზმნები',
    goalGe: 'გაიგე კავშირი წარსულსა და აწმყოს შორის და ისწავლე რჩევის მიცემა.',
    days: [
      { id: 'w6-d1', dayTitleGe: 'დღე 36: Unit 14 Present Perfect საფუძველი', descriptionGe: 'Have/Has + Past Participle (V3).', durationMinutes: 50, linkedUnitId: 'a2-unit-14' },
      { id: 'w6-d2', dayTitleGe: 'დღე 37: Ever / Never / Just / Already', descriptionGe: 'როგორ ვთქვათ: „ოდესმე ყოფილხარ?“, „ახლახან გავაკეთე“...', durationMinutes: 55, linkedUnitId: 'a2-unit-14' },
      { id: 'w6-d3', dayTitleGe: 'დღე 38: Unit 15 Must vs Have to', descriptionGe: 'მკაცრი წესები და გარეგანი ვალდებულებები.', durationMinutes: 45, linkedUnitId: 'a2-unit-15' },
      { id: 'w6-d4', dayTitleGe: 'დღე 39: Should რჩევისთვის', descriptionGe: 'ექიმთან ვიზიტი: You should drink more water.', durationMinutes: 45, linkedUnitId: 'a2-unit-15' },
      { id: 'w6-d5', dayTitleGe: 'დღე 40: გრამატიკული სავარჯიშოები', descriptionGe: 'Must, Should და Can-ის მიქსი ტესტებში.', durationMinutes: 50 },
      { id: 'w6-d6', dayTitleGe: 'დღე 41: ლექსიკის განმტკიცება', descriptionGe: 'ჯანმრთელობისა და სიმპტომების ლექსიკა.', durationMinutes: 40 },
      { id: 'w6-d7', dayTitleGe: 'დღე 42: კვირის შეჯამება', descriptionGe: 'გამეორება Leitner სისტემით.', durationMinutes: 30 }
    ]
  },
  {
    weekNumber: 7,
    level: 'A2',
    titleGe: 'კვირა 7: წარსულის დეტალები და პირობითი წინადადებები',
    goalGe: 'ისწავლე ამბის დეტალურად მოყოლა და მიზეზ-შედეგობრიობა.',
    days: [
      { id: 'w7-d1', dayTitleGe: 'დღე 43: Unit 16 Past Continuous', descriptionGe: 'I was sleeping when the phone rang.', durationMinutes: 50, linkedUnitId: 'a2-unit-16' },
      { id: 'w7-d2', dayTitleGe: 'დღე 44: When და While-ის წესები', descriptionGe: 'რთული წინადადებები წარსულ დროში.', durationMinutes: 45, linkedUnitId: 'a2-unit-16' },
      { id: 'w7-d3', dayTitleGe: 'დღე 45: Unit 17 Much, Many, Enough', descriptionGe: 'რესტორანში შეკვეთა და რაოდენობების აღწერა.', durationMinutes: 45, linkedUnitId: 'a2-unit-17' },
      { id: 'w7-d4', dayTitleGe: 'დღე 46: Unit 18 Conditionals 0 & 1', descriptionGe: 'If water boils, it turns to steam / If you call me, I will answer.', durationMinutes: 50, linkedUnitId: 'a2-unit-18' },
      { id: 'w7-d5', dayTitleGe: 'დღე 47: ბუნება და გარემო', descriptionGe: 'ამინდის ექსტრემალური მოვლენები და ეკოლოგიის ლექსიკა.', durationMinutes: 45, linkedUnitId: 'a2-unit-18' },
      { id: 'w7-d6', dayTitleGe: 'დღე 48: წერის პრაქტიკა', descriptionGe: 'მოკლე მოთხრობის დაწერა წარსულ დროში (5-7 წინადადება).', durationMinutes: 45 },
      { id: 'w7-d7', dayTitleGe: 'დღე 49: კვირის შეჯამება', descriptionGe: 'შეცდომების ბანკის ანალიზი.', durationMinutes: 30 }
    ]
  },
  {
    weekNumber: 8,
    level: 'A2',
    titleGe: 'კვირა 8: A2 დონის დახურვა და ფრაზული ზმნები',
    goalGe: 'A2 სრული შემაჯამებელი ტესტი და გადასვლა B1 დონეზე.',
    days: [
      { id: 'w8-d1', dayTitleGe: 'დღე 50: Unit 19 Gerund vs Infinitive', descriptionGe: 'Like swimming vs Want to swim.', durationMinutes: 45, linkedUnitId: 'a2-unit-19' },
      { id: 'w8-d2', dayTitleGe: 'დღე 51: პირველი ფრაზული ზმნები', descriptionGe: 'Turn on/off, get up, look for, wake up.', durationMinutes: 45, linkedUnitId: 'a2-unit-19' },
      { id: 'w8-d3', dayTitleGe: 'დღე 52: Unit 20 Relative Clauses', descriptionGe: 'The person who works here / The book that I read.', durationMinutes: 45, linkedUnitId: 'a2-unit-20' },
      { id: 'w8-d4', dayTitleGe: 'დღე 53: A2-ის სრული გადამეორება', descriptionGe: 'ყველა გრამატიკული ცხრილის გადაკითხვა.', durationMinutes: 55, linkedUnitId: 'a2-unit-20' },
      { id: 'w8-d5', dayTitleGe: 'დღე 54: A2 შემაჯამებელი გამოცდა', descriptionGe: 'სრული 35-კითხვიანი ტესტი.', durationMinutes: 60, linkedUnitId: 'a2-unit-20' },
      { id: 'w8-d6', dayTitleGe: 'დღე 55: გამოცდის შედეგების გარჩევა', descriptionGe: 'სუსტი წერტილების დაფიქსირება.', durationMinutes: 40 },
      { id: 'w8-d7', dayTitleGe: 'დღე 56: შესვენება და ლექსიკონი', descriptionGe: 'პირადი ლექსიკონის დახარისხება.', durationMinutes: 30 }
    ]
  },
  {
    weekNumber: 9,
    level: 'B1',
    titleGe: 'კვირა 9: B1 — თავისუფალი მეტყველების საძირკველი',
    goalGe: 'დროების სიღრმისეული გარჩევა და Second Conditional.',
    days: [
      { id: 'w9-d1', dayTitleGe: 'დღე 57: Unit 21 Present Perfect vs Past Simple', descriptionGe: 'ზუსტი დროის ზმნიზედები და For/Since.', durationMinutes: 50, linkedUnitId: 'b1-unit-21' },
      { id: 'w9-d2', dayTitleGe: 'დღე 58: გასაუბრების ინგლისური', descriptionGe: 'სამუშაო გამოცდილების სწორად გადმოცემა.', durationMinutes: 45, linkedUnitId: 'b1-unit-21' },
      { id: 'w9-d3', dayTitleGe: 'დღე 59: Unit 22 Present Perfect Continuous', descriptionGe: 'How long have you been learning English?', durationMinutes: 50, linkedUnitId: 'b1-unit-22' },
      { id: 'w9-d4', dayTitleGe: 'დღე 60: Used to წარსული ჩვევებისთვის', descriptionGe: 'I used to play video games every day.', durationMinutes: 45, linkedUnitId: 'b1-unit-22' },
      { id: 'w9-d5', dayTitleGe: 'დღე 61: Unit 23 Second Conditional', descriptionGe: 'If I were you, I would study more.', durationMinutes: 50, linkedUnitId: 'b1-unit-23' },
      { id: 'w9-d6', dayTitleGe: 'დღე 62: წარმოსახვითი დიალოგები', descriptionGe: 'რა მოხდებოდა, რომ... პრაქტიკული სავარჯიშოები.', durationMinutes: 45, linkedUnitId: 'b1-unit-23' },
      { id: 'w9-d7', dayTitleGe: 'დღე 63: კვირის შეჯამება', descriptionGe: 'Leitner-ის ფლეშ-ბარათების მეხუთე ყუთი.', durationMinutes: 35 }
    ]
  },
  {
    weekNumber: 10,
    level: 'B1',
    titleGe: 'კვირა 10: ვნებითი გვარი და წინარე წარსული დრო',
    goalGe: 'აკადემიური და ფორმალური ინგლისურის კონსტრუქციები.',
    days: [
      { id: 'w10-d1', dayTitleGe: 'დღე 64: Unit 24 Passive Voice (აწმყო)', descriptionGe: 'English is spoken all over the world.', durationMinutes: 50, linkedUnitId: 'b1-unit-24' },
      { id: 'w10-d2', dayTitleGe: 'დღე 65: Passive Voice (წარსული)', descriptionGe: 'The computer was invented in the 20th century.', durationMinutes: 50, linkedUnitId: 'b1-unit-24' },
      { id: 'w10-d3', dayTitleGe: 'დღე 66: ტექნიკური და მედია ტექსტები', descriptionGe: 'პასიური კონსტრუქციების ამოცნობა ტექსტში.', durationMinutes: 45, linkedUnitId: 'b1-unit-24' },
      { id: 'w10-d4', dayTitleGe: 'დღე 67: Unit 25 Past Perfect', descriptionGe: 'Had + V3 დროის ხაზზე და მისი ლოგიკა.', durationMinutes: 50, linkedUnitId: 'b1-unit-25' },
      { id: 'w10-d5', dayTitleGe: 'დღე 68: ამბის თხრობის სტრუქტურა', descriptionGe: 'დროების მონაცვლეობა რთულ ისტორიაში.', durationMinutes: 50, linkedUnitId: 'b1-unit-25' },
      { id: 'w10-d6', dayTitleGe: 'დღე 69: მოსმენისა და წერის სესია', descriptionGe: 'აუდიოს გაშიფვრა და მოკლე ჩანაწერი.', durationMinutes: 45 },
      { id: 'w10-d7', dayTitleGe: 'დღე 70: კვირის შეჯამება', descriptionGe: 'შეცდომების ბანკის შემცირება.', durationMinutes: 30 }
    ]
  },
  {
    weekNumber: 11,
    level: 'B1',
    titleGe: 'კვირა 11: დედუქცია, ირიბი ნათქვამი და იდიომები',
    goalGe: 'ისწავლე ბუნებრივი, ცოცხალი ინგლისურით კომუნიკაცია.',
    days: [
      { id: 'w11-d1', dayTitleGe: 'დღე 71: Unit 26 ვარაუდის მოდალური ზმნები', descriptionGe: 'He must be tired / She might come tomorrow.', durationMinutes: 50, linkedUnitId: 'b1-unit-26' },
      { id: 'w11-d2', dayTitleGe: 'დღე 72: Unit 27 Reported Speech', descriptionGe: 'He said that he was happy (დროის გადაწევის წესი).', durationMinutes: 55, linkedUnitId: 'b1-unit-27' },
      { id: 'w11-d3', dayTitleGe: 'დღე 73: კითხვების გადმოცემა ირიბ ნათქვამში', descriptionGe: 'She asked me where I lived.', durationMinutes: 45, linkedUnitId: 'b1-unit-27' },
      { id: 'w11-d4', dayTitleGe: 'დღე 74: Unit 28 მთავარი იდიომები', descriptionGe: 'Under the weather, hit the books, cost an arm and a leg.', durationMinutes: 45, linkedUnitId: 'b1-unit-28' },
      { id: 'w11-d5', dayTitleGe: 'დღე 75: ფრაზული ზმნების პრაქტიკა', descriptionGe: 'Get along with, run out of, figure out.', durationMinutes: 50, linkedUnitId: 'b1-unit-28' },
      { id: 'w11-d6', dayTitleGe: 'დღე 76: სასაუბრო სავარჯიშოები', descriptionGe: 'დიალოგების როლური თამაშები.', durationMinutes: 45 },
      { id: 'w11-d7', dayTitleGe: 'დღე 77: კვირის შეჯამება', descriptionGe: 'ფლეშ-ბარათების მასიური გამეორება.', durationMinutes: 35 }
    ]
  },
  {
    weekNumber: 12,
    level: 'B1',
    titleGe: 'კვირა 12: B1-ის დასრულება და საბოლოო სერტიფიკაცია',
    goalGe: 'ჩააბარე B1 დონის ფინალური გამოცდა და მიაღწიე მიზანს!',
    days: [
      { id: 'w12-d1', dayTitleGe: 'დღე 78: Unit 29 ტექსტის დამაკავშირებლები', descriptionGe: 'However, In addition, Consequently, Although.', durationMinutes: 45, linkedUnitId: 'b1-unit-29' },
      { id: 'w12-d2', dayTitleGe: 'დღე 79: პროფესიული იმეილის წერა', descriptionGe: 'სტრუქტურა: სალამი, მიზეზი, მოთხოვნა, დამშვიდობება.', durationMinutes: 50, linkedUnitId: 'b1-unit-29' },
      { id: 'w12-d3', dayTitleGe: 'დღე 80: შეცდომების ბანკის სრული განულება', descriptionGe: 'ყველა შეცდომის თავიდან ამოხსნა.', durationMinutes: 55 },
      { id: 'w12-d4', dayTitleGe: 'დღე 81: B1 გრამატიკის გენერალური რეპეტიცია', descriptionGe: 'ყველა დროის კონტრასტი ერთ ცხრილში.', durationMinutes: 50, linkedUnitId: 'b1-unit-30' },
      { id: 'w12-d5', dayTitleGe: 'დღე 82: B1 ფინალური გამოცდა (ნაწილი 1)', descriptionGe: 'ლექსიკა, გრამატიკა და მოსმენა (Listening).', durationMinutes: 60, linkedUnitId: 'b1-unit-30' },
      { id: 'w12-d6', dayTitleGe: 'დღე 83: B1 ფინალური გამოცდა (ნაწილი 2)', descriptionGe: 'კითხვა (Reading) და წერა (Writing).', durationMinutes: 60, linkedUnitId: 'b1-unit-30' },
      { id: 'w12-d7', dayTitleGe: 'დღე 84: კურსის დასრულება!', descriptionGe: 'შედეგების შეჯამება და შემდგომი სწავლის რჩევები.', durationMinutes: 30 }
    ]
  }
];