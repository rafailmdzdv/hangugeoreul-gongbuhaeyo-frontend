interface Word {
  id: string;
  meaning: string;
  translation: string;
}

interface StudyDay {
  id: string;
  title: string;
  words: Word[];
}

export { type StudyDay };
