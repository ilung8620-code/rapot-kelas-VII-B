export const SUBJECTS = [
  {
    code: "PAI",
    name: "Pendidikan Agama Islam dan Budi Pekerti",
    topic: "membaca Al-Qur'an sesuai tajwid, memahami Asmaul Husna, penerapan akhlak terpuji, serta ketentuan bersuci (thaharah) dan shalat"
  },
  {
    code: "PANCASILA",
    name: "Pendidikan Pancasila",
    topic: "sejarah kelahiran Pancasila, penerapan nilai-nilai Pancasila, serta norma dan keadilan dalam kehidupan bermasyarakat"
  },
  {
    code: "MATEMATIKA",
    name: "Matematika",
    topic: "operasi bilangan bulat dan pecahan, operasi bentuk aljabar dasar, serta persamaan linear satu variabel"
  },
  {
    code: "BINDO",
    name: "Bahasa Indonesia",
    topic: "menyimak, membaca, dan menyajikan teks deskripsi, teks narasi (cerita fantasi), serta teks prosedur"
  },
  {
    code: "IPA",
    name: "Ilmu Pengetahuan Alam",
    topic: "hakikat sains dan metode ilmiah, klasifikasi wujud zat dan perubahannya, serta konsep suhu, kalor, dan pemuaian"
  },
  {
    code: "IPS",
    name: "Ilmu Pengetahuan Sosial",
    topic: "keberadaan diri dan keluarga, lokasi geografis lingkungan sekitar, interaksi keruangan, serta kehidupan manusia masa praaksara"
  },
  {
    code: "BING",
    name: "Bahasa Inggris",
    topic: "teks interaksi perkenalan diri (introducing oneself), mendeskripsikan orang dan benda (descriptive text), serta menyatakan waktu (telling time)"
  },
  {
    code: "PJOK",
    name: "Pendidikan Jasmani, Olahraga, dan Kesehatan",
    topic: "gerak spesifik permainan bola besar (sepak bola/voli/basket), permainan bola kecil, atletik dasar, serta latihan kebugaran jasmani"
  },
  {
    code: "INFORMATIKA",
    name: "Informatika",
    topic: "berpikir komputasional, pengenalan sistem komputer, perangkat keras dan lunak, serta penggunaan aplikasi perkantoran dasar (TIK)"
  },
  {
    code: "SENI",
    name: "Seni dan Budaya",
    topic: "apresiasi dan teknik dasar menggambar flora, fauna, alam benda, serta ragam hias nusantara"
  },
  {
    code: "MADURA",
    name: "Muatan Lokal: Bahasa Madura",
    topic: "pemahaman teks deskripsi, teks narasi (carèta ra'yat), serta penerapan unggah-ungguh (tata krama) basa Madura"
  },
  {
    code: "ASWAJA",
    name: "Aswaja",
    topic: "sejarah masuknya Islam di Nusantara, peran dakwah Walisongo, serta amaliyah dasar dan nilai-nilai Ahlussunnah wal Jamaah"
  }
];

export function competencyFromScore(score, subject) {
  const n = Number(score);
  if (!Number.isFinite(n)) return "";
  
  const topic = subject?.topic || "capaian pembelajaran yang diujikan";
  
  // Penyesuaian redaksi agar lebih selaras dengan deskripsi e-Rapor Kurikulum Merdeka
  if (n >= 90) return `Menunjukkan penguasaan yang sangat baik dalam ${topic}.`;
  if (n >= 80) return `Menunjukkan penguasaan yang baik dalam ${topic}.`;
  if (n >= 70) return `Menunjukkan penguasaan yang cukup dan terus berkembang dalam ${topic}.`;
  if (n >= 60) return `Perlu pendampingan dan peningkatan lebih lanjut dalam ${topic}.`;
  
  return `Memerlukan bimbingan dan pendampingan intensif untuk menguasai ${topic}.`;
}
