// Static portfolio data for Rifky Cahya Setyaji

export const profileData = {
  name: "Rifky Cahya Setyaji",
  title: "S1 Information Systems Student | IT Project Manager & Cyber Security Enthusiast",
  subtitles: ["IT Project Manager", "Cyber Security Analyst", "Full Stack Developer", "Information Systems Student"],
  email: "its.rif.cahya@gmail.com",
  phone: "081333229511",
  location: "Lowokwaru, Kota Malang, Jawa Timur",
  linkedin: "https://www.linkedin.com/in/rifky-cahya-setyaji-129643365/",
  github: "https://github.com/", // Add a placeholder github profile
  about: "Mahasiswa Sistem Informasi Universitas Brawijaya yang memiliki minat tinggi di bidang IT Project Management dan Cyber Security. Berpengalaman dalam memimpin dan mengembangkan berbagai proyek pembuatan website, administrasi jaringan, serta analisis keamanan siber. Memiliki kompetensi yang kuat dalam perencanaan proyek (project planning), mitigasi risiko, penggunaan software manajemen proyek modern, serta pengelolaan server dan arsitektur web.",
  avatar: null, // We can generate a professional placeholder or let the app style an elegant initial/profile badge
};

export const statsData = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Awards & Achievements", value: 4, suffix: "" },
  { label: "Certifications", value: 4, suffix: "" },
  { label: "Organizations & Internships", value: 4, suffix: "" },
];

export const educationData = [
  {
    institution: "Universitas Brawijaya",
    degree: "S1 Sistem Informasi",
    period: "Jul 2025 - Sep 2028 (Expected)",
    location: "Kec. Lowokwaru, Kota Malang, Jawa Timur",
    highlights: [
      "Bergabung dengan POROS 2026 (Unit Kegiatan Mahasiswa Keilmuan bidang IT)",
      "Bergabung dengan BEM FILKOM 2026 sebagai PIT (Pengembangan Informasi & Teknologi)"
    ],
  },
  {
    institution: "SMK Telkom Malang",
    degree: "Sekolah Menengah Kejuruan",
    period: "Jul 2022 - Jun 2025",
    location: "Kec. Kedungkandang, Kota Malang, Jawa Timur",
    highlights: [
      "Bergabung dengan MPK (Majelis Perwakilan Kelas), PASKATEMA (Paskibra SMK Telkom), dan COMET",
      "Lolos Top 5 seleksi LKS (Lomba Kompetensi Siswa) bidang Cyber Security"
    ],
  }
];

export const experienceData = [
  {
    role: "Staf IT Solutions (PIT)",
    company: "BEM FILKOM 2026 - Universitas Brawijaya",
    period: "Mar 2026 - Present",
    type: "Organization",
    description: "Bertanggung jawab dalam pengembangan infrastruktur IT organisasi dan manajemen proyek perangkat lunak.",
    tasks: [
      "Bertindak sebagai Koordinator Website BEM FILKOM 2026.",
      "Mengelola tim pengembang sebagai Project Manager IT Solutions untuk produk internal BEM FILKOM."
    ],
  },
  {
    role: "Staf Cyber Security & Front End Developer",
    company: "POROS - Universitas Brawijaya",
    period: "Apr 2026 - Present",
    type: "Organization",
    description: "Berkontribusi dalam pengamanan sistem internal dan pengembangan platform digital POROS.",
    tasks: [
      "Bertindak sebagai Front End Developer untuk Website Resmi POROS 2026.",
      "Bertanggung jawab dalam Divisi Cyber Security untuk analisis keamanan sistem dan pencegahan celah keamanan.",
      "Menjadi anggota aktif divisi Human Resources untuk pembinaan dan manajemen anggota."
    ],
  },
  {
    role: "Web Development Specialist",
    company: "Tjahaja Laundry",
    period: "Aug 2025 - Nov 2025",
    type: "Freelance",
    description: "Mengembangkan platform company profile digital untuk bisnis laundry lokal.",
    tasks: [
      "Merancang dan membuat website company profile laundry berbasis WordPress.",
      "Menyusun dan merencanakan alur proyek (Project Planning) komprehensif menggunakan Notion untuk memastikan peluncuran tepat waktu."
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "CV Global Solusindo (Software House)",
    period: "Jun 2024 - Oct 2024",
    type: "Internship",
    description: "Bekerja di software house profesional untuk membangun berbagai solusi digital skala UMKM dan perusahaan.",
    tasks: [
      "Mendevelop website company profile dan sistem informasi menggunakan Laravel dengan database Laragon.",
      "Membuat Aplikasi Laundry Desktop menggunakan Java Desktop (Swing) dengan IDE Netbeans.",
      "Mengintegrasikan sistem pembayaran digital (Payment Gateway) menggunakan Midtrans API.",
      "Membangun Website Administrasi internal menggunakan CodeIgniter 3 (CI3)."
    ],
  }
];

export const projectsData = [
  {
    id: 1,
    title: "BEM FILKOM 2026 Web Portal",
    category: "Web Development",
    subcategory: "Next.js & Tailwind CSS",
    description: "Portal resmi BEM Fakultas Ilmu Komputer Universitas Brawijaya 2026 yang mengintegrasikan informasi program kerja, sistem pengaduan mahasiswa, serta pendaftaran kepanitiaan.",
    longDescription: "Website ini bertindak sebagai pusat informasi dan administrasi mahasiswa FILKOM UB. Menggunakan React/Next.js dengan rendering yang cepat serta arsitektur yang dirancang untuk menangani beban traffic tinggi selama masa penerimaan mahasiswa atau program besar.",
    image: null,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
    stats: { TeamSize: "7 Orang", Duration: "3 Bulan", Role: "Project Manager & Frontend Coordinator" }
  },
  {
    id: 2,
    title: "POROS UB Official Website",
    category: "Web Development",
    subcategory: "React.js & Tailwind CSS",
    description: "Website profil dan portal edukasi Unit Kegiatan Mahasiswa (UKM) POROS Universitas Brawijaya 2026 yang mengedepankan keamanan informasi dan UI modern.",
    longDescription: "Website POROS dikembangkan dengan optimasi SEO tinggi dan performa loading di bawah 1.5 detik. Didesain menggunakan Tailwind CSS dengan sentuhan dark mode bawaan dan animasi mikro untuk memberikan impresi premium.",
    image: null,
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    stats: { TeamSize: "4 Orang", Duration: "2 Bulan", Role: "Lead Frontend Developer" }
  },
  {
    id: 3,
    title: "Midtrans Payment Gateway Integrated Laundry App",
    category: "Web Development",
    subcategory: "Laravel & Midtrans API",
    description: "Sistem Informasi Manajemen Bisnis Laundry dengan dashboard analitik keuangan, manajemen antrean, dan notifikasi pembayaran digital otomatis.",
    longDescription: "Sistem web laundry enterprise yang mendukung pencatatan transaksi terintegrasi, kalkulasi bobot cucian otomatis, pencetakan struk digital, dan integrasi Payment Gateway Midtrans (Snap API) untuk mendukung pembayaran e-wallet seperti GoPay, OVO, dan transfer bank.",
    image: null,
    tags: ["Laravel", "Laragon", "MySQL", "Midtrans API", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "#",
    stats: { TeamSize: "Individu", Duration: "4 Bulan", Role: "Full Stack Developer" }
  },
  {
    id: 4,
    title: "Java Laundry Desktop Application",
    category: "Desktop Application",
    subcategory: "Java Swing & NetBeans",
    description: "Aplikasi desktop kasir laundry untuk pengelolaan transaksi offline lokal, dirancang untuk berjalan ringan di komputer kasir dengan database terdistribusi.",
    longDescription: "Aplikasi desktop yang dibangun untuk mempercepat operasional laundry CV Global Solusindo. Dilengkapi pencatatan kasir, laporan penjualan bulanan dalam format PDF, manajemen status cuci, dan backup database lokal yang tangguh.",
    image: null,
    tags: ["Java", "Java Swing", "MySQL", "NetBeans IDE", "JasperReports"],
    demoUrl: "#",
    githubUrl: "#",
    stats: { TeamSize: "Individu", Duration: "2 Bulan", Role: "Desktop Developer" }
  },
  {
    id: 5,
    title: "Internal Admin Dashboard CI3",
    category: "Web Development",
    subcategory: "CodeIgniter 3",
    description: "Sistem administrasi internal untuk rekap data operasional proyek, log karyawan, dan manajemen inventaris kantor di CV Global Solusindo.",
    longDescription: "Membangun sistem CMS (Content Management System) dan admin dashboard kustom berbasis MVC CodeIgniter 3. Memaksimalkan kecepatan respons server lama dengan teknik query caching dan keamanan session token custom.",
    image: null,
    tags: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap", "jQuery"],
    demoUrl: "#",
    githubUrl: "#",
    stats: { TeamSize: "2 Orang", Duration: "2 Bulan", Role: "Backend Developer" }
  },
  {
    id: 6,
    title: "Tjahaja Laundry Company Profile",
    category: "WordPress Dev",
    subcategory: "WordPress Custom Theme",
    description: "Website company profile interaktif yang menampilkan paket layanan laundry premium, lokasi cabang via Google Maps, dan tombol WhatsApp booking otomatis.",
    longDescription: "Proyek freelance pembuatan website profil bisnis laundry dengan struktur SEO optimal dan tingkat kemudahan edit konten tinggi menggunakan WordPress Gutenberg. Dilengkapi dengan Notion Project Planner dalam fase inisiasi proyek.",
    image: null,
    tags: ["WordPress", "Elementor", "Notion", "SEO Tuning"],
    demoUrl: "#",
    githubUrl: "#",
    stats: { TeamSize: "Individu", Duration: "3 Minggu", Role: "Web Developer & Planner" }
  },
  {
    id: 7,
    title: "Network Security Assessment & Hardening",
    category: "Cyber Security",
    subcategory: "Security Audit & Pen-Testing",
    description: "Audit keamanan siber komprehensif dan hardening firewall pada server pengujian organisasi untuk menambal celah injeksi database (SQLi) dan cross-site scripting (XSS).",
    longDescription: "Melakukan simulasi serangan siber menggunakan OWASP Top 10 framework, menemukan kerentanan bypass autentikasi, menyusun dokumen risk assessment, serta mengkonfigurasi Web Application Firewall (WAF) dan Nginx reverse proxy hardening.",
    image: null,
    tags: ["Kali Linux", "Wireshark", "Nginx", "WAF", "Metasploit", "OWASP Top 10"],
    demoUrl: "#",
    githubUrl: "#",
    stats: { TeamSize: "Individu", Duration: "1 Bulan", Role: "Cyber Security Auditor" }
  }
];

export const skillsData = {
  projectManagement: [
    { name: "Project Planning & Scheduling", level: 90 },
    { name: "Risk Management & Mitigation", level: 85 },
    { name: "Cost Control & Budgeting", level: 80 },
    { name: "Business Analysis", level: 85 },
    { name: "Notion & Jira Management", level: 90 }
  ],
  cyberSecurity: [
    { name: "Network Administration & Hardening", level: 85 },
    { name: "Server Configuration & Management", level: 80 },
    { name: "Vulnerability Assessment (OWASP)", level: 78 },
    { name: "Penetration Testing (Kali Linux)", level: 75 },
    { name: "Linux Server Administration", level: 82 }
  ],
  frontend: [
    { name: "React.js & Next.js", level: 82 },
    { name: "Vite.js Development", level: 85 },
    { name: "Tailwind CSS & Responsive UI", level: 90 },
    { name: "Framer Motion Animation", level: 78 },
    { name: "JavaScript (ES6+) & Web APIs", level: 85 }
  ],
  backend: [
    { name: "Laravel Framework", level: 85 },
    { name: "CodeIgniter 3 (CI3)", level: 80 },
    { name: "PHP Development", level: 82 },
    { name: "MySQL & Database Optimization", level: 85 },
    { name: "Midtrans Payment Gateway Integration", level: 90 }
  ]
};

export const awardsData = [
  {
    title: "Juara 2 Program Kreativitas Mahasiswa Bidang Karsa Cipta (PKM-KC)",
    year: "2025",
    issuer: "Universitas Brawijaya / Kemenristekdikti",
    description: "Merancang dan membuat inovasi purwarupa sistem cerdas terintegrasi siber-fisik berbasis teknologi Web & IoT."
  },
  {
    title: "Top 10 Lomba UI/UX SBY DEV",
    year: "2024",
    issuer: "SBY DEV Community",
    description: "Merancang desain interaksi aplikasi mobile inklusif yang berfokus pada aksesibilitas kelompok rentan dengan skor usability tinggi."
  },
  {
    title: "Top 5 Seleksi LKS Cyber Security",
    year: "2025",
    issuer: "SMK Telkom Malang / Dinas Pendidikan",
    description: "Lolos seleksi ketat babak final Lomba Kompetensi Siswa bidang pengamanan jaringan dan pertahanan siber tingkat sekolah."
  },
  {
    title: "Top 15 Lomba Business Plan Competition (BPC) PlayBox",
    year: "2022",
    issuer: "PlayBox Entrepreneur Academy",
    description: "Menyusun analisis kelayakan bisnis, proyeksi keuangan, dan model bisnis startup digital berkelanjutan."
  }
];

export const learningTimeline = [
  {
    year: "2022",
    title: "Langkah Awal di SMK Telkom Malang",
    desc: "Memulai perjalanan akademis di kejuruan IT. Belajar dasar pemrograman, jaringan komputer, dan algoritma dasar."
  },
  {
    year: "2023",
    title: "TEFA Jagoan Hosting & Sertifikasi Pertama",
    desc: "Terlibat dalam Teaching Factory Jagoan Hosting. Meraih sertifikasi DigiUp Junior Graphic Design dan mulai mendalami UI/UX."
  },
  {
    year: "2024",
    title: "Coding Camp DBS & Magang Full Stack",
    desc: "Menyelesaikan Coding Camp DBS Full Stack Development. Magang di CV Global Solusindo membangun aplikasi web & desktop nyata."
  },
  {
    year: "2025",
    title: "LKS Cyber Security, Kelulusan & Juara PKM-KC",
    desc: "Menembus Top 5 LKS Cyber Security SMK Telkom. Lulus sekolah, diterima di S1 Sistem Informasi Universitas Brawijaya, dan menyabet Juara 2 PKM-KC."
  },
  {
    year: "2026",
    title: "Ekspansi Organisasi BEM FILKOM & UKM POROS",
    desc: "Dipercaya menjadi Koordinator Website & PM IT Solutions di BEM FILKOM, serta bergabung sebagai Staf Cyber Security & Frontend Dev di UKM POROS."
  }
];

export const testimonialsData = [
  {
    quote: "Rifky menunjukkan dedikasi luar biasa saat memimpin pengembangan platform IT BEM FILKOM. Kemampuan manajemen proyeknya sangat matang untuk ukuran mahasiswa tingkat pertama. Proyek diselesaikan tepat waktu dengan standar kode yang bersih.",
    name: "Ahmad Rayhan",
    role: "Ketua BEM FILKOM Universitas Brawijaya 2026",
    avatarBg: "from-brand-primary to-brand-secondary"
  },
  {
    quote: "Selama magang di CV Global Solusindo, Rifky berhasil memprogram aplikasi kasir desktop Java dengan sangat rapi dan menuntaskan integrasi payment gateway Midtrans Laravel tanpa hambatan berarti. Beliau cepat belajar dan andal bekerja dalam tim.",
    name: "Eko Prasetyo",
    role: "Senior Project Manager, CV Global Solusindo",
    avatarBg: "from-brand-secondary to-brand-accent"
  },
  {
    quote: "Rifky memiliki bakat langka yang memadukan keahlian desain antarmuka (frontend) yang memanjakan mata dengan pemahaman keamanan siber yang kuat. Website internal UKM POROS menjadi jauh lebih aman setelah proses audit dan hardening yang ia pimpin.",
    name: "Sarah Amanda",
    role: "Koordinator Divisi Cyber Security POROS UB 2026",
    avatarBg: "from-brand-highlight to-brand-primary"
  }
];
