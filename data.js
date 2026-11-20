// ===== 1) وزٹرز گننے کے لیے: Google Analytics کا Measurement ID یہاں ڈالیں (G- سے شروع ہوتا ہے) =====
const GA_ID = "G-XSKY36D14F";

// ===== رابطہ (اختیاری): اپنا واٹس ایپ نمبر بین الاقوامی شکل میں لکھیں، مثلاً "923001234567" (بغیر + اور خالی جگہ کے) =====
// اسی نمبر پر "ویڈیو نہیں چل رہی" کی رپورٹس آئیں گی۔ خالی رکھیں تو رپورٹ صرف Analytics میں درج ہوگی۔
const CONTACT_WA = "";
const CONTACT_EMAIL = "";

// ===== آخری کتنے لیکچرز پر "🆕 نیا" کا نشان لگے =====
const NEW_COUNT = 10;

// ===== ہر کیٹیگری کی مختصر تفصیل (کیٹیگری چنتے وقت نظر آتی ہے) =====
const CAT_INFO = {
  "MDCAT": "میڈیکل کالجز کے داخلہ ٹیسٹ کے لیے: بائیولوجی، کیمسٹری، فزکس اور انگلش۔",
  "ECAT": "انجینئرنگ یونیورسٹیوں کے ٹیسٹ (ECAT / NUST NET) کے لیے: میتھ، فزکس، کیمسٹری۔",
  "CSS / PMS": "سی ایس ایس اور پی ایم ایس کے لیے: انگلش، پاکستان افیئرز اور کرنٹ افیئرز۔",
  "PPSC / FPSC": "سرکاری نوکریوں کے ٹیسٹ کے لیے: جنرل نالج، اسلامیات، کرنٹ افیئرز۔",
  "FSc / Matric": "ایف ایس سی اور میٹرک کے بورڈ کے مضامین۔"
};

// اختیاری: کسی لیکچر میں teacher: "استاد کا نام" اور channel: "https://www.youtube.com/@چینل" بھی لکھ سکتے ہیں۔ پھر استاد کا نام اور چینل کا بٹن نظر آئے گا۔

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
  { title: "Matric Physics (Class 10): Thermal Physics Exercise", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=bcs1CjrZgsU", notes: "", featured: false },
  { title: "ECAT Math: Quadratic Equation & its Graph (Ch 4)", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=gIWsXsI0nQ0", notes: "", featured: false },
  { title: "ECAT Math: Solutions of Trigonometric Equations (Ch 14)", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=LbwNgljTL68", notes: "", featured: false },
  { title: "ECAT / NET Math: Number System & Complex Numbers", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=qFy7XURHNGY", notes: "", featured: false },
  { title: "ECAT Physics: Electrostatics (Ch 12)", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=0vf7T66mq_w", notes: "", featured: false },
  { title: "ECAT / MDCAT Physics: Current Electricity One Shot", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=sMHKaUHGGbk", notes: "", featured: false },
  { title: "ECAT / MDCAT Physics: Waves and Sound One Shot", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=hUeiVcfdK64", notes: "", featured: false },
  { title: "ECAT / NET Physics: Current Electricity (NUST Past Papers)", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=SuPCTtJDwTo", notes: "", featured: false },
  { title: "ECAT Chemistry: Stoichiometry One Shot", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=rMZ7ZDbaNy4", notes: "", featured: false },
  { title: "ECAT Chemistry: Atomic Structure One Shot", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=SpB-ttgxf9E", notes: "", featured: false },
  { title: "ECAT Chemistry: Representative Elements One Shot", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=5ZV1O3uVbus", notes: "", featured: false },
  { title: "NUST NET Chemistry: Past Papers (First Year)", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=4VGNfVZ09jw", notes: "", featured: false },
  { title: "NUST NET Chemistry: Organic Chemistry Lecture 1", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=UXd0f-NHXv0", notes: "", featured: false },
  { title: "FSc Part 1 Physics: Complete Course (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLPPIIrya-qrgHT9PvuQfHJlSJL5Efcpb7", notes: "", featured: false },
  { title: "FSc Part 1 Physics: Punjab Board 2025 Book (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLzuo8TM7cM3BHiCgFA9OVMTXECexb7cL2", notes: "", featured: false },
  { title: "FSc Part 1 Chemistry: Periodic Table (Ch 1, New Book)", cat: "FSc / Matric", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=HQLIc-sFOZc", notes: "", featured: false },
  { title: "FSc Part 1 Chemistry: Chemical Equilibrium Numericals", cat: "FSc / Matric", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=bj6__SbvZiI", notes: "", featured: false },
  { title: "FSc Part 1 Math: Number Systems (Lecture 1)", cat: "FSc / Matric", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=Dgm0G_QjcTI", notes: "", featured: false },
  { title: "FSc Part 1 Biology: Levels of Biological Organization", cat: "FSc / Matric", subject: "Biology", teacher: "", url: "https://www.youtube.com/watch?v=rMmVMWTEC9M", notes: "", featured: false },
  { title: "FSc Part 2 Chemistry: Group 2 Elements (New Book)", cat: "FSc / Matric", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=XgBcC6XCbSg", notes: "", featured: false },
  { title: "FSc Part 2 Physics: Complete Lectures (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLFfDy6WJ1W9sVALZFDeJs1bPZimQDr7mq", notes: "", featured: false },
  { title: "FSc Part 2 Physics: Electrostatics (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLotfPD6FZ5QkRMoiFKmJShM9TJYZBD49y", notes: "", featured: false }
];
   
