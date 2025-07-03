# Vino Server: File Sharing Made Simple

Selamat datang di repositori proyek UAS (Ujian Akhir Semester) untuk mata kuliah Pemrograman Berorientasi Objek (PBO). Proyek ini adalah aplikasi desktop server file sederhana yang dibangun menggunakan Electron, Express, React, dan TypeScript.

Aplikasi ini dirancang untuk memudahkan berbagi file melalui web server lokal, dengan antarmuka grafis yang intuitif untuk mengonfigurasi, memulai, menghentikan, dan memantau server.

## Demo Aplikasi
![Screenshot Vino Server](https://via.placeholder.com/800x450.png?text=Vino+Server+Screenshot)

## Fitur Utama

- **Manajemen Server File**: Mulai dan hentikan server dengan antarmuka grafis yang mudah digunakan
- **Konfigurasi Sederhana**: Atur port, direktori root, dan lokasi log dengan mudah
- **Monitoring Log**: Lihat semua permintaan HTTP yang masuk ke server dalam antarmuka aplikasi
- **File Serving**: Sajikan file statis dari direktori yang ditentukan
- **Directory Listing**: Tampilkan daftar file dan folder untuk navigasi mudah

## Teknologi yang Digunakan

- **Framework Aplikasi Desktop**: Electron
- **Framework Backend**: Express.js
- **Framework Frontend**: React dengan React Router
- **Bahasa Pemrograman**: TypeScript
- **Styling**: CSS dengan modul styling
- **Logging**: File sistem untuk log permintaan HTTP

## Struktur Proyek

- **main/**: Berisi kode untuk proses utama Electron (index.ts) yang bertanggung jawab untuk membuat dan mengelola jendela aplikasi
- **preload/**: Berisi skrip preload untuk menjembatani antara proses main dan renderer
- **renderer/**: Berisi kode untuk proses renderer Electron, yang merupakan aplikasi React
  - **src/**: Direktori utama untuk komponen dan halaman aplikasi
    - **pages/**: Halaman-halaman aplikasi seperti Home, ServerConfig, ServerStart, dll
    - **components/**: Komponen UI yang dapat digunakan kembali
    - **hooks/**: Hook React kustom, seperti usePersistentStorage
- **common/**: Berisi tipe dan konstanta yang digunakan bersama antara proses main dan renderer
- **logs/**: Direktori untuk menyimpan file log permintaan server

## Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal, ikuti langkah-langkah berikut:

### Clone repositori ini

```bash
git clone https://github.com/AlvinoRD/vino-electron.git
cd vino-electron
cd electron-app
```

### Install dependensi
Pastikan Anda memiliki Node.js dan pnpm terinstal.

```bash
pnpm install
```

### Jalankan aplikasi dalam mode development

```bash
pnpm dev
```

### Untuk membuat build aplikasi

```bash
# For Windows
pnpm build:win

# For macOS
pnpm build:mac

# For Linux
pnpm build:linux
```

## Kontributor

- Alvino Radyo Danisworo - A11.2022.14600

Dibuat sebagai bagian dari Ujian Akhir Semester Pemrograman Berorientasi Objek.
