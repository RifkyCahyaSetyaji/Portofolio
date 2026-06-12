# Rifky Cahya Setyaji - Personal Portfolio & Professional Profile

Sebuah website portofolio premium interaktif yang dirancang untuk menampilkan profil pribadi, keahlian akademis, proyek, pengalaman kerja/organisasi, serta pencapaian prestasi secara profesional. Website ini dibangun menggunakan teknologi web modern tahun 2026.

## Teknologi yang Digunakan

- **Core**: [React.js](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi & Interaktivitas**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Google Fonts (Outfit & Inter)

## Fitur Utama

1. **Sticky Glassmorphism Navbar**: Navigasi responsif dengan smooth scrolling dan deteksi active section dinamis.
2. **Dynamic Hero Section**: Intro visual, animasi pengetikan peran (Project Manager, Cyber Security, Developer), dan tombol download CV terintegrasi.
3. **Interactive About & Achievements**: Statistik proyek interaktif (animated counters), timeline perjalanan belajar, tab riwayat pendidikan, dan piagam prestasi.
4. **Skills & Stack Section**: Progress bar beranimasi pada masing-masing kategori keahlian serta grid showcase tech-stack.
5. **Filterable Projects Grid**: Galeri proyek yang dapat difilter berdasarkan bidang (Web, Cyber Sec, Desktop, WordPress) dilengkapi dengan modal overlay detail proyek interaktif.
6. **Timeline Pengalaman**: Tata letak timeline kronologis untuk membedakan pengalaman magang profesional dengan organisasi kampus (BEM FILKOM & UKM POROS).
7. **Contact Form dengan Validasi**: Formulir kontak interaktif dengan validasi input client-side secara real-time dan notifikasi sukses terkirim.
8. **Dark Mode Toggle**: Dukungan penuh transisi tema terang/gelap yang tersimpan otomatis di localStorage.
9. **Back To Top Button**: Aksesibilitas cepat untuk kembali ke bagian atas halaman.
10. **SEO & Accessibility Optimized**: Semantic HTML5, metadata lengkap (Open Graph & Twitter Card), dan atribut aksesibilitas (aria-label).

## Cara Menjalankan Project Secara Lokal

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan) di komputer Anda.

### Langkah-langkah
1. **Clone atau Buka Direktori Project**:
   ```bash
   cd DAMP_Individu
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Setelah server berjalan, buka browser di alamat `http://localhost:5173`.

4. **Membuat Build Produksi**:
   ```bash
   npm run build
   ```
   Folder `dist` akan dibuat berisi file-file statis yang siap dideploy.

## Cara Deployment

Project ini dirancang agar siap dideploy ke berbagai cloud hosting platform modern:

### 1. Vercel
Langkah termudah untuk melakukan deployment:
- Hubungkan repositori GitHub Anda ke akun [Vercel](https://vercel.com).
- Pilih project **DAMP_Individu**.
- Vercel secara otomatis mendeteksi konfigurasi Vite.
- Klik **Deploy**.

### 2. Netlify
- Masuk ke akun [Netlify](https://www.netlify.com).
- Hubungkan dengan repositori GitHub Anda atau drag-and-drop folder `dist` setelah menjalankan `npm run build`.
- Pengaturan build:
  - **Build command**: `npm run build`
  - **Publish directory**: `dist`

### 3. GitHub Pages
Anda dapat menggunakan plugin `gh-pages` untuk mendeploy langsung ke GitHub Pages:
1. Pasang dependensi dev:
   ```bash
   npm install -D gh-pages
   ```
2. Tambahkan properti `homepage` di `package.json`:
   ```json
   "homepage": "https://username.github.io/nama-repo"
   ```
3. Tambahkan skrip build & deploy di `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Jalankan perintah deploy:
   ```bash
   npm run deploy
   ```
