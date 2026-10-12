// Isi situs Sinoman Gondokusuman (KKN-PPM UGM Periode 3 2026, YO092).
// Sumber: Proposal Kemitraan, PROKER RESONEGARAN, RESONEGARANOTES,
// Perencanaan Program Kerja Demangan (Sapen) dan Terban subunit-2 (Purbonegaran).

const SUBUNITS = {
  sapen: {
    name: "Sapen",
    theme: "Kampung Hijau",
    kelurahan: "Kelurahan Demangan",
    lead:
      "Kampung yang namanya berasal dari pemeliharaan sapi perah Keraton. Kini dikenal lewat urban farming, bank sampah, budidaya maggot, batik ecoprint Segoro Amarto, Kampung Inggris, dan Galeri Wayang Uwuh, wayang yang dibuat dari sampah.",
    focus: ["Green Tour Sapen", "Bank sampah RW 6/7", "Galeri Wayang Uwuh", "Arsip sejarah kampung"],
  },
  purbonegaran: {
    name: "Purbonegaran",
    theme: "Kampung Eduwisata Budaya",
    kelurahan: "Kelurahan Terban",
    lead:
      "Kampung dengan seni dan budaya tradisional yang masih hidup, tanaman herbal, dan upacara adat Merti Kali Belik. Fokus kami adalah paket wisata yang bisa dikelola warga, kesehatan keluarga, dan UMKM yang siap digital.",
    focus: ["Merti Kali Belik, 25 Oktober", "Paket wisata Terban Trip", "Posyandu & lansia", "UMKM go digital"],
  },
  resonegaran: {
    name: "Resonegaran",
    theme: "Kampung Wisata Heritage & Batik",
    kelurahan: "Kelurahan Terban",
    lead:
      "Kampung dengan bangunan bersejarah dan sentra batik tulis Sekarinonce. Tujuh minggu kami susun bertahap: kelas untuk pelajar SD sampai SMA, digitalisasi kampung, workshop batik bersama pengrajin, lalu pameran.",
    focus: ["Workshop membatik", "Website & peta wisata", "Promosi dwibahasa & Korea", "Pameran Resonegaran"],
  },
};

const TEAM = {
  sapen: [
    { name: "Hanif", prodi: "Matematika", role: "Kormasit" },
    { name: "Azka", prodi: "Elektronika dan Instrumentasi", role: "Sekretaris" },
    { name: "Tiara", prodi: "Antropologi Budaya", role: "Bendahara" },
    { name: "Ridho", prodi: "Profesi Dokter", role: "Perkaplog" },
    { name: "Tristan", prodi: "Ilmu Komputer", role: "Perkaplog" },
    { name: "Maira", prodi: "Profesi Dokter", role: "Dokumentasi & Publikasi" },
    { name: "Sina", prodi: "Hukum", role: "Humas" },
  ],
  purbonegaran: [
    { name: "Alvin", prodi: "Klaster Medika" },
    { name: "Ela", prodi: "Klaster Medika" },
    { name: "Hidayah", prodi: "Klaster Saintek" },
    { name: "Naura", prodi: "Klaster Saintek" },
    { name: "Razan", prodi: "Klaster Saintek" },
    { name: "Nathan", prodi: "Klaster Soshum" },
    { name: "Melinda", prodi: "Klaster Soshum" },
  ],
  resonegaran: [
    { name: "Ananda Amalya Hasya", prodi: "Ilmu Komputer" },
    { name: "Argya Nur Adhirajasa", prodi: "Klaster Saintek" },
    { name: "Deanatha Rizky Lazaren", prodi: "Arsitektur" },
    { name: "Bunga Matahari", prodi: "Bahasa dan Kebudayaan Korea" },
    { name: "Jasmine Naurah Sabrina", prodi: "Hubungan Internasional" },
    { name: "Fadhil Maulana", prodi: "Kedokteran" },
    { name: "Indy Alfia Balqis", prodi: "Kedokteran" },
  ],
};

// s: subunit, k: klaster, p: PIC, t: sasaran, g: payung program (Resonegaran)
const PROGRAMS = [
  // ---------- Resonegaran ----------
  { s: "resonegaran", g: "Sino the Explorer", k: "Saintek", p: "Argya", t: "Siswa SD", title: "Sino Data Detective: Satu Hari Jadi Detektif Data", d: "Anak-anak mengumpulkan data sederhana tentang diri, kelas, dan kampungnya, menyusunnya jadi grafik, lalu menemukan satu \"petunjuk\" dengan bahasa mereka sendiri." },
  { s: "resonegaran", g: "Sino the Explorer", k: "Saintek", p: "Ananda", t: "Siswa SD", title: "Sino Gets to Know English", d: "Kelas percakapan bahasa Inggris lewat permainan dan roleplay bertema petualangan blok, dengan English Pocket Conversation Cards untuk dibawa pulang." },
  { s: "resonegaran", g: "Sino the Explorer", k: "Saintek", p: "Deanatha", t: "Siswa SD", title: "Ada Apa di Kampung Resonegaran", d: "Mengenal ruang dan lingkungan kampung lewat observasi dan pemetaan sederhana, dirangkum dalam poster dan stiker." },
  { s: "resonegaran", g: "Sino the Explorer", k: "Soshum", p: "Bunga", t: "Siswa SD", title: "Misi Budaya: Jelajah Nusantara Petualang Kecil", d: "Permainan ular tangga raksasa yang kotaknya berisi pertanyaan dan misi tentang ragam budaya Indonesia." },
  { s: "resonegaran", g: "Sino the Explorer", k: "Soshum", p: "Jasmine", t: "Siswa SD", title: "Kenali Kampungku, Resonegaran", d: "Anak-anak memetakan keunikan kampung lewat gambar dan cerita, menjadi poster potensi kampung yang siap dikenalkan ke pendatang." },
  { s: "resonegaran", g: "Sino the Explorer", k: "Medika", p: "Fadhil", t: "Siswa SD", title: "Aku Sehat, Kampungku Sehat", d: "Health games, misi detektif kesehatan, dan habit challenge tentang kebersihan diri dan lingkungan, lengkap dengan Health Explorer Passport." },
  { s: "resonegaran", g: "Sino the Explorer", k: "Medika", p: "Indy", t: "Siswa SD kelas 4–6", title: "Sino Guardians: Climate Health & Vector-Borne Disease Awareness", d: "Mengenal demam berdarah, tempat nyamuk berkembang biak, cara pencegahannya, serta dampak cuaca dan perubahan iklim pada kesehatan." },
  { s: "resonegaran", g: "Sino the Explorer", k: "Medika", p: "Indy", t: "Siswa SD kelas 1–3", title: "Sino Safety Quest: Child Safety & Emergency Awareness", d: "Keselamatan saat bermain dan menjelajah, apa yang dilakukan ketika terpisah dari rombongan, dan kepada siapa meminta tolong." },

  { s: "resonegaran", g: "Resonegaran Muda", k: "Saintek", p: "Argya", t: "Siswa SMP", title: "Detektif Hoaks: Cek Dulu, Baru Bagikan", d: "Latihan mengenali dan memverifikasi hoaks yang dekat dengan keseharian, dari info wisata palsu sampai video viral, ditutup kuis Kahoot." },
  { s: "resonegaran", g: "Resonegaran Muda", k: "Saintek", p: "Ananda", t: "Siswa SMP", title: "Digital Safety and Etiquette", d: "Keamanan akun, batas privasi, bahaya oversharing, dan etika berkomentar, termasuk permainan Digital Red Flag Detector untuk mengenali akun mencurigakan." },
  { s: "resonegaran", g: "Resonegaran Muda", k: "Saintek", p: "Deanatha", t: "Siswa SMP", title: "Penjaga Lingkungan", d: "Mengenal bank sampah dan membandingkan dampak menjaga atau menelantarkan lingkungan, lalu merumuskan kontribusi kecil yang bisa dilakukan." },
  { s: "resonegaran", g: "Resonegaran Muda", k: "Soshum", p: "Bunga", t: "Siswa SMP", title: "Mengenal Hangeul dan Membuat Medeub Keychain", d: "Pengenalan aksara Korea sambil membuat gantungan kunci simpul tradisional Korea dengan manik hangeul yang membentuk nama masing-masing." },
  { s: "resonegaran", g: "Resonegaran Muda", k: "Soshum", p: "Jasmine", t: "Siswa SMP", title: "Ceritakan Kampungku", d: "Latihan storytelling dan roleplay menjadi pemandu wisata remaja untuk menceritakan daya tarik heritage dan batik Resonegaran." },
  { s: "resonegaran", g: "Resonegaran Muda", k: "Medika", p: "Fadhil", t: "Siswa SMP", title: "Wisata Sehat", d: "Melihat kampung dari sudut pandang pengunjung: kebersihan, kenyamanan, dan keselamatan, hingga menyusun panduan \"Aman & Nyaman di Resonegaran\"." },
  { s: "resonegaran", g: "Resonegaran Muda", k: "Medika", p: "Indy", t: "Siswa SMP", title: "Sanggah Raga: Sports Injury First Aid", d: "Mengenali patah tulang, keseleo, dan kram otot, serta mempraktikkan pertolongan pertama lewat simulasi kasus berkelompok." },

  { s: "resonegaran", g: "Remaja Resonegaran", k: "Saintek", p: "Argya", t: "Siswa SMA", title: "Resonegaran AI Lab", d: "Melatih model AI sederhana di Teachable Machine dengan motif batik sebagai data, lalu sengaja membuatnya keliru untuk memahami peran kualitas data." },
  { s: "resonegaran", g: "Remaja Resonegaran", k: "Saintek", p: "Ananda", t: "Siswa SMA", title: "Critical Readers", d: "Membaca kritis: membedah struktur argumen, melacak bukti tekstual, dan mengenali bias serta kecacatan logika." },
  { s: "resonegaran", g: "Remaja Resonegaran", k: "Saintek", p: "Deanatha", t: "Siswa SMA", title: "Mitigasi dan Kesiapsiagaan Banjir", d: "Bekal menghadapi banjir perkotaan: apa yang disiapkan sebelumnya dan apa yang dilakukan ketika terjadi." },
  { s: "resonegaran", g: "Remaja Resonegaran", k: "Soshum", p: "Bunga", t: "Siswa SMA", title: "Young Creator Crew: From Issues to Ideas", d: "Observe, investigate, act: siswa mengamati isu lingkungan di sekitarnya dan mempresentasikan rekomendasi dalam bentuk poster atau infografis." },
  { s: "resonegaran", g: "Remaja Resonegaran", k: "Soshum", p: "Jasmine", t: "Siswa SMA", title: "Kembangkan Kampungku", d: "Brainstorming dan pitching ide promosi wisata kampung dari sudut pandang wisatawan mancanegara." },
  { s: "resonegaran", g: "Remaja Resonegaran", k: "Medika", p: "Fadhil", t: "Siswa SMA", title: "Resonegaran Health Lab: Dari Masalah Jadi Gagasan", d: "Memetakan masalah kesehatan di lingkungan sekitar, memahami faktor risikonya, dan menawarkan solusi sederhana." },
  { s: "resonegaran", g: "Remaja Resonegaran", k: "Medika", p: "Indy", t: "Siswa SMA/SMK/MA", title: "Remaja Resonegaran as Life-Saver", d: "Pelatihan bantuan hidup dasar: kompresi dada, pengenalan AED, dan penanganan tersedak, lewat demonstrasi dan simulasi." },

  { s: "resonegaran", g: "Sosialisasi Digitalisasi Kampung", k: "Saintek", p: "Argya", t: "Warga & pengunjung", title: "Kajian Kampung: Mengenal Potensi Resonegaran", d: "Kajian singkat dari observasi dan wawancara warga serta pengrajin, diterbitkan sebagai infografis dwibahasa di website kampung." },
  { s: "resonegaran", g: "Sosialisasi Digitalisasi Kampung", k: "Saintek", p: "Ananda", t: "Warga & pengunjung", title: "Website Profil Resonegaran", d: "Website responsif yang memuat administrasi, kekayaan budaya, potensi wisata, dan sebaran UMKM kerajinan di Resonegaran." },
  { s: "resonegaran", g: "Sosialisasi Digitalisasi Kampung", k: "Saintek", p: "Deanatha", t: "Pengunjung", title: "Resonegaran Map Guide", d: "Peta wisata untuk memandu pengunjung menjelajahi kampung, dalam versi digital dan cetak." },
  { s: "resonegaran", g: "Sosialisasi Digitalisasi Kampung", k: "Soshum", p: "Bunga", t: "Wisatawan Korea", title: "르소느가란에서 인도네시아를 만나다 (Bertemu Indonesia di Resonegaran)", d: "Artikel promosi berbahasa Korea di Naver Blog tentang batik, warisan budaya, dan pengalaman berkunjung ke Resonegaran." },
  { s: "resonegaran", g: "Sosialisasi Digitalisasi Kampung", k: "Soshum", p: "Jasmine", t: "Wisatawan mancanegara", title: "International Tourism Branding and Promotion", d: "Konten profil kampung berbahasa Inggris dan pemetaan daya tarik utama bagi wisatawan asing." },
  { s: "resonegaran", g: "Sosialisasi Digitalisasi Kampung", k: "Medika", p: "Fadhil", t: "Warga & pengunjung", title: "Resonegaran Health & Safety Guide", d: "Informasi kesehatan, keselamatan, dan kontak darurat yang terintegrasi di website dan media sosial kampung." },

  { s: "resonegaran", g: "Workshop Wisata & Batik", k: "Saintek", p: "Argya", t: "Peserta workshop", title: "Batik Story Cards: Scan, Learn, Create", d: "Kartu motif batik ber-QR yang membuka penjelasan pengrajin tentang makna dan proses motif dalam bahasa Indonesia dan Inggris." },
  { s: "resonegaran", g: "Workshop Wisata & Batik", k: "Saintek", p: "Ananda", t: "Wisatawan", title: "Digital Marketing Batik Tulis Resonegaran", d: "Foto, infografis, dan unggahan rutin untuk batik tulis dan workshop wisata di Instagram, TikTok, LinkedIn, dan website." },
  { s: "resonegaran", g: "Workshop Wisata & Batik", k: "Saintek", p: "Deanatha", t: "Umum", title: "Canting Story: Perjalanan Pertumbuhan Batik di Resonegaran", d: "Pamflet tentang sejarah tumbuhnya batik di Resonegaran yang sekaligus menjadi media promosi." },
  { s: "resonegaran", g: "Workshop Wisata & Batik", k: "Soshum", p: "Bunga", t: "Umum", title: "Workshop Wisata: Mengukir Cerita, Membatik Budaya", d: "Workshop membatik bersama pengrajin batik tulis lokal; setiap peserta pulang membawa karyanya sendiri." },
  { s: "resonegaran", g: "Workshop Wisata & Batik", k: "Soshum", p: "Jasmine", t: "Wisatawan mancanegara", title: "English for Tourism & Intercultural Workshop", d: "Workshop batik yang ramah wisatawan asing, dengan naskah pemanduan berbahasa Inggris dan kolaborasi bersama ISAGAMA." },
  { s: "resonegaran", g: "Workshop Wisata & Batik", k: "Medika", p: "Fadhil", t: "Pengrajin batik", title: "Canting Sehat: Healthy Workspace", d: "Pengamatan ruang kerja membatik, checklist kenyamanan dan ergonomi, serta rekomendasi perbaikan sederhana." },
  { s: "resonegaran", g: "Workshop Wisata & Batik", k: "Medika", p: "Indy", t: "Komunitas batik", title: "Canting Care: Safety & First Aid Protocol", d: "Identifikasi risiko kerja saat membatik, demonstrasi pertolongan pertama, dan sosialisasi Safe Batik Protocol." },

  { s: "resonegaran", g: "Pameran Resonegaran", k: "Lintas klaster", p: "Tim Resonegaran", t: "Umum", title: "Pameran Resonegaran", d: "Pameran hasil seluruh program KKN di Resonegaran pada minggu keenam." },

  // ---------- Purbonegaran ----------
  { s: "purbonegaran", k: "Medika", p: "Alvin", t: "Siswa SD", title: "Dokter Kecil Peduli Lingkungan", d: "PHBS untuk anak SD: cuci tangan 6 langkah WHO, memilih jajanan sehat, dan permainan memilah sampah." },
  { s: "purbonegaran", k: "Medika", p: "Alvin", t: "Karang taruna & SMA/SMK", title: "Terban Siaga: Pelatihan RJP & Penanganan Tersedak", d: "Edukasi dan latihan resusitasi jantung paru serta penanganan tersedak untuk orang awam." },
  { s: "purbonegaran", k: "Medika", p: "Alvin", t: "Lansia", title: "Lansia Terban Aktif", d: "Penyuluhan osteoartritis dan osteoporosis, serta demonstrasi latihan kekuatan dan keseimbangan untuk warga lanjut usia." },
  { s: "purbonegaran", k: "Medika", p: "Alvin", t: "Lansia", title: "Lansia Cerdas Obat", d: "Diskusi tentang penggunaan obat sesuai indikasi, kepatuhan minum obat, dan risiko obat bebas tanpa anjuran dokter." },
  { s: "purbonegaran", k: "Medika", p: "Alvin", t: "Warga dewasa & lansia", title: "SIGULA Terban: Edukasi dan Deteksi Dini Diabetes", d: "Pemeriksaan gula darah dan edukasi untuk mencegah komplikasi diabetes melitus." },
  { s: "purbonegaran", k: "Medika", p: "Ela", t: "Warga", title: "Sehat Wisata: Skrining Kesehatan Warga", d: "Skrining tekanan darah dan indeks massa tubuh, disertai penjelasan hasil dan ajakan hidup sehat." },
  { s: "purbonegaran", k: "Medika", p: "Ela", t: "Anak-anak", title: "Germas Detektif: Misi Tangan Bersih", d: "Anak-anak menjadi \"detektif kebersihan\" yang mempraktikkan 6 langkah cuci tangan dan mengingatkan teman serta keluarganya." },
  { s: "purbonegaran", k: "Medika", p: "Ela", t: "Siswa SMP", title: "Laskar P3K", d: "Simulasi pertolongan pertama pada perdarahan, mimisan, keseleo, dan luka bakar." },
  { s: "purbonegaran", k: "Medika", p: "Ela", t: "Kader & keluarga", title: "Posyandu Wisata Ceria", d: "Mendampingi kader posyandu dalam pengukuran, pencatatan, dan edukasi gizi serta tumbuh kembang anak." },
  { s: "purbonegaran", k: "Medika", p: "Ela", t: "Warga", title: "Terban Bebas Jentik", d: "Gerakan bersih barang bekas untuk mencegah demam berdarah di Kelurahan Terban." },
  { s: "purbonegaran", k: "Soshum", p: "Nathan", t: "PKK & karang taruna", title: "Bahaya Pinjaman Online Ilegal dan Judi Online", d: "Ciri pinjol ilegal, risiko hukum judi online, dan cara melapor, disertai leaflet." },
  { s: "purbonegaran", k: "Soshum", p: "Nathan", t: "Siswa SD", title: "Anti-Perundungan dan Perlindungan Anak", d: "Kelas interaktif tentang bentuk perundungan, hak anak, dan cara melapor ke guru atau orang tua." },
  { s: "purbonegaran", k: "Soshum", p: "Nathan", t: "Warga", title: "Pentingnya Dokumen Kependudukan", d: "Fungsi akta kelahiran, KK, dan KTP, serta syarat dan alur pengurusannya bersama perangkat kelurahan." },
  { s: "purbonegaran", k: "Soshum", p: "Nathan", t: "Pelaku UMKM", title: "Pendampingan Pembuatan NIB untuk UMKM", d: "Manfaat legalitas usaha dan pendampingan langsung pendaftaran Nomor Induk Berusaha melalui OSS." },
  { s: "purbonegaran", k: "Saintek", p: "Hidayah", t: "Pokdarwis", title: "Profil UMKM Kampung Wisata Purbonegaran", d: "Pendataan UMKM lokal yang disajikan sebagai basis data dan grafik sederhana untuk promosi dan kerja sama." },
  { s: "purbonegaran", k: "Saintek", p: "Hidayah", t: "Pengurus bank sampah", title: "Pencatatan Tabungan Bank Sampah", d: "Template Excel yang otomatis mengubah berat sampah menjadi nominal tabungan, beserta panduan pemakaiannya." },
  { s: "purbonegaran", k: "Saintek", p: "Hidayah", t: "Pengelola wisata & UMKM", title: "Kalkulator HPP Paket Wisata dan UMKM", d: "Alat bantu hitung modal dan rekomendasi harga jual agar paket wisata dan produk lokal tidak merugi." },
  { s: "purbonegaran", k: "Saintek", p: "Hidayah", t: "Pengurus RT/RW", title: "Pelatihan Dasar Excel untuk Administrasi Kampung", d: "Membuat tabel, penomoran otomatis, dan rumus dasar untuk iuran, data warga, dan surat-menyurat." },
  { s: "purbonegaran", k: "Saintek", p: "Hidayah", t: "Siswa SD & SMP", title: "Bimbel Matematika & Logika Ceria", d: "Kelas sore atau malam di balai warga dengan permainan angka dan bantuan mengerjakan PR." },
  { s: "purbonegaran", k: "Saintek", p: "Naura", t: "Wisatawan", title: "Jelajah Terban: Direktori Digital Wisata dan Kuliner", d: "Katalog digital tempat wisata, kuliner, UMKM, dan ruang publik di Terban, terhubung ke peta interaktif dan QR code." },
  { s: "purbonegaran", k: "Saintek", p: "Naura", t: "Warga", title: "Terban Cerdas Digital: Aman dan Kritis di Era AI", d: "Perlindungan data pribadi, phishing, autentikasi dua faktor, serta cara mengenali hoaks dan deepfake." },
  { s: "purbonegaran", k: "Saintek", p: "Naura", t: "Warga", title: "Lapor Lingkungan", d: "Kanal pelaporan sederhana untuk sampah, saluran tersumbat, dan fasilitas rusak." },
  { s: "purbonegaran", k: "Saintek", p: "Naura", t: "Pelaku UMKM", title: "UMKM Go Digital", d: "Profil usaha, katalog digital, titik lokasi di peta, QR menu, dan WhatsApp Business." },
  { s: "purbonegaran", k: "Saintek", p: "Naura", t: "Pelaku UMKM", title: "Anti-Scam untuk UMKM", d: "Mengenali bukti transfer palsu, tautan phishing, dan pengambilalihan akun bisnis." },
  { s: "purbonegaran", k: "Saintek", p: "Razan", t: "Warga", title: "Asisten Sampah Warga: Chatbot WhatsApp", d: "Kirim foto sampah, chatbot menjawab jenisnya dan cara mengolahnya, plus pengingat jadwal angkut Masjos setiap Senin." },
  { s: "purbonegaran", k: "Saintek", p: "Razan", t: "Warga & pengurus", title: "Dokumentasi dan Promosi Merti Kali Belik", d: "Foto dan video kenduri serta kirab budaya Merti Kali Belik pada 25 Oktober, diolah menjadi konten promosi dan arsip digital kampung." },
  { s: "purbonegaran", k: "Saintek", p: "Razan", t: "Ibu-ibu pelaku UMKM", title: "Foto Produk dan Konten Promosi dengan AI", d: "Memotret produk dengan HP, menghapus latar, dan menulis caption serta poster dengan bantuan AI." },
  { s: "purbonegaran", k: "Saintek", p: "Razan", t: "Lansia", title: "Lansia Melek Digital", d: "Pendampingan memakai HP untuk alarm minum obat, jadwal kontrol, dan memeriksa kebenaran info kesehatan di WhatsApp." },
  { s: "purbonegaran", k: "Saintek", p: "Razan", t: "Anak usia SD", title: "Kelas Kenalan dengan AI", d: "Bersama TPA dan sekolah minggu, anak-anak melatih model AI sendiri untuk mengenali jenis sampah." },
  { s: "purbonegaran", k: "Soshum", p: "Melinda", t: "Pengelola wisata", title: "Terban Trip: Paket Wisata Kampung", d: "Paket wisata berbasis potensi lokal lengkap dengan rute, durasi, harga, dan cara pemesanan, diuji coba bersama warga." },
  { s: "purbonegaran", k: "Soshum", p: "Melinda", t: "Publik", title: "Terban Go Viral", d: "Tiga video TikTok tentang suasana kampung, kuliner dan UMKM, serta paket wisata." },
  { s: "purbonegaran", k: "Soshum", p: "Melinda", t: "Siswa SD", title: "Terban Ceria: Poster Edukasi Bergambar", d: "Poster bergambar tentang cuci tangan, buang sampah, gosok gigi, dan gizi seimbang untuk dipasang di sekolah." },
  { s: "purbonegaran", k: "Soshum", p: "Melinda", t: "Warga", title: "Terban Tertib: Poster Tata Tertib Lalu Lintas", d: "Poster tentang helm, rambu, dan kecepatan di gang, dipasang di titik strategis dan dibagikan ke grup warga." },
  { s: "purbonegaran", k: "Soshum", p: "Melinda", t: "Siswa SD–SMA", title: "English Class Terban", d: "Kelas bahasa Inggris per jenjang lewat permainan, kuis, dan praktik percakapan." },

  // ---------- Sapen ----------
  { s: "sapen", k: "Soshum", p: "Hanif", t: "Pelajar", title: "Sapen Green Quest", d: "Permainan jelajah kampung dengan peta dan quest card: mengenali tanaman, mengamati lingkungan, dan memecahkan teka-teki logika di setiap titik." },
  { s: "sapen", k: "Soshum", p: "Hanif", t: "Pengunjung galeri", title: "Wayang Uwuh Passport", d: "Paspor berisi misi di Galeri Wayang Uwuh; setiap misi yang selesai mendapat stempel." },
  { s: "sapen", k: "Soshum", p: "Hanif", t: "Pelajar", title: "Wayang & Geometry", d: "Menemukan bentuk, pola, dan simetri pada karya Wayang Uwuh sebagai cara belajar geometri dari benda nyata." },
  { s: "sapen", k: "Saintek", p: "Tristan", t: "Pengurus bank sampah", title: "Sapen Berseri: Bank Sampah dan Tabungan Digital", d: "SOP pemilahan dan setor sampah anorganik, serta pencatatan tabungan sampah di Google Sheets untuk bank sampah RW 6/7." },
  { s: "sapen", k: "Saintek", p: "Tristan", t: "Warga", title: "Sapen Green Movement", d: "Survei kebiasaan sampah warga, konten edukasi pilah sampah, dan dashboard capaian bank sampah yang dibagikan rutin." },
  { s: "sapen", k: "Saintek", p: "Tristan", t: "Pengunjung", title: "Sapen Berkisah: Arsip Digital Sejarah Kampung", d: "Foto lama dan cerita sesepuh tentang asal nama Sapen, Kampung Inggris, dan Kampung Batik, disusun menjadi halaman cerita dwibahasa." },
  { s: "sapen", k: "Medika", p: "Ridho", t: "Anak-anak", title: "Cantik: Cuci Tangan, Anak Sehat, dan Baik", d: "Demonstrasi dan praktik cuci tangan pakai sabun sebagai kebiasaan hidup bersih sejak dini." },
  { s: "sapen", k: "Medika", p: "Ridho", t: "Kader posyandu", title: "Sentra Balita", d: "Pendampingan kader posyandu balita: alur pelayanan, penimbangan, pencatatan, dan edukasi orang tua." },
  { s: "sapen", k: "Medika", p: "Ridho", t: "Karang Taruna", title: "Kawan Sehat", d: "Membekali Karang Taruna sebagai penggerak kampung wisata yang bersih: pemilahan sampah, pengurangan sampah, dan PHBS." },
  { s: "sapen", k: "Medika", p: "Maira", t: "Warga", title: "PIRING: Pilihan dan Ragam Isi Nutrisi dan Gizi", d: "Aktivitas interaktif mengenali bahan pangan dan menyusun pola makan harian yang seimbang." },
  { s: "sapen", k: "Medika", p: "Maira", t: "Warga", title: "AMATI: Amati Makanan, Atasi Keracunan", d: "Tanda makanan yang tidak layak konsumsi dan langkah awal ketika terjadi keracunan makanan." },
  { s: "sapen", k: "Medika", p: "Maira", t: "Siswi SD", title: "MENARI: Menstruasi dan Rawat Diri", d: "Edukasi pubertas, menstruasi, dan cara merawat diri bagi siswi SD." },
  { s: "sapen", k: "Saintek", p: "Azka", t: "Wisatawan", title: "Katalog Digital Wayang Uwuh", d: "Dokumentasi digital karya Wayang Uwuh sebagai bagian dari paket wisata Kampung Sapen." },
  { s: "sapen", k: "Saintek", p: "Azka", t: "Pengunjung", title: "Papan QR & Peta Jalur Wisata Kampung Sapen", d: "Peta jalur wisata digital dengan papan QR di setiap titik yang menautkan ke katalog, panduan, dan modul edukasi." },
  { s: "sapen", k: "Saintek", p: "Azka", t: "Pemandu Green Tour", title: "Modul Edukasi Daur Ulang untuk Green Tour Sapen", d: "Materi siap pakai untuk pemandu: alur pengelolaan sampah, budidaya maggot, bank sampah, dan praktik daur ulang." },
  { s: "sapen", k: "Soshum", p: "Tiara", t: "Kelompok Wanita Tani", title: "Penguatan Pemanfaatan TOGA melalui KWT", d: "Mendukung Kelompok Wanita Tani memanfaatkan tanaman obat keluarga untuk kesehatan warga Sapen." },
  { s: "sapen", k: "Soshum", p: "Tiara", t: "Pengrajin batik", title: "Optimalisasi Produk Pengrajin Batik", d: "Mengembangkan produk pengrajin batik Sapen sebagai pendukung kampung wisata." },
  { s: "sapen", k: "Soshum", p: "Tiara", t: "Pengelola galeri", title: "Kurasi dan Penataan Galeri Wayang Uwuh", d: "Menata galeri menjadi ruang wisata edukatif yang nyaman dijelajahi." },
  { s: "sapen", k: "Soshum", p: "Sina", t: "Pelaku UMKM", title: "QRIS dan Keamanan Transaksi untuk UMKM", d: "Ketentuan layanan, cara mengecek pembayaran masuk, dan simulasi masalah transaksi." },
  { s: "sapen", k: "Soshum", p: "Sina", t: "Warga", title: "Hak, Kewajiban, dan Risiko PayLater", d: "Membaca biaya, jatuh tempo, dan jalur pengaduan lewat contoh tagihan fiktif." },
  { s: "sapen", k: "Soshum", p: "Sina", t: "Warga", title: "Hukum dan Kampanye Pengelolaan Sampah Rumah Tangga", d: "Tanggung jawab warga dalam pengelolaan sampah, diskusi kasus, dan simulasi pemilahan." },
];

const TIMELINE = [
  { date: "19–25 Okt", title: "Persiapan dan koordinasi", text: "Penerjunan, perkenalan dengan pengurus kampung, observasi awal, dan memastikan jadwal." },
  { date: "26 Okt–1 Nov", title: "Pemetaan dan pematangan rencana", text: "Pendalaman potensi lokal dan komunikasi dengan calon mitra. Kelas untuk pelajar di Resonegaran dimulai." },
  { date: "2–15 Nov", title: "Pelaksanaan tahap I", text: "Program prioritas tiap subunit berjalan, termasuk sosialisasi digitalisasi kampung." },
  { date: "16–29 Nov", title: "Pelaksanaan tahap II", text: "Workshop wisata dan batik, kolaborasi dengan mitra, dan Pameran Resonegaran." },
  { date: "30 Nov–6 Des", title: "Evaluasi dan penyelesaian luaran", text: "Menyempurnakan luaran, merapikan dokumentasi, dan menyepakati tindak lanjut bersama warga." },
  { date: "7 Des", title: "Penutupan dan serah terima", text: "Penyampaian hasil dan penyerahan luaran kepada masyarakat." },
];
