// ===== 1) وزٹرز گننے کے لیے: Google Analytics کا Measurement ID یہاں ڈالیں (G- سے شروع ہوتا ہے) =====
const GA_ID = "G-XSKY36D14F";

// ===== رابطہ (اختیاری): اپنا واٹس ایپ نمبر بین الاقوامی شکل میں لکھیں، مثلاً "923001234567" (بغیر + اور خالی جگہ کے) =====
// اسی نمبر پر "ویڈیو نہیں چل رہی" کی رپورٹس آئیں گی۔ خالی رکھیں تو رپورٹ صرف Analytics میں درج ہوگی۔
const CONTACT_WA = "923035708275";
const CONTACT_EMAIL = "kousaryoukhainda@gmail.com";

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

// ===== گوگل شیٹ سے لیکچرز لوڈ کرنا (اختیاری) =====
// شیٹ کو File → Share → Publish to web → CSV میں شائع کر کے لنک نیچے "" کے اندر پیسٹ کریں۔
// خالی ہو یا شیٹ نہ کھلے تو سائٹ نیچے والی فہرست (LECTURES) دکھاتی ہے، یعنی بیک اپ ہمیشہ موجود ہے۔
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXbXoGKiCV-WrkcIm0E6YdMD2xvoD4aU7AQzqsGGxeFnMlluFy1ic5gNHzyrRNdOt_W34aWg0fnaj2/pub?gid=1128080489&single=true&output=csv";

// ===== تاریخ والے لیکچرز پر "🆕 نیا" کتنے دن تک رہے =====
const NEW_DAYS = 14;

// ===== بیک اپ فہرست۔ شیٹ چل جائے تو سائٹ اسی کی جگہ شیٹ کا ڈیٹا دکھاتی ہے =====

const LECTURES = [
  { id: "mdcat-physics-01", title: "MDCAT Physics: Vectors & Equilibrium", cat: "MDCAT", subject: "Physics", teacher: "Karamat Sir", url: "https://www.youtube.com/watch?v=O7wxKLd_BDk", notes: "", channel: "", featured: true, date: "2026-11-19" },
  { id: "mdcat-biology-01", title: "MDCAT Biology: Cell Structure and Function", cat: "MDCAT", subject: "Biology", teacher: "Abid Ali Mughal", url: "https://www.youtube.com/watch?v=sSPhNss1zWk", notes: "", channel: "", featured: true, date: "2026-11-19" },
  { id: "mdcat-chemistry-01", title: "MDCAT Chemistry: Atomic Structure MCQs", cat: "MDCAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=5UCE0Xog9qA", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "ecat-mathematics-01", title: "ECAT / NET Math: Trigonometry One Shot", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=DhmMsDgekhY", notes: "", channel: "", featured: true, date: "2026-11-19" },
  { id: "ecat-physics-01", title: "ECAT Physics: Force and Motion", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=DF5Iptlde1k", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "css-english-01", title: "CSS English Essay: Structure & Outline", cat: "CSS / PMS", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=-i9IfamrGB4", notes: "", channel: "", featured: true, date: "2026-11-19" },
  { id: "css-general-01", title: "CSS Current Affairs: Foreign Policy of Pakistan", cat: "CSS / PMS", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=RrsMMHISPxs", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "ppsc-general-01", title: "PPSC / FPSC: 100 Most Repeated GK MCQs", cat: "PPSC / FPSC", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=Fd_NCJcAv_4", notes: "", channel: "", featured: true, date: "2026-11-19" },
  { id: "ppsc-general-02", title: "PPSC Pakistan Studies: History 1947 Onwards", cat: "PPSC / FPSC", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=6idGIkdXl3k", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "fsc-english-01", title: "FSc English: Rules of Sentence Correction", cat: "FSc / Matric", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=Z0SkQgmE7Og", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "mdcat-biology-02", title: "MDCAT Biology: Bioenergetics (Part 1)", cat: "MDCAT", subject: "Biology", teacher: "", url: "https://www.youtube.com/watch?v=n78gTvdlvkw", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "mdcat-chemistry-02", title: "MDCAT Chemistry: Chemical Bonding Crash Course", cat: "MDCAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=1DvS4FQnJfc", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "mdcat-physics-02", title: "MDCAT Physics: Work, Energy and Power", cat: "MDCAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=pbrYW8ctQjo", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "mdcat-english-01", title: "MDCAT English: Vocabulary 1100+ Words", cat: "MDCAT", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=P7PLD7y8wnk", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "mdcat-english-02", title: "MDCAT English: Verbs & Tenses Rules (Sir Azeem)", cat: "MDCAT", subject: "English", teacher: "", url: "https://www.youtube.com/watch?v=MBOUcFhSu-I", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "ecat-mathematics-02", title: "ECAT Math: Sets MCQs (Chapter 1)", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=kWwxBqk6RsM", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "ecat-physics-02", title: "ECAT / MDCAT Physics: Work Power Energy MCQs", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=wUEu9Efn0ZE", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "css-pakistan-01", title: "CSS Pakistan Affairs: Pakistan-India Relations", cat: "CSS / PMS", subject: "Pakistan Affairs", teacher: "", url: "https://www.youtube.com/watch?v=ApQErTQRQ7g", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "css-pakistan-02", title: "CSS Pakistan Affairs: Allama Iqbal's Philosophy of Nationalism", cat: "CSS / PMS", subject: "Pakistan Affairs", teacher: "", url: "https://www.youtube.com/watch?v=e6fzeWnZazc", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "css-pakistan-03", title: "CSS Pakistan Affairs: Ideology of Pakistan", cat: "CSS / PMS", subject: "Pakistan Affairs", teacher: "", url: "https://www.youtube.com/watch?v=7G4d3DyqQIc", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "ppsc-islamiat-01", title: "PPSC / FPSC: Top 100 Repeated Islamiyat MCQs", cat: "PPSC / FPSC", subject: "Islamiat", teacher: "", url: "https://www.youtube.com/watch?v=3dfZP2-9HJU", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "ppsc-general-03", title: "PPSC / FPSC: 50 Current Affairs MCQs 2026", cat: "PPSC / FPSC", subject: "General Knowledge", teacher: "", url: "https://www.youtube.com/watch?v=49G9UZcBGak", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "fsc-physics-01", title: "Matric Physics (Class 10): Thermal Physics Exercise", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=bcs1CjrZgsU", notes: "", channel: "", featured: false, date: "2026-11-19" },
  { id: "ecat-mathematics-03", title: "ECAT Math: Quadratic Equation & its Graph (Ch 4)", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=gIWsXsI0nQ0", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-mathematics-04", title: "ECAT Math: Solutions of Trigonometric Equations (Ch 14)", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=LbwNgljTL68", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-mathematics-05", title: "ECAT / NET Math: Number System & Complex Numbers", cat: "ECAT", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=qFy7XURHNGY", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-physics-03", title: "ECAT Physics: Electrostatics (Ch 12)", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=0vf7T66mq_w", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-physics-04", title: "ECAT / MDCAT Physics: Current Electricity One Shot", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=sMHKaUHGGbk", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-physics-05", title: "ECAT / MDCAT Physics: Waves and Sound One Shot", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=hUeiVcfdK64", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-physics-06", title: "ECAT / NET Physics: Current Electricity (NUST Past Papers)", cat: "ECAT", subject: "Physics", teacher: "", url: "https://www.youtube.com/watch?v=SuPCTtJDwTo", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-chemistry-01", title: "ECAT Chemistry: Stoichiometry One Shot", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=rMZ7ZDbaNy4", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-chemistry-02", title: "ECAT Chemistry: Atomic Structure One Shot", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=SpB-ttgxf9E", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-chemistry-03", title: "ECAT Chemistry: Representative Elements One Shot", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=5ZV1O3uVbus", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-chemistry-04", title: "NUST NET Chemistry: Past Papers (First Year)", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=4VGNfVZ09jw", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "ecat-chemistry-05", title: "NUST NET Chemistry: Organic Chemistry Lecture 1", cat: "ECAT", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=UXd0f-NHXv0", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-physics-02", title: "FSc Part 1 Physics: Complete Course (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLPPIIrya-qrgHT9PvuQfHJlSJL5Efcpb7", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-physics-03", title: "FSc Part 1 Physics: Punjab Board 2025 Book (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLzuo8TM7cM3BHiCgFA9OVMTXECexb7cL2", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-chemistry-01", title: "FSc Part 1 Chemistry: Periodic Table (Ch 1, New Book)", cat: "FSc / Matric", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=HQLIc-sFOZc", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-chemistry-02", title: "FSc Part 1 Chemistry: Chemical Equilibrium Numericals", cat: "FSc / Matric", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=bj6__SbvZiI", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-mathematics-01", title: "FSc Part 1 Math: Number Systems (Lecture 1)", cat: "FSc / Matric", subject: "Mathematics", teacher: "", url: "https://www.youtube.com/watch?v=Dgm0G_QjcTI", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-biology-01", title: "FSc Part 1 Biology: Levels of Biological Organization", cat: "FSc / Matric", subject: "Biology", teacher: "", url: "https://www.youtube.com/watch?v=rMmVMWTEC9M", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-chemistry-03", title: "FSc Part 2 Chemistry: Group 2 Elements (New Book)", cat: "FSc / Matric", subject: "Chemistry", teacher: "", url: "https://www.youtube.com/watch?v=XgBcC6XCbSg", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-physics-04", title: "FSc Part 2 Physics: Complete Lectures (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLFfDy6WJ1W9sVALZFDeJs1bPZimQDr7mq", notes: "", channel: "", featured: false, date: "2026-11-20" },
  { id: "fsc-physics-05", title: "FSc Part 2 Physics: Electrostatics (Playlist)", cat: "FSc / Matric", subject: "Physics", teacher: "", url: "https://www.youtube.com/playlist?list=PLotfPD6FZ5QkRMoiFKmJShM9TJYZBD49y", notes: "", channel: "", featured: false, date: "2026-11-20" }
];
    
