export interface StudyBlock {
  id: string;
  title: string;
  duration: number; // minutes
  description: string;
  resource: string;
}

export interface DayPlan {
  day: string;
  dayDe: string;
  theme: string;
  blocks: StudyBlock[];
}

export const weeklyPlan: DayPlan[] = [
  {
    day: "Monday",
    dayDe: "Montag",
    theme: "Grammar",
    blocks: [
      {
        id: "mon-1",
        title: "Grammar Theory",
        duration: 40,
        description: "Study Konjunktiv II forms and Relativsatze patterns. Work through textbook exercises.",
        resource: "DeutschAkademie",
      },
      {
        id: "mon-2",
        title: "Grammar Drills",
        duration: 40,
        description: "Complete fill-in-the-blank and sentence transformation exercises.",
        resource: "DW Deutsch",
      },
      {
        id: "mon-3",
        title: "Anki Review",
        duration: 40,
        description: "Review grammar flashcards. Add new cards for today's patterns.",
        resource: "Anki",
      },
    ],
  },
  {
    day: "Tuesday",
    dayDe: "Dienstag",
    theme: "Listening + Shadowing",
    blocks: [
      {
        id: "tue-1",
        title: "Slow German Podcast",
        duration: 30,
        description: "Listen to one episode, take notes on new vocabulary and structures.",
        resource: "Slow German",
      },
      {
        id: "tue-2",
        title: "Easy German Video",
        duration: 45,
        description: "Watch one Easy German street interview. Shadow along with subtitles.",
        resource: "Easy German YouTube",
      },
      {
        id: "tue-3",
        title: "Shadowing Practice",
        duration: 45,
        description: "Repeat key segments. Focus on intonation and connected speech.",
        resource: "Easy German YouTube",
      },
    ],
  },
  {
    day: "Wednesday",
    dayDe: "Mittwoch",
    theme: "Writing Practice",
    blocks: [
      {
        id: "wed-1",
        title: "Free Write (200 words)",
        duration: 40,
        description: "Write about a topic using today's target grammar. Aim for 200+ words.",
        resource: "Notebook",
      },
      {
        id: "wed-2",
        title: "Grammar Drills",
        duration: 40,
        description: "Passive voice, two-way prepositions, and clause connectors.",
        resource: "DeutschAkademie",
      },
      {
        id: "wed-3",
        title: "Error Correction",
        duration: 40,
        description: "Review yesterday's writing. Fix errors and rewrite improved version.",
        resource: "Notebook",
      },
    ],
  },
  {
    day: "Thursday",
    dayDe: "Donnerstag",
    theme: "Listening + Vocab",
    blocks: [
      {
        id: "thu-1",
        title: "YouTube in German",
        duration: 40,
        description: "Watch a German YouTuber on a topic you enjoy. Note new vocabulary.",
        resource: "YouTube",
      },
      {
        id: "thu-2",
        title: "Vocab Processing",
        duration: 40,
        description: "Create Anki cards from today's new words. Add example sentences.",
        resource: "Anki",
      },
      {
        id: "thu-3",
        title: "Anki Review",
        duration: 40,
        description: "Full Anki review session. Clear all due cards.",
        resource: "Anki",
      },
    ],
  },
  {
    day: "Friday",
    dayDe: "Freitag",
    theme: "Mock Exam Practice",
    blocks: [
      {
        id: "fri-1",
        title: "Reading Section",
        duration: 40,
        description: "Complete one Goethe B2 reading section under timed conditions.",
        resource: "Goethe B2 Exams",
      },
      {
        id: "fri-2",
        title: "Listening Section",
        duration: 40,
        description: "Complete one Goethe B2 listening section. Review wrong answers.",
        resource: "Goethe B2 Exams",
      },
      {
        id: "fri-3",
        title: "Writing Section",
        duration: 40,
        description: "Write a formal letter or argumentative essay from B2 prompts.",
        resource: "Goethe B2 Exams",
      },
    ],
  },
  {
    day: "Saturday",
    dayDe: "Samstag",
    theme: "Immersion",
    blocks: [
      {
        id: "sat-1",
        title: "German Series/Film",
        duration: 50,
        description: "Watch a German series or film. Use German subtitles only.",
        resource: "Netflix / Mediathek",
      },
      {
        id: "sat-2",
        title: "Tandem Exchange",
        duration: 40,
        description: "30 min speaking German + 10 min helping partner with your language.",
        resource: "Tandem",
      },
      {
        id: "sat-3",
        title: "Vocab from Immersion",
        duration: 30,
        description: "Process new words from today's film and conversation into Anki.",
        resource: "Anki",
      },
    ],
  },
  {
    day: "Sunday",
    dayDe: "Sonntag",
    theme: "Weekly Review + Reading",
    blocks: [
      {
        id: "sun-1",
        title: "Weekly Review",
        duration: 30,
        description: "Review the week's grammar notes and writing corrections.",
        resource: "Notebook",
      },
      {
        id: "sun-2",
        title: "Free Reading",
        duration: 50,
        description: "Read a German book, news article, or blog post for pleasure.",
        resource: "DW Deutsch",
      },
      {
        id: "sun-3",
        title: "Anki + Plan Next Week",
        duration: 40,
        description: "Clear all Anki reviews. Set goals for the coming week.",
        resource: "Anki",
      },
    ],
  },
];

export interface Phase {
  number: number;
  title: string;
  titleDe: string;
  months: string;
  weeks: [number, number]; // [start, end] inclusive
  focus: string[];
}

export const phases: Phase[] = [
  {
    number: 1,
    title: "Foundation",
    titleDe: "Grundlagen",
    months: "Months 1-2",
    weeks: [1, 8],
    focus: [
      "Konjunktiv II mastery",
      "Relativsatze (relative clauses)",
      "Two-way prepositions (Wechselprapositionen)",
      "Passive voice (Passiv)",
    ],
  },
  {
    number: 2,
    title: "Acceleration",
    titleDe: "Beschleunigung",
    months: "Months 3-4",
    weeks: [9, 16],
    focus: [
      "Konjunktiv I (reported speech)",
      "Advanced connectors & clause structures",
      "Full-speed podcast comprehension",
      "Full mock exams under timed conditions",
    ],
  },
  {
    number: 3,
    title: "Exam Mode",
    titleDe: "Prufungsmodus",
    months: "Months 5-6",
    weeks: [17, 24],
    focus: [
      "Daily exam component rotation",
      "Intensive speaking practice",
      "Timed full practice exams",
      "Book the real Goethe B2 exam",
    ],
  },
];

export interface Resource {
  name: string;
  url: string;
  description: string;
}

export const resources: Resource[] = [
  { name: "Anki", url: "https://apps.ankiweb.net", description: "Spaced repetition flashcards" },
  { name: "Easy German", url: "https://www.youtube.com/@EasyGerman", description: "Street interviews & lessons" },
  { name: "DW Deutsch", url: "https://www.dw.com/de", description: "News & learning materials" },
  { name: "Goethe B2 Exams", url: "https://www.goethe.de", description: "Official sample exams" },
  { name: "Tandem", url: "https://www.tandem.net", description: "Language exchange partner app" },
  { name: "DeutschAkademie", url: "https://www.deutschakademie.de", description: "Free grammar exercises" },
  { name: "Nicos Weg", url: "https://learngerman.dw.com", description: "DW video course" },
];

export interface Quote {
  german: string;
  english: string;
}

export const quotes: Quote[] = [
  { german: "Ubung macht den Meister.", english: "Practice makes perfect." },
  { german: "Aller Anfang ist schwer.", english: "Every beginning is hard." },
  { german: "Wer rastet, der rostet.", english: "If you rest, you rust." },
  { german: "Ohne Fleiss kein Preis.", english: "No pain, no gain." },
  { german: "Es ist noch kein Meister vom Himmel gefallen.", english: "No one is born a master." },
  { german: "Der Weg ist das Ziel.", english: "The journey is the destination." },
  { german: "Steter Tropfen hohlt den Stein.", english: "Constant dripping wears away the stone." },
  { german: "Man lernt nie aus.", english: "You never stop learning." },
  { german: "Wissen ist Macht.", english: "Knowledge is power." },
  { german: "Morgenstund hat Gold im Mund.", english: "The early bird catches the worm." },
];
