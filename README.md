# 🚀 Personal Web Portfolio

Selamat datang di repositori web portfolio saya! Proyek ini bukan sekadar profil statis, melainkan representasi dari perjalanan teknis saya dalam pengembangan web dan riset *Machine Learning*.

---

## 🛠️ Tech Stack

Aplikasi ini dibangun dengan fokus pada performa, skalabilitas, dan efisiensi pengembangan:

- **Frontend:** [React.js](https://reactjs.org/) & Tailwind CSS
- **Backend:** [Node.js](https://nodejs.org/) (Express/Fastify)
- **ORM:** [Prisma](https://www.prisma.io/) (PostgreSQL)
- **Containerization:** [Docker](https://www.docker.com/)
- **Environment:** Developed on Linux (Ubuntu/Parrot OS)

## ✨ Fitur Utama

- **Responsive UI:** Dioptimalkan untuk berbagai ukuran layar.
- **Project Showcase:** Daftar proyek pilihan yang terintegrasi dengan data dinamis.
- **Thesis Highlight:** Bagian khusus yang memaparkan riset saya tentang **Deteksi Phishing** menggunakan algoritma **XGBoost**.
- **Dark Mode Support:** Nyaman untuk mata pengembang.
- **Docker Ready:** Siap di-deploy menggunakan container.

---

## 🔬 Research Spotlight: Phishing Detection

Selain pengembangan web, saya mendalami bidang keamanan siber dan *Machine Learning*. Proyek utama saya saat ini adalah:
> **"Phishing Website Detection using XGBoost Algorithm"**
> 
> Fokus pada optimasi fitur menggunakan **RFECV** dan tuning hyperparameter dengan **Hyperopt** untuk mencapai akurasi tertinggi dalam mengidentifikasi ancaman web.

---

## 🚀 Cara Menjalankan Proyek

### 1. Prasyarat
Pastikan Anda sudah menginstal:
- Node.js (v18+)
- Docker & Docker Compose
- PostgreSQL (jika tidak menggunakan Docker)

### 2. Instalasi & Setup Lokal
```bash
# Clone repositori
git clone [https://github.com/username/portfolio-web.git](https://github.com/username/portfolio-web.git)
cd portfolio-web

# Instalasi dependensi
npm install

# Setup environment variable
cp .env.example .env

# Jalankan migrasi database (Prisma)
npx prisma migrate dev
