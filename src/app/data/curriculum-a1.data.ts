import { CourseUnit } from '../models/course.model';

export const CURRICULUM_A1_UNITS: CourseUnit[] = [
  // =========================================================================
  // UNIT 1: მისალმება, გაცნობა, ნაცვალსახელები და ზმნა "To Be"
  // =========================================================================
  {
    id: 'a1-unit-1',
    level: 'A1',
    unitNumber: 1,
    titleGe: 'გაცნობა, ნაცვალსახელები და ზმნა "To Be"',
    titleEn: 'Greetings, Pronouns & Verb "To Be"',
    descriptionGe: 'ისწავლე ინგლისური წარმოთქმის საფუძვლები, მისალმება, პირის ნაცვალსახელები (მე, შენ, ის) და ინგლისური ენის მთავარი ზმნა "To Be" (ყოფნა).',
    estimatedMinutes: 25,
    icon: '👋',
    isAvailable: true,
    vocabulary: [
      { id: 'u1-v1', english: 'Hello', georgian: 'გამარჯობა', transcriptionGe: 'ჰელოუ', partOfSpeech: 'შორისდებული', exampleEn: 'Hello, my name is Giorgi.', exampleGe: 'გამარჯობა, ჩემი სახელია გიორგი.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v2', english: 'Good morning', georgian: 'დილა მშვიდობისა', transcriptionGe: 'გუდ მორნინგ', partOfSpeech: 'ფრაზა', exampleEn: 'Good morning, teacher!', exampleGe: 'დილა მშვიდობისა, მასწავლებელო!', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v3', english: 'Good evening', georgian: 'საღამო მშვიდობისა', transcriptionGe: 'გუდ ივნინგ', partOfSpeech: 'ფრაზა', exampleEn: 'Good evening, how are you?', exampleGe: 'საღამო მშვიდობისა, როგორ ხარ?', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v4', english: 'Goodbye', georgian: 'ნახვამდის', transcriptionGe: 'გუდბაი', partOfSpeech: 'შორისდებული', exampleEn: 'Goodbye, see you tomorrow!', exampleGe: 'ნახვამდის, ხვალ შევხვდებით!', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v5', english: 'Please', georgian: 'გთხოვთ / თუ შეიძლება', transcriptionGe: 'ფლიზ', partOfSpeech: 'ზმნიზედა', exampleEn: 'Help me, please.', exampleGe: 'დამეხმარეთ, გთხოვთ.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v6', english: 'Thank you', georgian: 'გმადლობთ', transcriptionGe: 'სენქ იუ', partOfSpeech: 'ფრაზა', exampleEn: 'Thank you very much.', exampleGe: 'დიდი მადლობა.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v7', english: 'I', georgian: 'მე', transcriptionGe: 'აი', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'I am from Georgia.', exampleGe: 'მე საქართველოდან ვარ.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v8', english: 'You', georgian: 'შენ / თქვენ', transcriptionGe: 'იუ', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'You are my friend.', exampleGe: 'შენ ჩემი მეგობარი ხარ.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v9', english: 'He', georgian: 'ის (მამრობითი)', transcriptionGe: 'ჰი', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'He is a doctor.', exampleGe: 'ის (კაცი) ექიმია.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v10', english: 'She', georgian: 'ის (მდედრობითი)', transcriptionGe: 'ში', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'She is very happy.', exampleGe: 'ის (ქალი) ძალიან ბედნიერია.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v11', english: 'It', georgian: 'ის (უსულო საგანი / ცხოველი)', transcriptionGe: 'ით', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'It is a good book.', exampleGe: 'ეს (ის) კარგი წიგნია.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v12', english: 'We', georgian: 'ჩვენ', transcriptionGe: 'უი', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'We are students.', exampleGe: 'ჩვენ სტუდენტები ვართ.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v13', english: 'They', georgian: 'ისინი', transcriptionGe: 'ზეი', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'They are at home.', exampleGe: 'ისინი სახლში არიან.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v14', english: 'Name', georgian: 'სახელი', transcriptionGe: 'ნეიმ', partOfSpeech: 'არსებითი', exampleEn: 'What is your name?', exampleGe: 'რა გქვია? (რა არის შენი სახელი?)', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v15', english: 'Country', georgian: 'ქვეყანა', transcriptionGe: 'ქანთრი', partOfSpeech: 'არსებითი', exampleEn: 'Georgia is a beautiful country.', exampleGe: 'საქართველო ლამაზი ქვეყანაა.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v16', english: 'City', georgian: 'ქალაქი', transcriptionGe: 'სითი', partOfSpeech: 'არსებითი', exampleEn: 'Tbilisi is a big city.', exampleGe: 'თბილისი დიდი ქალაქია.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v17', english: 'Student', georgian: 'სტუდენტი / მოსწავლე', transcriptionGe: 'სთუდენთ', partOfSpeech: 'არსებითი', exampleEn: 'I am an English student.', exampleGe: 'მე ინგლისურის სტუდენტი ვარ.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v18', english: 'Teacher', georgian: 'მასწავლებელი', transcriptionGe: 'თიჩერ', partOfSpeech: 'არსებითი', exampleEn: 'She is a good teacher.', exampleGe: 'ის კარგი მასწავლებელია.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v19', english: 'Friend', georgian: 'მეგობარი', transcriptionGe: 'ფრენდ', partOfSpeech: 'არსებითი', exampleEn: 'Luka is my best friend.', exampleGe: 'ლუკა ჩემი საუკეთესო მეგობარია.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v20', english: 'Happy', georgian: 'ბედნიერი / გახარებული', transcriptionGe: 'ჰეფი', partOfSpeech: 'ზედსართავი', exampleEn: 'We are happy today.', exampleGe: 'დღეს ჩვენ ბედნიერები ვართ.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v21', english: 'Tired', georgian: 'დაღლილი', transcriptionGe: 'თაიერდ', partOfSpeech: 'ზედსართავი', exampleEn: 'I am not tired.', exampleGe: 'მე არ ვარ დაღლილი.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v22', english: 'Ready', georgian: 'მზად (მყოფი)', transcriptionGe: 'რედი', partOfSpeech: 'ზედსართავი', exampleEn: 'Are you ready?', exampleGe: 'მზად ხარ?', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v23', english: 'Yes', georgian: 'დიახ / კი', transcriptionGe: 'იეს', partOfSpeech: 'ნაწილაკი', exampleEn: 'Yes, I am ready.', exampleGe: 'დიახ, მზად ვარ.', unitId: 'a1-unit-1', level: 'A1' },
      { id: 'u1-v24', english: 'No', georgian: 'არა', transcriptionGe: 'ნოუ', partOfSpeech: 'ნაწილაკი', exampleEn: 'No, he is not here.', exampleGe: 'არა, ის აქ არ არის.', unitId: 'a1-unit-1', level: 'A1' }
    ],
    grammar: {
      title: 'პირის ნაცვალსახელები და ზმნა "To Be" (ვარ, ხარ, არის)',
      summaryGe: 'ინგლისურ წინადადებაში ყოველთვის აუცილებელია ქვემდებარე (ვინ?) და ზმნა (რას შვრება? / ვინ არის?). ზმნა "To Be" იცვლება პირების მიხედვით: am, is, are.',
      georgianComparison: 'ქართულში ვამბობთ: „ის კაცია“, „ის ქალია“, „ის მაგიდაა“ — სამივესთვის ვიყენებთ ერთ სიტყვას „ის“. ინგლისურში კი მესამე პირი იყოფა სამად: He (კაცი), She (ქალი), It (ნივთი/ცხოველი). ასევე, ქართულში ხშირად ვამოკლებთ ზმნას („მე სტუდენტი [ვარ]“, „ეს წიგნია“), ინგლისურში კი am/is/are-ის გამოტოვება კატეგორიულად არ შეიძლება! არასდროს თქვა "I student" — უნდა თქვა "I am a student".',
      sections: [
        {
          heading: '1. მტკიცებითი ფორმა (Affirmative)',
          explanationGe: 'დაიმახსოვრე ოქროს სამეული: "I" მეგობრობს მხოლოდ "am"-თან. მხოლობითი რიცხვის მე-3 პირი (He, She, It) მეგობრობს "is"-თან. ხოლო მრავლობითი (We, You, They) მეგობრობს "are"-თან. ნაცვალსახელი "I" (მე) წინადადების ნებისმიერ ადგილას იწერება დიდი ასოთი!',
          examples: [
            { en: 'I am Rezo. (I\'m Rezo)', ge: 'მე ვარ რეზო.', note: 'საუბარში I am მოკლდება როგორც I\'m [აიმ]' },
            { en: 'She is from Rustavi. (She\'s from Rustavi)', ge: 'ის (გოგო) რუსთავიდან არის.', note: 'She is -> She\'s [შიზ]' },
            { en: 'We are friends. (We\'re friends)', ge: 'ჩვენ მეგობრები ვართ.', note: 'We are -> We\'re [უიარ]' }
          ]
        },
        {
          heading: '2. უარყოფითი და კითხვითი ფორმა (Negative & Questions)',
          explanationGe: 'უარყოფისთვის უბრალოდ ვუმატებთ ნაწილაკს "not" ზმნა am/is/are-ის შემდეგ. ხოლო კითხვის დასასმელად am/is/are გადმოდის წინადადების დასაწყისში (ქვემდებარის წინ)!',
          examples: [
            { en: 'I am not tired.', ge: 'მე არ ვარ დაღლილი.' },
            { en: 'He is not (isn\'t) a teacher.', ge: 'ის არ არის მასწავლებელი.' },
            { en: 'Are you from Georgia? — Yes, I am.', ge: 'საქართველოდან ხარ? — დიახ, ვარ.', note: 'კითხვაში "Are" გადმოვიდა "you"-ს წინ.' }
          ]
        }
      ],
      tables: [
        {
          title: 'ზმნა "To Be"-ს სრული უღლების ცხრილი',
          headers: ['პირი', 'მტკიცებითი (+)', 'შემოკლებული', 'უარყოფითი (-)', 'კითხვითი (?)'],
          rows: [
            ['მე (I)', 'I am', 'I\'m', 'I am not (I\'m not)', 'Am I?'],
            ['შენ/თქვენ (You)', 'You are', 'You\'re', 'You are not (aren\'t)', 'Are you?'],
            ['ის - კაცი (He)', 'He is', 'He\'s', 'He is not (isn\'t)', 'Is he?'],
            ['ის - ქალი (She)', 'She is', 'She\'s', 'She is not (isn\'t)', 'Is she?'],
            ['ის - საგანი (It)', 'It is', 'It\'s', 'It is not (isn\'t)', 'Is it?'],
            ['ჩვენ (We)', 'We are', 'We\'re', 'We are not (aren\'t)', 'Are we?'],
            ['ისინი (They)', 'They are', 'They\'re', 'They are not (aren\'t)', 'Are they?']
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I happy today.', right: 'I am happy today.', explanationGe: 'ზმნა "am" არ უნდა გამოგრჩეს, რადგან ინგლისურში უზმნო წინადადება არ არსებობს.' },
        { wrong: 'You is my friend.', right: 'You are my friend.', explanationGe: '"You" (შენც და თქვენც) ყოველთვის ითხოვს "are" ფორმას.' },
        { wrong: 'He are from Tbilisi?', right: 'Is he from Tbilisi?', explanationGe: 'კითხვისას "Is" გადადის წინ, ხოლო "He"-ს სჭირდება "is" და არა "are".' }
      ]
    },
    dialogue: {
      title: 'პირველი შეხვედრა კურსზე',
      contextGe: 'ნიკა და ანა ერთმანეთს ინგლისურის კურსზე ეცნობიან.',
      lines: [
        { speaker: 'Nika', avatar: '🧑🏻', english: 'Hello! Good morning. My name is Nika.', georgian: 'გამარჯობა! დილა მშვიდობისა. ჩემი სახელია ნიკა.' },
        { speaker: 'Ana', avatar: '👩🏻', english: 'Hello Nika! I am Ana. Nice to meet you.', georgian: 'გამარჯობა ნიკა! მე ანა ვარ. სასიამოვნოა შენი გაცნობა.' },
        { speaker: 'Nika', avatar: '🧑🏻', english: 'Are you a new student here?', georgian: 'აქ ახალი სტუდენტი ხარ?' },
        { speaker: 'Ana', avatar: '👩🏻', english: 'Yes, I am. Are you from Tbilisi?', georgian: 'დიახ, ვარ. შენ თბილისიდან ხარ?' },
        { speaker: 'Nika', avatar: '🧑🏻', english: 'No, I am not. I am from Rustavi, and my friend Luka is from Batumi.', georgian: 'არა, არ ვარ. მე რუსთავიდან ვარ, ხოლო ჩემი მეგობარი ლუკა ბათუმიდან არის.' },
        { speaker: 'Ana', avatar: '👩🏻', english: 'Look, she is our teacher! Are you ready?', georgian: 'შეხედე, ის ჩვენი მასწავლებელია! მზად ხარ?' },
        { speaker: 'Nika', avatar: '🧑🏻', english: 'Yes, I am very happy and ready!', georgian: 'დიახ, ძალიან გახარებული და მზად ვარ!' }
      ]
    },
    exercises: [
      {
        id: 'u1-ex1',
        unitId: 'a1-unit-1',
        type: 'multiple-choice',
        promptGe: 'აირჩიე ზმნა "To Be"-ს სწორი ფორმა:',
        question: 'She ___ a very good teacher.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'is',
        explanationGe: '"She" (ის - მდედრობითი) მხოლობითი რიცხვის მე-3 პირია, ამიტომ ვიყენებთ "is"-ს.'
      },
      {
        id: 'u1-ex2',
        unitId: 'a1-unit-1',
        type: 'fill-blank',
        promptGe: 'ჩაწერე გამოტოვებული სიტყვა (am, is ან are):',
        question: 'We ___ from Georgia.',
        correctAnswer: 'are',
        explanationGe: '"We" (ჩვენ) მრავლობითი რიცხვია და მასთან ყოველთვის იწერება "are".'
      },
      {
        id: 'u1-ex3',
        unitId: 'a1-unit-1',
        type: 'word-order',
        promptGe: 'დაალაგე სიტყვები სწორი თანმიმდევრობით კითხვითი წინადადების მისაღებად:',
        question: 'მზად ხარ?',
        options: ['you', 'Are', 'ready', '?'],
        correctAnswer: 'Are you ready ?',
        acceptedAnswers: ['Are you ready?'],
        explanationGe: 'კითხვით წინადადებაში ზმნა "Are" გადმოდის ქვემდებარე "you"-ს წინ: Are you ready?'
      },
      {
        id: 'u1-ex4',
        unitId: 'a1-unit-1',
        type: 'matching',
        promptGe: 'დააკავშირე ინგლისური სიტყვები ქართულ მნიშვნელობებთან:',
        question: 'შეუსაბამე წყვილები',
        matchingPairs: [
          { left: 'Good morning', right: 'დილა მშვიდობისა' },
          { left: 'Tired', right: 'დაღლილი' },
          { left: 'They', right: 'ისინი' },
          { left: 'Country', right: 'ქვეყანა' }
        ],
        correctAnswer: 'matched',
        explanationGe: 'ყოჩაღ! ყველა სიტყვა სწორად დააკავშირე.'
      },
      {
        id: 'u1-ex5',
        unitId: 'a1-unit-1',
        type: 'translation-ge-en',
        promptGe: 'თარგმნე წინადადება ქართულიდან ინგლისურად:',
        question: 'მე არ ვარ დაღლილი.',
        correctAnswer: 'I am not tired.',
        acceptedAnswers: ['I am not tired', 'I\'m not tired.', 'I\'m not tired'],
        explanationGe: 'მე = I, ვარ = am, არ = not, დაღლილი = tired -> I am not tired.'
      },
      {
        id: 'u1-ex6',
        unitId: 'a1-unit-1',
        type: 'listening',
        promptGe: 'მოუსმინე აუდიოს და აკრიფე ზუსტად ის, რაც გესმის:',
        question: 'დააჭირე დინამიკის ღილაკს მოსასმენად',
        audioText: 'They are my friends',
        correctAnswer: 'They are my friends',
        acceptedAnswers: ['They are my friends.', 'they are my friends'],
        explanationGe: 'აუდიოში გაისმა: "They are my friends" (ისინი ჩემი მეგობრები არიან).'
      },
      {
        id: 'u1-ex7',
        unitId: 'a1-unit-1',
        type: 'typing',
        promptGe: 'აკრიფე ინგლისურად სიტყვა:',
        question: 'მასწავლებელი',
        correctAnswer: 'teacher',
        acceptedAnswers: ['a teacher', 'the teacher'],
        explanationGe: 'მასწავლებელი ინგლისურად იწერება როგორც "teacher" [თიჩერ].'
      }
    ],
    unitTest: [
      {
        id: 'u1-test1',
        unitId: 'a1-unit-1',
        type: 'multiple-choice',
        promptGe: 'ტესტი 1/4: აირჩიე სწორი უარყოფითი წინადადება:',
        question: 'როგორ იქნება ინგლისურად: „ის (კაცი) არ არის სტუდენტი“?',
        options: ['He not is a student.', 'He is not a student.', 'She is not a student.', 'He are not a student.'],
        correctAnswer: 'He is not a student.',
        explanationGe: 'კაცის აღსანიშნავად ვიყენებთ "He"-ს, ხოლო უარყოფა "not" დგება "is"-ის შემდეგ.'
      },
      {
        id: 'u1-test2',
        unitId: 'a1-unit-1',
        type: 'fill-blank',
        promptGe: 'ტესტი 2/4: შეავსე კითხვითი წინადადება:',
        question: '___ they at home?',
        correctAnswer: 'Are',
        acceptedAnswers: ['are'],
        explanationGe: '"They" (ისინი) მოითხოვს ზმნას "Are".'
      },
      {
        id: 'u1-test3',
        unitId: 'a1-unit-1',
        type: 'translation-ge-en',
        promptGe: 'ტესტი 3/4: თარგმნე ინგლისურად:',
        question: 'ჩვენ ბედნიერები ვართ.',
        correctAnswer: 'We are happy.',
        acceptedAnswers: ['We are happy', 'We\'re happy.', 'We\'re happy'],
        explanationGe: 'ჩვენ = We, ვართ = are, ბედნიერები = happy (ზედსართავ სახელს ინგლისურში მრავლობითის -s არ ემატება!).'
      },
      {
        id: 'u1-test4',
        unitId: 'a1-unit-1',
        type: 'word-order',
        promptGe: 'ტესტი 4/4: ააწყვე წინადადება:',
        question: 'თბილისი დიდი ქალაქია.',
        options: ['is', 'Tbilisi', 'city', 'a', 'big'],
        correctAnswer: 'Tbilisi is a big city',
        acceptedAnswers: ['Tbilisi is a big city.'],
        explanationGe: 'ჯერ ქვემდებარე (Tbilisi), შემდეგ ზმნა (is) და შემდეგ აღწერა (a big city).'
      }
    ]
  },

  // =========================================================================
  // UNIT 2: არტიკლები (a/an/the), მრავლობითი რიცხვი, რიცხვები და This/That
  // =========================================================================
  {
    id: 'a1-unit-2',
    level: 'A1',
    unitNumber: 2,
    titleGe: 'არტიკლები (a/an/the), რიცხვები და This/That',
    titleEn: 'Articles, Plurals, Numbers & This/That',
    descriptionGe: 'გაიგე, რაში სჭირდებათ ინგლისელებს არტიკლები (რომლებიც ქართულში საერთოდ არ გვაქვს), როგორ ვაწარმოოთ მრავლობითი რიცხვი და როგორ მივუთითოთ ნივთებზე.',
    estimatedMinutes: 30,
    icon: '🍎',
    isAvailable: true,
    vocabulary: [
      { id: 'u2-v1', english: 'Apple', georgian: 'ვაშლი', transcriptionGe: 'ეფლ', partOfSpeech: 'არსებითი', exampleEn: 'I want an apple.', exampleGe: 'მე ვაშლი მინდა.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v2', english: 'Book', georgian: 'წიგნი', transcriptionGe: 'ბუქ', partOfSpeech: 'არსებითი', exampleEn: 'This is an interesting book.', exampleGe: 'ეს საინტერესო წიგნია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v3', english: 'Car', georgian: 'მანქანა / ავტომობილი', transcriptionGe: 'ქარ', partOfSpeech: 'არსებითი', exampleEn: 'The car is very fast.', exampleGe: 'ეს (კონკრეტული) მანქანა ძალიან სწრაფია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v4', english: 'House', georgian: 'სახლი (შენობა)', transcriptionGe: 'ჰაუს', partOfSpeech: 'არსებითი', exampleEn: 'That is a big house.', exampleGe: 'ის დიდი სახლია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v5', english: 'Phone', georgian: 'ტელეფონი', transcriptionGe: 'ფოუნ', partOfSpeech: 'არსებითი', exampleEn: 'Where is my phone?', exampleGe: 'სად არის ჩემი ტელეფონი?', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v6', english: 'Key', georgian: 'გასაღები', transcriptionGe: 'ქი', partOfSpeech: 'არსებითი', exampleEn: 'These are my keys.', exampleGe: 'ესენი ჩემი გასაღებებია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v7', english: 'Bag', georgian: 'ჩანთა', transcriptionGe: 'ბეგ', partOfSpeech: 'არსებითი', exampleEn: 'The bag is on the table.', exampleGe: 'ჩანთა მაგიდაზეა.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v8', english: 'Umbrella', georgian: 'ქოლგა', transcriptionGe: 'ამბრელა', partOfSpeech: 'არსებითი', exampleEn: 'It is an umbrella.', exampleGe: 'ეს ქოლგაა.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v9', english: 'Watch', georgian: 'საათი (მაჯის)', transcriptionGe: 'ვოჩ', partOfSpeech: 'არსებითი', exampleEn: 'Those watches are expensive.', exampleGe: 'ის საათები ძვირია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v10', english: 'Box', georgian: 'ყუთი', transcriptionGe: 'ბოქს', partOfSpeech: 'არსებითი', exampleEn: 'Three boxes are here.', exampleGe: 'სამი ყუთი აქ არის.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v11', english: 'Man / Men', georgian: 'კაცი / კაცები', transcriptionGe: 'მენ / მენ', partOfSpeech: 'არსებითი', exampleEn: 'Two men are in the car.', exampleGe: 'ორი კაცი მანქანაშია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v12', english: 'Woman / Women', georgian: 'ქალი / ქალები', transcriptionGe: 'ვუმენ / ვიმინ', partOfSpeech: 'არსებითი', exampleEn: 'These women are doctors.', exampleGe: 'ეს ქალები ექიმები არიან.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v13', english: 'Child / Children', georgian: 'ბავშვი / ბავშვები', transcriptionGe: 'ჩაილდ / ჩილდრენ', partOfSpeech: 'არსებითი', exampleEn: 'The children are happy.', exampleGe: 'ბავშვები ბედნიერები არიან.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v14', english: 'Person / People', georgian: 'ადამიანი / ხალხი', transcriptionGe: 'ფერსონ / ფიფლ', partOfSpeech: 'არსებითი', exampleEn: 'Many people are here.', exampleGe: 'ბევრი ხალხია აქ.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v15', english: 'This', georgian: 'ეს (ახლოს, მხოლობითი)', transcriptionGe: 'ზის', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'This is my book.', exampleGe: 'ეს ჩემი წიგნია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v16', english: 'That', georgian: 'ის (შორს, მხოლობითი)', transcriptionGe: 'ზეთ', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'That is your car.', exampleGe: 'ის შენი მანქანაა.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v17', english: 'These', georgian: 'ესენი (ახლოს, მრავლობითი)', transcriptionGe: 'ზიზ', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'These apples are red.', exampleGe: 'ეს ვაშლები წითელია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v18', english: 'Those', georgian: 'ისინი (შორს, მრავლობითი)', transcriptionGe: 'ზოუზ', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'Those houses are old.', exampleGe: 'ის სახლები ძველია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v19', english: 'One, Two, Three', georgian: 'ერთი, ორი, სამი', transcriptionGe: 'უან, თუ, სრი', partOfSpeech: 'რიცხვითი', exampleEn: 'I have two bags.', exampleGe: 'მე ორი ჩანთა მაქვს.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v20', english: 'Four, Five, Six', georgian: 'ოთხი, ხუთი, ექვსი', transcriptionGe: 'ფორ, ფაივ, სიქს', partOfSpeech: 'რიცხვითი', exampleEn: 'Five books are on the desk.', exampleGe: 'ხუთი წიგნი მერხზეა.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v21', english: 'Seven, Eight, Nine, Ten', georgian: 'შვიდი, რვა, ცხრა, ათი', transcriptionGe: 'სევენ, ეით, ნაინ, თენ', partOfSpeech: 'რიცხვითი', exampleEn: 'Ten students are in the room.', exampleGe: 'ათი სტუდენტი ოთახშია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v22', english: 'Twenty / Hundred', georgian: 'ოცი / ასი', transcriptionGe: 'თვენთი / ჰანდრედ', partOfSpeech: 'რიცხვითი', exampleEn: 'One hundred pages.', exampleGe: 'ასი გვერდი.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v23', english: 'New', georgian: 'ახალი', transcriptionGe: 'ნიუ', partOfSpeech: 'ზედსართავი', exampleEn: 'It is a new phone.', exampleGe: 'ეს ახალი ტელეფონია.', unitId: 'a1-unit-2', level: 'A1' },
      { id: 'u2-v24', english: 'Old', georgian: 'ძველი / მოხუცი', transcriptionGe: 'ოლდ', partOfSpeech: 'ზედსართავი', exampleEn: 'The book is old.', exampleGe: 'წიგნი ძველია.', unitId: 'a1-unit-2', level: 'A1' }
    ],
    grammar: {
      title: 'არტიკლები (A, An, The), მრავლობითი რიცხვი და ჩვენებითი ნაცვალსახელები',
      summaryGe: 'ინგლისურში თვლად არსებით სახელს მხოლობით რიცხვში წინ თითქმის ყოველთვის სჭირდება პატარა დამხმარე სიტყვა — არტიკლი (a, an ან the).',
      georgianComparison: 'ქართულ ენაში არტიკლები საერთოდ არ არსებობს, ამიტომ ქართველებს ის ხშირად გვავიწყდება. წარმოიდგინე, რომ "a / an" ნიშნავს „ერთ რომელიღაც“-ს (უცნობ, ზოგად საგანს), ხოლო "the" ნიშნავს „ეს კონკრეტული / ის ნაცნობი“. ასევე, ქართულში ვამბობთ „ხუთი წიგნი“ (მხოლობითში!), ინგლისურში კი 1-ზე მეტი ნივთი აუცილებლად მრავლობითში დგება: "five books" (ხუთი წიგნები).',
      sections: [
        {
          heading: '1. განუსაზღვრელი არტიკლი: A და An',
          explanationGe: 'ვიყენებთ მხოლოდ მხოლობით რიცხვში, როცა საგანს პირველად ვახსენებთ ან ვგულისხმობთ ნებისმიერ ერთ ცალს. "a" იწერება თანხმოვნით დაწყებული სიტყვების წინ (a car, a book), ხოლო "an" იწერება ხმოვანი ბგერით (a, e, i, o, u) დაწყებული სიტყვების წინ, რათა წარმოთქმა მარტივი იყოს (an apple, an umbrella).',
          examples: [
            { en: 'It is a book.', ge: 'ეს (რაღაც ერთი) წიგნია.' },
            { en: 'It is an apple.', ge: 'ეს ვაშლია.', note: 'apple იწყება ხმოვნით, ამიტომ ვიყენებთ an-ს.' },
            { en: 'It is an old car.', ge: 'ეს ძველი მანქანაა.', note: 'არტიკლი უყურებს უშუალოდ მის მომდევნო სიტყვას (old იწყება o-თი -> an old car).' }
          ]
        },
        {
          heading: '2. განსაზღვრული არტიკლი: The',
          explanationGe: '"The" გამოიყენება როგორც მხოლობით, ისე მრავლობით რიცხვში, როდესაც მსმენელმა ზუსტად იცის, რომელ კონკრეტულ საგანზეა საუბარი, ან როცა საგანი ერთადერთია (the sun, the sky).',
          examples: [
            { en: 'I have a car. The car is red.', ge: 'მე მყავს მანქანა. (ეს) მანქანა წითელია.', note: 'პირველად ხსენებისას "a car", მეორედ უკვე ნაცნობია და "The car".' },
            { en: 'Open the door, please.', ge: 'გააღე კარი, გთხოვ.', note: 'ორივემ ვიცით, რომელ კარზეა საუბარი.' }
          ]
        },
        {
          heading: '3. მრავლობითი რიცხვი და This / That / These / Those',
          explanationGe: 'მრავლობითის საწარმოებლად სიტყვას ემატება -s (book -> books). თუ სიტყვა მთავრდება -s, -sh, -ch, -x-ზე, ემატება -es (box -> boxes, watch -> watches). არსებობს რამდენიმე გამონაკლისი, რომელიც უნდა დაიზეპირო: man -> men, woman -> women, child -> children, person -> people.',
          examples: [
            { en: 'This is a key. -> These are keys.', ge: 'ეს გასაღებია. -> ესენი გასაღებებია. (ახლოს)' },
            { en: 'That is a house. -> Those are houses.', ge: 'ის სახლია. -> ისინი სახლებია. (შორს)' }
          ]
        }
      ],
      tables: [
        {
          title: 'ჩვენებითი ნაცვალსახელების მატრიცა',
          headers: ['მდებარეობა', 'მხოლობითი (+ is)', 'მრავლობითი (+ are)'],
          rows: [
            ['ახლოს (აქ)', 'This (ეს) -> This is a book.', 'These (ესენი) -> These are books.'],
            ['შორს (იქ)', 'That (ის) -> That is a car.', 'Those (ისინი) -> Those are cars.']
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I have three book.', right: 'I have three books.', explanationGe: 'ქართულისგან განსხვავებით, რიცხვითი სახელის (2, 3, 10...) შემდეგ არსებითი სახელი აუცილებლად მრავლობითში (-s) დგება!' },
        { wrong: 'These is my keys.', right: 'These are my keys.', explanationGe: '"These" მრავლობითია, ამიტომ სჭირდება "are" და არა "is".' },
        { wrong: 'She is a actress.', right: 'She is an actress.', explanationGe: 'actress იწყება ხმოვნით, ამიტომ საჭიროა "an".' }
      ]
    },
    dialogue: {
      title: 'რა დევს მაგიდაზე?',
      contextGe: 'გიორგი და მარიამი ოფისში ნივთებს ახარისხებენ.',
      lines: [
        { speaker: 'Giorgi', avatar: '👨🏻', english: 'Mariam, what is this on the table?', georgian: 'მარიამ, რა არის ეს მაგიდაზე?' },
        { speaker: 'Mariam', avatar: '👩🏼', english: 'This is a new phone, and that is an old watch.', georgian: 'ეს ახალი ტელეფონია, ხოლო ის ძველი საათია.' },
        { speaker: 'Giorgi', avatar: '👨🏻', english: 'Are these your keys?', georgian: 'ესენი შენი გასაღებებია?' },
        { speaker: 'Mariam', avatar: '👩🏼', english: 'No, these are not my keys. My keys are in the bag.', georgian: 'არა, ესენი ჩემი გასაღებები არ არის. ჩემი გასაღებები ჩანთაშია.' },
        { speaker: 'Giorgi', avatar: '👨🏻', english: 'And what are those big boxes?', georgian: 'და რა არის ის დიდი ყუთები?' },
        { speaker: 'Mariam', avatar: '👩🏼', english: 'Twenty new books for the children are in those boxes!', georgian: 'ოცი ახალი წიგნი ბავშვებისთვის არის იმ ყუთებში!' }
      ]
    },
    exercises: [
      {
        id: 'u2-ex1',
        unitId: 'a1-unit-2',
        type: 'multiple-choice',
        promptGe: 'აირჩიე სწორი არტიკლი:',
        question: 'It is ___ umbrella.',
        options: ['a', 'an', 'the', '— (არაფერი)'],
        correctAnswer: 'an',
        explanationGe: 'Umbrella [ამბრელა] იწყება ხმოვანი ბგერით [ა], ამიტომ ვიყენებთ "an" არტიკლს.'
      },
      {
        id: 'u2-ex2',
        unitId: 'a1-unit-2',
        type: 'fill-blank',
        promptGe: 'ჩაწერე სიტყვა "child" (ბავშვი) მრავლობით რიცხვში:',
        question: 'Three ___ are in the house.',
        correctAnswer: 'children',
        explanationGe: '"Child" არაწესიერი არსებითი სახელია და მისი მრავლობითი ფორმაა "children" (და არა childs!).'
      },
      {
        id: 'u2-ex3',
        unitId: 'a1-unit-2',
        type: 'word-order',
        promptGe: 'ააწყვე წინადადება სწორი თანმიმდევრობით:',
        question: 'ეს ვაშლები წითელია.',
        options: ['red', 'are', 'apples', 'These'],
        correctAnswer: 'These apples are red',
        acceptedAnswers: ['These apples are red.'],
        explanationGe: 'ეს ვაშლები (These apples) + არიან (are) + წითელი (red).'
      },
      {
        id: 'u2-ex4',
        unitId: 'a1-unit-2',
        type: 'matching',
        promptGe: 'დააკავშირე მხოლობითი და მრავლობითი ფორმები:',
        question: 'შეუსაბამე წყვილები',
        matchingPairs: [
          { left: 'Man (კაცი)', right: 'Men (კაცები)' },
          { left: 'Person (ადამიანი)', right: 'People (ხალხი)' },
          { left: 'Box (ყუთი)', right: 'Boxes (ყუთები)' },
          { left: 'This (ეს)', right: 'These (ესენი)' }
        ],
        correctAnswer: 'matched',
        explanationGe: 'შესანიშნავია! არაწესიერი მრავლობითი ფორმები სწორად დაიმახსოვრე.'
      },
      {
        id: 'u2-ex5',
        unitId: 'a1-unit-2',
        type: 'translation-ge-en',
        promptGe: 'თარგმნე ინგლისურად (არ დაგავიწყდეს არტიკლი!):',
        question: 'ეს ახალი მანქანაა.',
        correctAnswer: 'This is a new car.',
        acceptedAnswers: ['This is a new car', 'It is a new car.', 'It is a new car'],
        explanationGe: 'მხოლობით რიცხვში თვლად არსებით სახელს (car) სჭირდება არტიკლი "a", რომელიც დგება ზედსართავის (new) წინ: a new car.'
      },
      {
        id: 'u2-ex6',
        unitId: 'a1-unit-2',
        type: 'listening',
        promptGe: 'მოუსმინე და აკრიფე წინადადება:',
        question: 'დააჭირე დინამიკს',
        audioText: 'Those houses are very old',
        correctAnswer: 'Those houses are very old',
        acceptedAnswers: ['Those houses are very old.'],
        explanationGe: 'Those houses are very old (ის სახლები ძალიან ძველია).'
      },
      {
        id: 'u2-ex7',
        unitId: 'a1-unit-2',
        type: 'typing',
        promptGe: 'დაწერე ინგლისურად სიტყვა:',
        question: 'ქოლგა',
        correctAnswer: 'umbrella',
        acceptedAnswers: ['an umbrella'],
        explanationGe: 'ქოლგა ინგლისურად არის "umbrella".'
      }
    ],
    unitTest: [
      {
        id: 'u2-test1',
        unitId: 'a1-unit-2',
        type: 'multiple-choice',
        promptGe: 'ტესტი 1/4: აირჩიე გრამატიკულად სწორი ვარიანტი:',
        question: 'რომელი წინადადებაა სწორი?',
        options: ['This are five book.', 'These are five books.', 'These is five books.', 'This is five books.'],
        correctAnswer: 'These are five books.',
        explanationGe: '5 წიგნი მრავლობითია, ამიტომ გვჭირდება: These + are + five + books.'
      },
      {
        id: 'u2-test2',
        unitId: 'a1-unit-2',
        type: 'fill-blank',
        promptGe: 'ტესტი 2/4: ჩასვი a ან an:',
        question: 'She is ___ old friend.',
        correctAnswer: 'an',
        explanationGe: 'სიტყვა "old" იწყება ხმოვნით, ამიტომ იწერება "an".'
      },
      {
        id: 'u2-test3',
        unitId: 'a1-unit-2',
        type: 'translation-ge-en',
        promptGe: 'ტესტი 3/4: თარგმნე ინგლისურად:',
        question: 'ის ჩემი ჩანთაა.',
        correctAnswer: 'That is my bag.',
        acceptedAnswers: ['That is my bag', 'That\'s my bag.', 'That\'s my bag'],
        explanationGe: 'ის (შორს) = That, არის = is, ჩემი ჩანთა = my bag.'
      },
      {
        id: 'u2-test4',
        unitId: 'a1-unit-2',
        type: 'multiple-choice',
        promptGe: 'ტესტი 4/4: რა არის სიტყვა "Woman"-ის მრავლობითი ფორმა?',
        question: 'One woman -> Two ___',
        options: ['womans', 'women', 'womens', 'womanes'],
        correctAnswer: 'women',
        explanationGe: 'Woman -> Women [ვიმინ] არაწესიერი მრავლობითი ფორმაა.'
      }
    ]
  },

  // =========================================================================
  // UNIT 3: ოჯახი, კუთვნილებითი ფორმები ('s, my/your) და "Have got"
  // =========================================================================
  {
    id: 'a1-unit-3',
    level: 'A1',
    unitNumber: 3,
    titleGe: 'ოჯახი, კუთვნილება და "Have got" (ქონა/ყოლა)',
    titleEn: 'Family, Possessives & "Have got"',
    descriptionGe: 'ისწავლე ოჯახის წევრების დასახელება, როგორ გამოხატო კუთვნილება (ჩემი, მისი, გიორგის...) და როგორ თქვა, რა გაქვს ან ვინ გყავს.',
    estimatedMinutes: 30,
    icon: '👨‍👩‍👧‍👦',
    isAvailable: true,
    vocabulary: [
      { id: 'u3-v1', english: 'Family', georgian: 'ოჯახი', transcriptionGe: 'ფემილი', partOfSpeech: 'არსებითი', exampleEn: 'I have got a big family.', exampleGe: 'მე დიდი ოჯახი მყავს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v2', english: 'Mother / Mum', georgian: 'დედა', transcriptionGe: 'მაზერ / მამ', partOfSpeech: 'არსებითი', exampleEn: 'My mother is a doctor.', exampleGe: 'დედაჩემი ექიმია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v3', english: 'Father / Dad', georgian: 'მამა', transcriptionGe: 'ფაზერ / დედ', partOfSpeech: 'არსებითი', exampleEn: 'His father is at work.', exampleGe: 'მამამისი სამსახურშია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v4', english: 'Parents', georgian: 'მშობლები', transcriptionGe: 'ფერენთს', partOfSpeech: 'არსებითი', exampleEn: 'Our parents are in Rustavi.', exampleGe: 'ჩვენი მშობლები რუსთავში არიან.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v5', english: 'Brother', georgian: 'ძმა', transcriptionGe: 'ბრაზერ', partOfSpeech: 'არსებითი', exampleEn: 'Have you got a brother?', exampleGe: 'ძმა გყავს?', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v6', english: 'Sister', georgian: 'და', transcriptionGe: 'სისთერ', partOfSpeech: 'არსებითი', exampleEn: 'She has got two sisters.', exampleGe: 'მას ორი და ჰყავს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v7', english: 'Son', georgian: 'ვაჟიშვილი', transcriptionGe: 'სან', partOfSpeech: 'არსებითი', exampleEn: 'He is their son.', exampleGe: 'ის მათი ვაჟია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v8', english: 'Daughter', georgian: 'ქალიშვილი', transcriptionGe: 'დოთერ', partOfSpeech: 'არსებითი', exampleEn: 'Her daughter is five years old.', exampleGe: 'მისი ქალიშვილი ხუთი წლისაა.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v9', english: 'Husband', georgian: 'ქმარი', transcriptionGe: 'ჰაზბენდ', partOfSpeech: 'არსებითი', exampleEn: 'Ana\'s husband is tall.', exampleGe: 'ანას ქმარი მაღალია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v10', english: 'Wife', georgian: 'ცოლი', transcriptionGe: 'უაიფ', partOfSpeech: 'არსებითი', exampleEn: 'This is my wife.', exampleGe: 'ეს ჩემი ცოლია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v11', english: 'Grandmother', georgian: 'ბებია', transcriptionGe: 'გრენდმაზერ', partOfSpeech: 'არსებითი', exampleEn: 'My grandmother is very kind.', exampleGe: 'ჩემი ბებია ძალიან კეთილია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v12', english: 'Grandfather', georgian: 'ბაბუა / პაპა', transcriptionGe: 'გრენდფაზერ', partOfSpeech: 'არსებითი', exampleEn: 'His grandfather has got an old car.', exampleGe: 'მის ბაბუას ძველი მანქანა ჰყავს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v13', english: 'Uncle', georgian: 'ბიძა', transcriptionGe: 'ანქლ', partOfSpeech: 'არსებითი', exampleEn: 'My uncle lives in London.', exampleGe: 'ბიძაჩემი ლონდონში ცხოვრობს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v14', english: 'Aunt', georgian: 'დეიდა / მამიდა / ბიცოლა', transcriptionGe: 'ანთ', partOfSpeech: 'არსებითი', exampleEn: 'She is my aunt.', exampleGe: 'ის ჩემი დეიდაა (ან მამიდა).', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v15', english: 'Cousin', georgian: 'ბიძაშვილი / დეიდაშვილი / მამიდაშვილი', transcriptionGe: 'ქაზნ', partOfSpeech: 'არსებითი', exampleEn: 'Dato is my cousin.', exampleGe: 'დათო ჩემი ბიძაშვილია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v16', english: 'My / Your', georgian: 'ჩემი / შენი (თქვენი)', transcriptionGe: 'მაი / იორ', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'Is this your computer?', exampleGe: 'ეს შენი კომპიუტერია?', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v17', english: 'His / Her', georgian: 'მისი (კაცის) / მისი (ქალის)', transcriptionGe: 'ჰიზ / ჰერ', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'His name is Nika, her name is Nino.', exampleGe: 'მისი (ბიჭის) სახელია ნიკა, მისი (გოგოს) სახელია ნინო.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v18', english: 'Our / Their', georgian: 'ჩვენი / მათი', transcriptionGe: 'აუარ / ზეარ', partOfSpeech: 'ნაცვალსახელი', exampleEn: 'This is our house.', exampleGe: 'ეს ჩვენი სახლია.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v19', english: 'Dog', georgian: 'ძაღლი', transcriptionGe: 'დოგ', partOfSpeech: 'არსებითი', exampleEn: 'We have got a dog.', exampleGe: 'ჩვენ ძაღლი გვყავს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v20', english: 'Cat', georgian: 'კატა', transcriptionGe: 'ქეთ', partOfSpeech: 'არსებითი', exampleEn: 'She has not got a cat.', exampleGe: 'მას კატა არ ჰყავს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v21', english: 'Computer', georgian: 'კომპიუტერი', transcriptionGe: 'ქომფიუთერ', partOfSpeech: 'არსებითი', exampleEn: 'I have got a fast computer.', exampleGe: 'მე სწრაფი კომპიუტერი მაქვს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v22', english: 'Bicycle / Bike', georgian: 'ველოსიპედი', transcriptionGe: 'ბაისიქლ / ბაიქ', partOfSpeech: 'არსებითი', exampleEn: 'Has he got a bike?', exampleGe: 'მას ველოსიპედი აქვს?', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v23', english: 'Time', georgian: 'დრო', transcriptionGe: 'თაიმ', partOfSpeech: 'არსებითი', exampleEn: 'I have no time today.', exampleGe: 'დღეს დრო არ მაქვს.', unitId: 'a1-unit-3', level: 'A1' },
      { id: 'u3-v24', english: 'Money', georgian: 'ფული', transcriptionGe: 'მანი', partOfSpeech: 'არსებითი', exampleEn: 'Have you got money?', exampleGe: 'ფული გაქვს?', unitId: 'a1-unit-3', level: 'A1' }
    ],
    grammar: {
      title: 'კუთვნილებითი ფორმები (Possessives) და "Have got / Has got"',
      summaryGe: 'ინგლისურში სულიერისა და უსულოს ფლობისთვის ერთი და იგივე ზმნა გამოიყენება: "Have got" (ან მხოლობით მე-3 პირში "Has got"). ასევე, კუთვნილებაში მკაცრად განირჩევა მამრობითი (his) და მდედრობითი (her) სქესი.',
      georgianComparison: 'ყურადღება მიაქციე 2 მთავარ სხვაობას ქართულთან: 1) ქართულში ვამბობთ „მყავს ძმა/ძაღლი/მანქანა“ და „მაქვს წიგნი/სახლი“. ინგლისურში სულიერზეც და უსულოზეც ვიყენებთ ერთ ზმნას: "have got"! 2) ქართულში ვამბობთ „მისი წიგნი“ (არ ჩანს კაცისაა თუ ქალის). ინგლისურში კი თუ წიგნი კაცისაა — "his book", თუ ქალისაა — "her book".',
      sections: [
        {
          heading: '1. კუთვნილებითი ნაცვალსახელები და აპოსტროფი (\'s)',
          explanationGe: 'თითოეულ პირის ნაცვალსახელს თავისი კუთვნილებითი წყვილი აქვს: I -> My (ჩემი), You -> Your (შენი/თქვენი), He -> His (მისი - კაცის), She -> Her (მისი - ქალის), It -> Its (მისი - საგნის), We -> Our (ჩვენი), They -> Their (მათი). ხოლო როცა გვინდა ვთქვათ „გიორგის მანქანა“, სახელს ვუმატებთ აპოსტროფს და s-ს: Giorgi\'s car.',
          examples: [
            { en: 'This is Nika and this is his sister.', ge: 'ეს ნიკაა და ეს მისი დაა.', note: 'ნიკა ბიჭია, ამიტომ მისი = his (მიუხედავად იმისა, რომ და გოგოა!).' },
            { en: 'My mother\'s name is Nana.', ge: 'დედაჩემის სახელია ნანა.', note: 'mother\'s = დედის.' }
          ]
        },
        {
          heading: '2. Have got და Has got (მაქვს / მყავს)',
          explanationGe: 'I, You, We, They პირებთან ვიყენებთ "have got"-ს, ხოლო He, She, It (მხოლობითი მე-3 პირი) იყენებს "has got"-ს! უარყოფითში ემატება not: haven\'t got / hasn\'t got. კითხვაში კი Have ან Has გადმოდის წინ!',
          examples: [
            { en: 'I have got a big family.', ge: 'მე დიდი ოჯახი მყავს.' },
            { en: 'She has got a new car.', ge: 'მას (გოგოს) ახალი მანქანა ჰყავს.' },
            { en: 'Have you got a brother? — Yes, I have.', ge: 'ძმა გყავს? — დიახ, მყავს.' },
            { en: 'He hasn\'t got a computer.', ge: 'მას არ აქვს კომპიუტერი.' }
          ]
        }
      ],
      tables: [
        {
          title: 'ნაცვალსახელები და "Have got" უღლება',
          headers: ['პირი (ვინ?)', 'კუთვნილებითი (ვისი?)', 'მტკიცებითი (+)', 'უარყოფითი (-)', 'კითხვითი (?)'],
          rows: [
            ['I (მე)', 'My (ჩემი)', 'I have got', 'I haven\'t got', 'Have I got?'],
            ['You (შენ/თქვენ)', 'Your (შენი)', 'You have got', 'You haven\'t got', 'Have you got?'],
            ['He (ის - კაცი)', 'His (მისი)', 'He has got', 'He hasn\'t got', 'Has he got?'],
            ['She (ის - ქალი)', 'Her (მისი)', 'She has got', 'She hasn\'t got', 'Has she got?'],
            ['It (ის - საგანი)', 'Its (მისი)', 'It has got', 'It hasn\'t got', 'Has it got?'],
            ['We (ჩვენ)', 'Our (ჩვენი)', 'We have got', 'We haven\'t got', 'Have we got?'],
            ['They (ისინი)', 'Their (მათი)', 'They have got', 'They haven\'t got', 'Have they got?']
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'She have got a dog.', right: 'She has got a dog.', explanationGe: 'He / She / It-თან ყოველთვის იწერება "has got" და არა "have got"!' },
        { wrong: 'Car of Giorgi', right: 'Giorgi\'s car', explanationGe: 'ადამიანის სახელთან კუთვნილება იწარმოება \'s-ით: Giorgi\'s car.' },
        { wrong: 'Have you a brother? — Yes, I got.', right: 'Have you got a brother? — Yes, I have.', explanationGe: 'მოკლე პასუხში ვიყენებთ დამხმარე ზმნას "have/has" (got-ის გარეშე).' }
      ]
    },
    dialogue: {
      title: 'საუბარი ოჯახზე',
      contextGe: 'სანდრო აჩვენებს ელენეს თავისი ოჯახის ფოტოს ტელეფონში.',
      lines: [
        { speaker: 'Elene', avatar: '👩🏻', english: 'Sandro, is this your family in the photo?', georgian: 'სანდრო, ფოტოზე ეს შენი ოჯახია?' },
        { speaker: 'Sandro', avatar: '🧑🏻', english: 'Yes! These are my parents. My father\'s name is Davit and my mother\'s name is Tamari.', georgian: 'კი! ესენი ჩემი მშობლები არიან. მამაჩემის სახელია დავითი, ხოლო დედაჩემის — თამარი.' },
        { speaker: 'Elene', avatar: '👩🏻', english: 'Have you got brothers or sisters?', georgian: 'ძმები ან დები გყავს?' },
        { speaker: 'Sandro', avatar: '🧑🏻', english: 'I have got one sister, her name is Salome. I haven\'t got a brother.', georgian: 'ერთი და მყავს, მისი სახელია სალომე. ძმა არ მყავს.' },
        { speaker: 'Elene', avatar: '👩🏻', english: 'Has your sister got a dog? What is that in the photo?', georgian: 'შენს დას ძაღლი ჰყავს? რა არის ის ფოტოზე?' },
        { speaker: 'Sandro', avatar: '🧑🏻', english: 'Yes, she has got a big dog and two cats!', georgian: 'დიახ, მას დიდი ძაღლი და ორი კატა ჰყავს!' }
      ]
    },
    exercises: [
      {
        id: 'u3-ex1',
        unitId: 'a1-unit-3',
        type: 'multiple-choice',
        promptGe: 'აირჩიე სწორი ფორმა:',
        question: 'My brother ___ got a new computer.',
        options: ['have', 'has', 'is', 'are'],
        correctAnswer: 'has',
        explanationGe: '"My brother" იგივეა რაც "He" (მხოლობითი მე-3 პირი), ამიტომ სჭირდება "has".'
      },
      {
        id: 'u3-ex2',
        unitId: 'a1-unit-3',
        type: 'fill-blank',
        promptGe: 'ჩასვი სწორი კუთვნილებითი ნაცვალსახელი (my, his, her, our):',
        question: 'This is Ana and this is ___ husband.',
        correctAnswer: 'her',
        explanationGe: 'ანა ქალია (She), ამიტომ „მისი (ანას) ქმარი“ იქნება "her husband".'
      },
      {
        id: 'u3-ex3',
        unitId: 'a1-unit-3',
        type: 'word-order',
        promptGe: 'ააწყვე კითხვითი წინადადება:',
        question: 'მანქანა გყავს?',
        options: ['got', 'you', 'Have', 'car', 'a', '?'],
        correctAnswer: 'Have you got a car ?',
        acceptedAnswers: ['Have you got a car?'],
        explanationGe: 'კითხვაში "Have" გადადის წინ: Have + you + got + a car?'
      },
      {
        id: 'u3-ex4',
        unitId: 'a1-unit-3',
        type: 'matching',
        promptGe: 'დააკავშირე ოჯახის წევრები:',
        question: 'შეუსაბამე წყვილები',
        matchingPairs: [
          { left: 'Parents', right: 'მშობლები' },
          { left: 'Daughter', right: 'ქალიშვილი' },
          { left: 'Uncle', right: 'ბიძა' },
          { left: 'Cousin', right: 'ბიძაშვილი / დეიდაშვილი' }
        ],
        correctAnswer: 'matched',
        explanationGe: 'შესანიშნავია! ოჯახის წევრების ლექსიკა კარგად აითვისე.'
      },
      {
        id: 'u3-ex5',
        unitId: 'a1-unit-3',
        type: 'translation-ge-en',
        promptGe: 'თარგმნე ინგლისურად:',
        question: 'ჩვენ დიდი სახლი გვაქვს.',
        correctAnswer: 'We have got a big house.',
        acceptedAnswers: ['We have got a big house', 'We have a big house.', 'We have a big house', 'We\'ve got a big house.'],
        explanationGe: 'ჩვენ = We, გვაქვს = have got, დიდი სახლი = a big house.'
      },
      {
        id: 'u3-ex6',
        unitId: 'a1-unit-3',
        type: 'listening',
        promptGe: 'მოუსმინე აუდიოს და აკრიფე წინადადება:',
        question: 'დააჭირე დინამიკს',
        audioText: 'She has got two sisters',
        correctAnswer: 'She has got two sisters',
        acceptedAnswers: ['She has got two sisters.'],
        explanationGe: 'She has got two sisters (მას ორი და ჰყავს).'
      },
      {
        id: 'u3-ex7',
        unitId: 'a1-unit-3',
        type: 'typing',
        promptGe: 'აკრიფე ინგლისურად:',
        question: 'ბაბუა / პაპა',
        correctAnswer: 'grandfather',
        acceptedAnswers: ['grandpa', 'a grandfather'],
        explanationGe: 'ბაბუა ინგლისურად არის "grandfather" (ან სასაუბროდ "grandpa").'
      }
    ],
    unitTest: [
      {
        id: 'u3-test1',
        unitId: 'a1-unit-3',
        type: 'multiple-choice',
        promptGe: 'ტესტი 1/4: როგორ ითქმის „ნიკას ტელეფონი“?',
        question: 'აირჩიე სწორი ფორმა:',
        options: ['Nika phone', 'Nika\'s phone', 'Phone Nika', 'His Nika phone'],
        correctAnswer: 'Nika\'s phone',
        explanationGe: 'კუთვნილების გამოსახატავად ადამიანის სახელს ემატება \'s.'
      },
      {
        id: 'u3-test2',
        unitId: 'a1-unit-3',
        type: 'fill-blank',
        promptGe: 'ტესტი 2/4: ჩასვი Have ან Has:',
        question: '___ your mother got a car?',
        correctAnswer: 'Has',
        acceptedAnswers: ['has'],
        explanationGe: '"Your mother" არის მხოლობითი მე-3 პირი (She), ამიტომ კითხვა იწყება "Has"-ით.'
      },
      {
        id: 'u3-test3',
        unitId: 'a1-unit-3',
        type: 'translation-ge-en',
        promptGe: 'ტესტი 3/4: თარგმნე ინგლისურად:',
        question: 'მას (კაცს) კატა არ ჰყავს.',
        correctAnswer: 'He has not got a cat.',
        acceptedAnswers: ['He has not got a cat', 'He hasn\'t got a cat.', 'He hasn\'t got a cat', 'He does not have a cat'],
        explanationGe: 'He + has not (hasn\'t) got + a cat.'
      },
      {
        id: 'u3-test4',
        unitId: 'a1-unit-3',
        type: 'word-order',
        promptGe: 'ტესტი 4/4: ააწყვე წინადადება:',
        question: 'მათი მშობლები სახლში არიან.',
        options: ['at', 'are', 'parents', 'Their', 'home'],
        correctAnswer: 'Their parents are at home',
        acceptedAnswers: ['Their parents are at home.'],
        explanationGe: 'მათი მშობლები (Their parents) + არიან (are) + სახლში (at home).'
      }
    ]
  },

  // =========================================================================
  // UNITS 4 - 10: A1 კურიკულუმის მომდევნო იუნიტები (სტრუქტურული შაბლონები)
  // =========================================================================
  {
    id: 'a1-unit-4',
    level: 'A1',
    unitNumber: 4,
    titleGe: 'Present Simple — ყოველდღიური რუტინა და ჩვევები',
    titleEn: 'Present Simple & Daily Routine',
    descriptionGe: 'აწმყო მარტივი დრო, ზმნების დაბოლოება -s მე-3 პირში, დამხმარე ზმნები Do/Does და დროის ზმნიზედები (always, usually, never).',
    estimatedMinutes: 30,
    icon: '⏰',
    isAvailable: true,
    vocabulary: [
      { id: 'u4-v1', english: 'Wake up', georgian: 'გაღვიძება', transcriptionGe: 'უეიქ აფ', partOfSpeech: 'ზმნა', exampleEn: 'I wake up at 8 o\'clock.', exampleGe: 'მე 8 საათზე ვიღვიძებ.', unitId: 'a1-unit-4', level: 'A1' },
      { id: 'u4-v2', english: 'Work', georgian: 'მუშაობა / სამსახური', transcriptionGe: 'ვორქ', partOfSpeech: 'ზმნა', exampleEn: 'He works every day.', exampleGe: 'ის ყოველდღე მუშაობს.', unitId: 'a1-unit-4', level: 'A1' },
      { id: 'u4-v3', english: 'Live', georgian: 'ცხოვრება', transcriptionGe: 'ლივ', partOfSpeech: 'ზმნა', exampleEn: 'Where do you live?', exampleGe: 'სად ცხოვრობ?', unitId: 'a1-unit-4', level: 'A1' },
      { id: 'u4-v4', english: 'Speak', georgian: 'საუბარი / ლაპარაკი', transcriptionGe: 'სფიქ', partOfSpeech: 'ზმნა', exampleEn: 'We speak Georgian and English.', exampleGe: 'ჩვენ ვსაუბრობთ ქართულად და ინგლისურად.', unitId: 'a1-unit-4', level: 'A1' },
      { id: 'u4-v5', english: 'Always', georgian: 'ყოველთვის', transcriptionGe: 'ოლვეიზ', partOfSpeech: 'ზმნიზედა', exampleEn: 'She always drinks coffee.', exampleGe: 'ის ყოველთვის სვამს ყავას.', unitId: 'a1-unit-4', level: 'A1' }
    ],
    grammar: {
      title: 'Present Simple (აწმყო მარტივი დრო)',
      summaryGe: 'გამოიყენება რეგულარული, განმეორებადი მოქმედებებისა და ფაქტების გამოსახატავად. He/She/It-თან ზმნას ემატება -s, ხოლო კითხვასა და უარყოფაში ჩნდება Do / Does.',
      georgianComparison: 'ქართულში ზმნა ყველა პირში იცვლება (ვწერ, წერ, წერს...), ინგლისურში კი ზმნა უცვლელია ყველა პირში, გარდა He/She/It-ისა, სადაც ემატება -s (I work -> He works).',
      sections: [
        {
          heading: 'მტკიცებითი, უარყოფითი და კითხვითი ფორმები',
          explanationGe: 'როდესაც წინადადებაში შემოდის დამხმარე ზმნა "does" ან "doesn\'t", მთავარ ზმნას -s აღარ ემატება!',
          examples: [
            { en: 'He works in Tbilisi.', ge: 'ის მუშაობს თბილისში.' },
            { en: 'He does not (doesn\'t) work here.', ge: 'ის აქ არ მუშაობს.', note: 'works გახდა work, რადგან doesn\'t-მა წაიღო -s.' },
            { en: 'Do you speak English?', ge: 'საუბრობ ინგლისურად?' }
          ]
        }
      ],
      tables: [
        {
          title: 'Present Simple-ის სქემა',
          headers: ['პირი', 'მტკიცებითი (+)', 'უარყოფითი (-)', 'კითხვითი (?)'],
          rows: [
            ['I / You / We / They', 'I work', 'I don\'t work', 'Do I work?'],
            ['He / She / It', 'He works', 'He doesn\'t work', 'Does he work?']
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'Does he works here?', right: 'Does he work here?', explanationGe: 'Does-თან ერთად ზმნას -s აღარ ემატება.' }
      ]
    },
    dialogue: {
      title: 'ჩემი სამუშაო დღე',
      contextGe: 'ორი მეგობარი განიხილავს თავის ყოველდღიურ განრიგს.',
      lines: [
        { speaker: 'Luka', avatar: '🧑🏻', english: 'What time do you wake up every day?', georgian: 'რომელ საათზე იღვიძებ ყოველდღე?' },
        { speaker: 'Nino', avatar: '👩🏻', english: 'I usually wake up at 7 o\'clock and drink coffee.', georgian: 'ჩვეულებრივ 7 საათზე ვიღვიძებ და ყავას ვსვამ.' }
      ]
    },
    exercises: [
      {
        id: 'u4-ex1',
        unitId: 'a1-unit-4',
        type: 'multiple-choice',
        promptGe: 'აირჩიე სწორი ფორმა:',
        question: 'She ___ English every day.',
        options: ['study', 'studies', 'studys', 'studying'],
        correctAnswer: 'studies',
        explanationGe: 'She-სთან ზმნა study იღებს -es დაბოლოებას (y გადადის i-ში): studies.'
      },
      {
        id: 'u4-ex2',
        unitId: 'a1-unit-4',
        type: 'fill-blank',
        promptGe: 'ჩასვი Do ან Does:',
        question: '___ you live in Rustavi?',
        correctAnswer: 'Do',
        acceptedAnswers: ['do'],
        explanationGe: 'You-სთან კითხვით ფორმაში ვიყენებთ დამხმარე ზმნას "Do".'
      }
    ],
    unitTest: [
      {
        id: 'u4-test1',
        unitId: 'a1-unit-4',
        type: 'translation-ge-en',
        promptGe: 'თარგმნე ინგლისურად:',
        question: 'მე ვსაუბრობ ინგლისურად.',
        correctAnswer: 'I speak English.',
        acceptedAnswers: ['I speak English'],
        explanationGe: 'I + speak + English.'
      }
    ]
  },
  {
    id: 'a1-unit-5',
    level: 'A1',
    unitNumber: 5,
    titleGe: 'კითხვითი სიტყვები (Wh-), საჭმელი და Some/Any',
    titleEn: 'Wh- Questions, Food & Countable/Uncountable',
    descriptionGe: 'კითხვითი სიტყვები (What, Where, When, Why, How), საკვების ლექსიკა, თვლადი/უთვლადი სახელები და some/any-ს გამოყენება.',
    estimatedMinutes: 25,
    icon: '🍕',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Wh- Questions & Some/Any', summaryGe: 'მალე დაემატება სრული გაკვეთილი შაბლონის მიხედვით.', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a1-unit-6',
    level: 'A1',
    unitNumber: 6,
    titleGe: 'ქალაქი, There is / There are და ადგილის წინდებულები',
    titleEn: 'Places in Town, There is/are & Prepositions',
    descriptionGe: 'როგორ აღვწეროთ სად რა მდებარეობს (There is / There are) და წინდებულები: in, on, at, under, next to, between.',
    estimatedMinutes: 25,
    icon: '🏙️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'There is / There are', summaryGe: 'მალე დაემატება.', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a1-unit-7',
    level: 'A1',
    unitNumber: 7,
    titleGe: 'Present Continuous — რა ხდება ამ წუთას?',
    titleEn: 'Present Continuous, Clothes & Weather',
    descriptionGe: 'აწმყო განგრძობითი დრო (am/is/are + V-ing), ამინდის აღწერა და ტანსაცმლის ლექსიკა.',
    estimatedMinutes: 25,
    icon: '🌦️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Present Continuous', summaryGe: 'მალე დაემატება.', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a1-unit-8',
    level: 'A1',
    unitNumber: 8,
    titleGe: 'მოდალური ზმნა Can / Can\'t — უნარები და შესაძლებლობები',
    titleEn: 'Modal Verb Can / Can\'t, Body & Hobbies',
    descriptionGe: 'როგორ ვთქვათ რა შეგვიძლია და რა არა (I can swim, I can drive), სხეულის ნაწილები და სპორტი.',
    estimatedMinutes: 25,
    icon: '🏊‍♂️',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Can / Can\'t', summaryGe: 'მალე დაემატება.', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a1-unit-9',
    level: 'A1',
    unitNumber: 9,
    titleGe: 'Past Simple (Was / Were) — სად იყავი გუშინ?',
    titleEn: 'Past Simple of To Be (Was / Were) & Dates',
    descriptionGe: 'ზმნა To Be წარსულ დროში (was / were), წლები, თვეები, თარიღები და წარსული მდგომარეობის აღწერა.',
    estimatedMinutes: 25,
    icon: '📅',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Was / Were', summaryGe: 'მალე დაემატება.', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  },
  {
    id: 'a1-unit-10',
    level: 'A1',
    unitNumber: 10,
    titleGe: 'Past Simple — წესიერი და არაწესიერი ზმნები + A1 ფინალი',
    titleEn: 'Past Simple Regular/Irregular Verbs & A1 Final Test',
    descriptionGe: 'მოქმედებები წარსულში (-ed და მე-2 ფორმები, Did / Didn\'t), მოგონებები და A1 დონის შემაჯამებელი ტესტი.',
    estimatedMinutes: 35,
    icon: '🎓',
    isAvailable: false,
    vocabulary: [],
    grammar: { title: 'Past Simple', summaryGe: 'მალე დაემატება.', georgianComparison: '', sections: [], tables: [], commonMistakes: [] },
    dialogue: { title: '', contextGe: '', lines: [] },
    exercises: [],
    unitTest: []
  }
];