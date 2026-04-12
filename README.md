# Personal Web Profile & Portfolio

Website ini adalah **Web Profile & Portofolio Personal** yang interaktif dan dinamis, dibangun menggunakan ekosistem modern **React (Vite)** dan **Tailwind CSS**. Aplikasi ini tidak hanya menyediakan halaman publik untuk menampilkan profil, tetapi juga memiliki **Dashboard Admin** (CMS) untuk mengelola seluruh konten secara _real-time_.

## 🚀 Tech Stack Utama

- **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: React Router DOM (v7)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **State & Data Fetching**: Context API, Axios
- **Manajemen Sesi**: Cookies (`react-cookie`)
- **Database/ORM (Adapter)**: LibSQL, Prisma Adapter
- **Pemberitahuan/Alerts**: [SweetAlert2](https://sweetalert2.github.io/)

## 📌 Fitur Utama

### 1. Halaman Publik (Landing Page)
- **Hero & About**: Pengenalan singkat profil dan ringkasan karier.
- **Skills**: Menampilkan daftar keahlian tenis/soft-skills yang dikuasai.
- **Experience**: Perjalanan dan riwayat pengalaman kerja/pendidikan.
- **Projects**: Showcase proyek-proyek terbaik beserta detail framework/tools yang digunakan.
- **Contact**: Menampilkan informasi kontak sosial dan form pengiriman pesan.

### 2. Dashboard Admin (CMS)
- **Secure Authentication**: Sistem login menggunakan JWT/Auth token yang diamankan dengan `PrivateRoute`.
- **Manajemen Konten (CRUD)**:
  - Kelola Data About
  - Kelola Data Skills
  - Kelola Data Experience
  - Kelola Data Projects
  - Kelola Data Contacts
- **Interactive UI**: Integrasi *SweetAlert2* untuk konfirmasi aksi (Update/Delete) dan pop-up *loading/notification*.

## 🏗️ Struktur Proyek

```text
src/
├── assets/         # Aset statis berupa gambar, icon, dsb.
├── components/     # UI Component utama (Navbar, Hero, About, dsb)
│   ├── Admin/      # Component khusus untuk Dashboard Admin (CMS)
│   ├── context/    # React Context (UserContext)
│   └── notification/ # Sistem notifikasi komponen
├── helper/         # Fungsi-fungsi helper (Format Date, konfigurasi API)
├── pages/          # Halaman utama aplikasi (LandingPage, Login, AdminPage)
└── services/       # Modul API service untuk berinteraksi dengan Backend (axios base)
```

## 🛠️ Cara Menjalankan Aplikasi (Getting Started)

1. **Clone Repository (bila menggunakan git):**
   ```bash
   git clone <url-repo-anda>
   cd web-profile
   ```

2. **Install Dependencies:**
   Pastikan Anda sudah menginstal Node.js, kemudian jalankan:
   ```bash
   npm install
   ```

3. **Inisialisasi Environment:**
   Siapkan file `.env` di root folder. Berisi URL endpoint API, misalnya:
   ```properties
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser.
