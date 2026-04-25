export interface ResourceLink {
  label: string;
  url: string;
}

export interface StudyBlock {
  id: string;
  title: string;
  duration: number; // minutes
  description: string;
  resource: string;
  links: ResourceLink[];
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
        links: [
          { label: "DeutschAkademie Grammar Trainer", url: "https://www.deutschakademie.de/online-deutschkurs/english/" },
          { label: "Konjunktiv II Explained (YouTube)", url: "https://www.youtube.com/watch?v=5Qos5UEZ5T0" },
          { label: "Relativsatze - Easy German", url: "https://www.youtube.com/watch?v=DqWMd_S-gME" },
          { label: "German Grammar - Lingolia", url: "https://deutsch.lingolia.com/en/grammar" },
        ],
      },
      {
        id: "mon-2",
        title: "Grammar Drills",
        duration: 40,
        description: "Complete fill-in-the-blank and sentence transformation exercises.",
        resource: "DW Deutsch",
        links: [
          { label: "DW Grammar Exercises", url: "https://learngerman.dw.com/en/grammar/c-55190142" },
          { label: "Schubert Verlag - Online Exercises", url: "https://www.schubert-verlag.de/aufgaben/uebungen_b2/b2_uebungen_index.htm" },
          { label: "Grammatiktraining B2 (PDF)", url: "https://www.klett-sprachen.de/grammatik-intensivtrainer-b2/t-1/9783126051682" },
        ],
      },
      {
        id: "mon-3",
        title: "Anki Review",
        duration: 40,
        description: "Review grammar flashcards. Add new cards for today's patterns.",
        resource: "Anki",
        links: [
          { label: "Download Anki", url: "https://apps.ankiweb.net" },
          { label: "German B2 Grammar Deck", url: "https://ankiweb.net/shared/info/1386119660" },
          { label: "How to Use Anki Effectively (YouTube)", url: "https://www.youtube.com/watch?v=QS2G-k2hQyg" },
        ],
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
        links: [
          { label: "Slow German Podcast", url: "https://slowgerman.com" },
          { label: "Slow German on Spotify", url: "https://open.spotify.com/show/5OHzoUXs6VTJqE3xnMwS2y" },
          { label: "Slow German on YouTube", url: "https://www.youtube.com/@slowgerman" },
        ],
      },
      {
        id: "tue-2",
        title: "Easy German Video",
        duration: 45,
        description: "Watch one Easy German street interview. Shadow along with subtitles.",
        resource: "Easy German YouTube",
        links: [
          { label: "Easy German YouTube Channel", url: "https://www.youtube.com/@EasyGerman" },
          { label: "Easy German - Street Interviews Playlist", url: "https://www.youtube.com/playlist?list=PLk1fjOl39-51Z1JxUMp5x5F7LhzpdYOn0" },
          { label: "Easy German Podcast", url: "https://www.easygerman.org/podcast" },
        ],
      },
      {
        id: "tue-3",
        title: "Shadowing Practice",
        duration: 45,
        description: "Repeat key segments. Focus on intonation and connected speech.",
        resource: "Easy German YouTube",
        links: [
          { label: "Shadowing Technique Guide (YouTube)", url: "https://www.youtube.com/watch?v=130bGdKFk-g" },
          { label: "Deutsch mit Marija - Aussprache", url: "https://www.youtube.com/@DeutschmitMarija" },
          { label: "Forvo German Pronunciation", url: "https://forvo.com/languages/de/" },
        ],
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
        links: [
          { label: "B2 Writing Prompts (Goethe)", url: "https://www.goethe.de/en/spr/kup/prf/prf/gb2/ub2.html" },
          { label: "LanguageTool - Grammar Checker", url: "https://languagetool.org" },
          { label: "Schreibtraining B2 Tips (YouTube)", url: "https://www.youtube.com/watch?v=p4xGJeEi7zU" },
        ],
      },
      {
        id: "wed-2",
        title: "Grammar Drills",
        duration: 40,
        description: "Passive voice, two-way prepositions, and clause connectors.",
        resource: "DeutschAkademie",
        links: [
          { label: "Passiv - Lingolia Exercises", url: "https://deutsch.lingolia.com/en/grammar/verbs/passive/exercises" },
          { label: "Wechselprapositionen Drill", url: "https://www.deutschakademie.de/online-deutschkurs/english/" },
          { label: "Konnektoren Overview (YouTube)", url: "https://www.youtube.com/watch?v=L84dizxLoas" },
        ],
      },
      {
        id: "wed-3",
        title: "Error Correction",
        duration: 40,
        description: "Review yesterday's writing. Fix errors and rewrite improved version.",
        resource: "Notebook",
        links: [
          { label: "LanguageTool - Paste & Check", url: "https://languagetool.org" },
          { label: "Duden - German Dictionary", url: "https://www.duden.de" },
          { label: "DWDS - Digital Dictionary", url: "https://www.dwds.de" },
        ],
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
        links: [
          { label: "Kurzgesagt (German Science)", url: "https://www.youtube.com/@KurzgesagtDE" },
          { label: "MrWissen2go (News/Knowledge)", url: "https://www.youtube.com/@MrWissen2goGeschichte" },
          { label: "Dinge Erklart (Science)", url: "https://www.youtube.com/@DingeErklwortet" },
          { label: "Leeroy will's wissen (Interviews)", url: "https://www.youtube.com/@leeroy_will_s_wissen" },
        ],
      },
      {
        id: "thu-2",
        title: "Vocab Processing",
        duration: 40,
        description: "Create Anki cards from today's new words. Add example sentences.",
        resource: "Anki",
        links: [
          { label: "Anki Web App", url: "https://apps.ankiweb.net" },
          { label: "dict.cc - German Dictionary", url: "https://www.dict.cc" },
          { label: "Linguee - Context Dictionary", url: "https://www.linguee.com/english-german" },
          { label: "How to Make Good Anki Cards (YouTube)", url: "https://www.youtube.com/watch?v=AbvaITy3oeQ" },
        ],
      },
      {
        id: "thu-3",
        title: "Anki Review",
        duration: 40,
        description: "Full Anki review session. Clear all due cards.",
        resource: "Anki",
        links: [
          { label: "Anki Web App", url: "https://apps.ankiweb.net" },
          { label: "German B2 Vocab Deck", url: "https://ankiweb.net/shared/info/653061995" },
        ],
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
        links: [
          { label: "Goethe B2 Practice Papers", url: "https://www.goethe.de/en/spr/kup/prf/prf/gb2/ub2.html" },
          { label: "Goethe B2 Reading Sample (PDF)", url: "https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_B2_Modellsatz_Lesen.pdf" },
          { label: "B2 Leseverstehen Tips (YouTube)", url: "https://www.youtube.com/watch?v=GKsR0TQ_bq0" },
        ],
      },
      {
        id: "fri-2",
        title: "Listening Section",
        duration: 40,
        description: "Complete one Goethe B2 listening section. Review wrong answers.",
        resource: "Goethe B2 Exams",
        links: [
          { label: "Goethe B2 Listening Sample", url: "https://www.goethe.de/en/spr/kup/prf/prf/gb2/ub2.html" },
          { label: "B2 Horverstehen Tips (YouTube)", url: "https://www.youtube.com/watch?v=K2IPThMDAHQ" },
          { label: "DW Langsam gesprochene Nachrichten", url: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-8150" },
        ],
      },
      {
        id: "fri-3",
        title: "Writing Section",
        duration: 40,
        description: "Write a formal letter or argumentative essay from B2 prompts.",
        resource: "Goethe B2 Exams",
        links: [
          { label: "Goethe B2 Writing Sample (PDF)", url: "https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_B2_Modellsatz_Schreiben.pdf" },
          { label: "Briefe schreiben B2 (YouTube)", url: "https://www.youtube.com/watch?v=RKkjZQ3FmkE" },
          { label: "B2 Redemittel List", url: "https://www.deutschakademie.de/online-deutschkurs/english/" },
          { label: "LanguageTool - Check Your Writing", url: "https://languagetool.org" },
        ],
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
        links: [
          { label: "Dark (Netflix Series)", url: "https://www.netflix.com/title/80100172" },
          { label: "How to Sell Drugs Online (Netflix)", url: "https://www.netflix.com/title/80218448" },
          { label: "Tatort - ARD Mediathek", url: "https://www.ardmediathek.de/sendung/tatort/Y3JpZDovL2Rhc2Vyc3RlLmRlL3RhdG9ydA" },
          { label: "ZDF Mediathek", url: "https://www.zdf.de/filme" },
          { label: "Top German Shows List", url: "https://www.imdb.com/list/ls090079912/" },
        ],
      },
      {
        id: "sat-2",
        title: "Tandem Exchange",
        duration: 40,
        description: "30 min speaking German + 10 min helping partner with your language.",
        resource: "Tandem",
        links: [
          { label: "Tandem App", url: "https://www.tandem.net" },
          { label: "HelloTalk (Alternative)", url: "https://www.hellotalk.com" },
          { label: "italki - Find a Tutor", url: "https://www.italki.com/en/teachers/german" },
          { label: "Conversation Topics B2 (PDF)", url: "https://www.goethe.de/en/spr/kup/prf/prf/gb2/ub2.html" },
        ],
      },
      {
        id: "sat-3",
        title: "Vocab from Immersion",
        duration: 30,
        description: "Process new words from today's film and conversation into Anki.",
        resource: "Anki",
        links: [
          { label: "Anki Web App", url: "https://apps.ankiweb.net" },
          { label: "dict.cc - Look Up Words", url: "https://www.dict.cc" },
          { label: "Reverso Context", url: "https://context.reverso.net/translation/german-english/" },
        ],
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
        links: [
          { label: "Lingolia Grammar Reference", url: "https://deutsch.lingolia.com/en/grammar" },
          { label: "German with Jenny - Reviews (YouTube)", url: "https://www.youtube.com/@linglonikjenny" },
        ],
      },
      {
        id: "sun-2",
        title: "Free Reading",
        duration: 50,
        description: "Read a German book, news article, or blog post for pleasure.",
        resource: "DW Deutsch",
        links: [
          { label: "DW Nachrichten", url: "https://www.dw.com/de/themen/s-9077" },
          { label: "Spiegel Online", url: "https://www.spiegel.de" },
          { label: "Zeit Online", url: "https://www.zeit.de" },
          { label: "Nachrichtenleicht (Easy News)", url: "https://www.nachrichtenleicht.de" },
          { label: "Projekt Gutenberg (Free German Books)", url: "https://www.projekt-gutenberg.org" },
        ],
      },
      {
        id: "sun-3",
        title: "Anki + Plan Next Week",
        duration: 40,
        description: "Clear all Anki reviews. Set goals for the coming week.",
        resource: "Anki",
        links: [
          { label: "Anki Web App", url: "https://apps.ankiweb.net" },
          { label: "Anki Stats & Progress Guide", url: "https://docs.ankiweb.net/stats.html" },
        ],
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
  { name: "Goethe B2 Exams", url: "https://www.goethe.de/en/spr/kup/prf/prf/gb2/ub2.html", description: "Official sample exams" },
  { name: "Tandem", url: "https://www.tandem.net", description: "Language exchange partner app" },
  { name: "DeutschAkademie", url: "https://www.deutschakademie.de/online-deutschkurs/english/", description: "Free grammar exercises" },
  { name: "Nicos Weg", url: "https://learngerman.dw.com", description: "DW video course" },
  { name: "Lingolia", url: "https://deutsch.lingolia.com/en/grammar", description: "Grammar explanations & exercises" },
  { name: "Slow German Podcast", url: "https://slowgerman.com", description: "Clear, slow-paced German podcast" },
  { name: "LanguageTool", url: "https://languagetool.org", description: "Free grammar & spell checker" },
  { name: "dict.cc", url: "https://www.dict.cc", description: "German-English dictionary" },
  { name: "Nachrichtenleicht", url: "https://www.nachrichtenleicht.de", description: "News in simple German" },
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
