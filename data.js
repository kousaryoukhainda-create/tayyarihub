// ===== 1) وزٹرز گننے کے لیے: Google Analytics کا Measurement ID یہاں ڈالیں (G- سے شروع ہوتا ہے) =====
const GA_ID = "G-XSKY36D14F";

// ===== 2) لیکچرز۔ نیا لیکچر شامل کرنے کے لیے کوئی ایک بلاک کاپی کر کے نیچے پیسٹ کریں (آخر میں کوما , ضرور ہو) =====
// url: یوٹیوب لنک | notes: نوٹس کا لنک (خالی ہو تو بٹن نہیں آئے گا) | featured: true ہو تو نمایاں
// cat کے لیے یہی لکھیں: MDCAT, ECAT, CSS / PMS, PPSC / FPSC, FSc / Matric
const LECTURES = [
  { title: "MDCAT Physics: Vectors & Equilibrium", cat: "MDCAT", subject: "Physics", teacher: "Karamat Sir", url: "https://www.youtube.com/watch?v=O7wxKLd_BDk", notes: "", featured: true },
  { title: "MDCAT Biology: Cell Structure and Function", cat: "MDCAT", subject: "Biology", teacher: "Abid Ali Mughal", url: "https://www.youtube.com/watch?v=sSPhNss1zWk", notes: "", featured: true },
  { title: "MDCAT Chemistry: Atomic Structure MCQs", cat: "MDCAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=5UCE0Xog9qA", notes: "", featured: false },
  { title: "ECAT / NET Math: Trigonometry One Shot", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=DhmMsDgekhY", notes: "", featured: true },
  { title: "ECAT Physics: Force and Motion", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=DF5Iptlde1k", notes: "", featured: false },
  { title: "CSS English Essay: Structure & Outline", cat: "CSS / PMS", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=-i9IfamrGB4", notes: "", featured: true },
  { title: "CSS Current Affairs: Foreign Policy of Pakistan", cat: "CSS / PMS", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=RrsMMHISPxs", notes: "", featured: false },
  { title: "PPSC / FPSC: 100 Most Repeated GK MCQs", cat: "PPSC / FPSC", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=Fd_NCJcAv_4", notes: "", featured: true },
  { title: "PPSC Pakistan Studies: History 1947 Onwards", cat: "PPSC / FPSC", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=6idGIkdXl3k", notes: "", featured: false },
  { title: "FSc English: Rules of Sentence Correction", cat: "FSc / Matric", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=Z0SkQgmE7Og", notes: "", featured: false },
  { title: "MDCAT Biology: Bioenergetics (Part 1)", cat: "MDCAT", subject: "Biology", teacher: "", url: "https://www.youtube.com/watch?v=n78gTvdlvkw", notes: "", featured: false },
  { title: "MDCAT Chemistry: Chemical Bonding Crash Course", cat: "MDCAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=1DvS4FQnJfc", notes: "", featured: false },
  { title: "MDCAT Physics: Work, Energy and Power", cat: "MDCAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=pbrYW8ctQjo", notes: "", featured: false },
  { title: "MDCAT English: Vocabulary 1100+ Words", cat: "MDCAT", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=P7PLD7y8wnk", notes: "", featured: false },
  { title: "MDCAT English: Verbs & Tenses Rules (Sir Azeem)", cat: "MDCAT", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=MBOUcFhSu-I", notes: "", featured: false },
  { title: "ECAT Math: Sets MCQs (Chapter 1)", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=kWwxBqk6RsM", notes: "", featured: false },
  { title: "ECAT / MDCAT Physics: Work Power Energy MCQs", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=wUEu9Efn0ZE", notes: "", featured: false },
  { title: "CSS Pakistan Affairs: Pakistan-India Relations", cat: "CSS / PMS", subject: "Pakistan Affairs", teacher: "", url: "https://www.youtube.com/watch?v=ApQErTQRQ7g", notes: "", featured: false },
  { title: "CSS Pakistan Affairs: Allama Iqbal's Philosophy of Nationalism", cat: "CSS / PMS", subject: "Pakistan Affairs", teacher: "", url: "https://www.youtube.com/watch?v=e6fzeWnZazc", notes: "", featured: false },
  { title: "CSS Pakistan Affairs: Ideology of Pakistan", cat: "CSS / PMS", subject: "Pakistan Affairs", teacher: "", url: "https://www.youtube.com/watch?v=7G4d3DyqQIc", notes: "", featured: false },
  { title: "PPSC / FPSC: Top 100 Repeated Islamiyat MCQs", cat: "PPSC / FPSC", subject: "Islamiat", teacher: "", url: "https://www.youtube.com/watch?v=3dfZP2-9HJU", notes: "", featured: false },
  { title: "PPSC / FPSC: 50 Current Affairs MCQs 2026", cat: "PPSC / FPSC", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=49G9UZcBGak", notes: "", featured: false },
  { title: "Matric Physics (Class 10): Thermal Physics Exercise", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=bcs1CjrZgsU", notes: "", featured: false }
];
