# Vino Server: File Sharing Made Simple

Selamat datang di repositori proyek UAS (Ujian Akhir Semester) untuk mata kuliah Pemrograman Berorientasi Objek (PBO). Proyek ini adalah aplikasi desktop server file sederhana yang dibangun menggunakan Electron, Express, React, dan TypeScript.

Aplikasi ini dirancang untuk memudahkan berbagi file melalui web server lokal, dengan antarmuka grafis yang intuitif untuk mengonfigurasi, memulai, menghentikan, dan memantau server.

## Demo Aplikasi
![Screenshot 2025-07-03 110153](https://github.com/user-attachments/assets/2a48c566-02b6-48b8-99be-079b9983a2c2)
![Screenshot 2025-06-25 145222](https://github.com/user-attachments/assets/68174570-85c8-479b-8bad-8eabaa1756dc)
![Screenshot 2025-06-25 145337](https://github.com/user-attachments/assets/b02dfcaf-577b-427d-a52f-5d3bc21002f6)
![Screenshot 2025-06-25 145316](https://github.com/user-attachments/assets/3e80c114-8e42-4120-b871-2eafb7b17939)

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
Pastikan Anda memiliki Node.js terinstal.

```bash
npm install
```

### Jalankan aplikasi dalam mode development

```bash
npm run dev
```

### Untuk membuat build aplikasi

```bash
# For Windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
```

## Kontributor

- Alvino Radyo Danisworo - A11.2022.14600

Dibuat sebagai bagian dari Ujian Akhir Semester Pemrograman Berorientasi Objek.
