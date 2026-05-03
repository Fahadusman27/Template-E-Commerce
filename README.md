# AURA - Modern Perfume E-Commerce Template

Aura adalah template E-Commerce modern dan estetik yang dirancang khusus untuk toko parfum premium. Dibangun menggunakan **React**, **Tailwind CSS**, dan **Vite**, template ini menawarkan pengalaman pengguna yang sangat halus, responsif, dan fungsional.

---

## 🚀 Instalasi & Persiapan

Ikuti langkah-langkah berikut untuk menjalankan project di lingkungan lokal Anda:

1. **Pastikan Node.js Terinstall**: Versi 18 atau lebih baru direkomendasikan.
2. **Install Dependensi**:
   Buka terminal di direktori project dan jalankan:
   ```bash
   npm install
   ```
3. **Menjalankan Server Development**:
   Jalankan perintah berikut untuk melihat hasil desain secara real-time:
   ```bash
   npm run dev
   ```
4. **Build untuk Produksi**:
   Jika ingin membuat file produksi yang dioptimasi:
   ```bash
   npm run build
   ```

---

## 🛠️ Tech Stack & Pengaturan

- **Core**: React.js (JavaScript)
- **Styling**: Tailwind CSS (Minimalis, Neutral Color Palette)
- **Icons**: Lucide React
- **Fonts**: 
  - *Inter* (Clean sans-serif untuk konten)
  - *Playfair Display* (Elegant serif untuk heading)
- **State Management**: React Hooks (`useState`, `useEffect`) - Tanpa library eksternal yang berat.

### Pengaturan Warna (Neutral Palette)
- `parfum-light`: `#f9f9f9` (Background)
- `parfum-neutral`: `#e5e5e5` (Border & Divider)
- `parfum-dark`: `#1a1a1a` (Teks Utama)
- `parfum-accent`: `#c8b6a6` (Hover & Penekanan)

---

## 🧭 Alur & Fitur Desain

### 1. Homepage (Navigation & Hero)
- **Hero Banner**: Visualisasi premium dengan tipografi elegan.
- **Curated Collections**: Pengelompokan parfum berdasarkan suasana (Date Night, Office, dll).

### 2. Shop & Search (Katalog)
- **Pencarian Canggih**: Masukkan nama produk di Navbar. Saat disubmit, input akan otomatis bersih tetapi hasil pencarian akan tertampil.
- **Filter Samping**: Filter berdasarkan Fragrance Family (Floral, Woody, dll), Gender, dan Konsentrasi (EDP/EDT).
- **Quick View**: Melihat ringkasan notes tanpa meninggalkan halaman katalog.

### 3. Detail Produk (PDP)
- **Notes Pyramid**: Visualisasi Top, Middle, dan Base notes.
- **Varian Harga Dinamis**: Pilih ukuran (5ml, 30ml, 100ml) dan harga akan otomatis berubah.
- **Performance Indicator**: Bar indikator untuk Longevity dan Sillage.
- **Back to Shop**: Navigasi kembali ke katalog yang secara otomatis membersihkan filter pencarian sebelumnya.

### 4. Wishlist (Collections)
- **Love Button**: Klik ikon hati pada produk apa pun untuk memasukkannya ke menu **Collections**.
- **User Flow**: Menu Collections menampilkan semua produk yang disukai pengguna dalam layout grid yang bersih.

### 5. Cart & Upsell (Keranjang)
- **Drawer System**: Keranjang muncul dari samping (Right-side drawer).
- **Upsell Feature**: Rekomendasi "Discovery Set" di dalam keranjang untuk meningkatkan nilai transaksi.
- **Gift Options**: Opsi bungkus kado signature dan penulisan catatan kustom.

---

## 📁 Struktur Folder Modular

- `/src/components/`
  - `Navbar.jsx`: Navigasi, Search, & Cart Badge.
  - `Home.jsx`: Hero & Mood Collections.
  - `Catalog.jsx`: Logic Filter, Search Results, & Grid Produk.
  - `ProductDetail.jsx`: PDP Logic & Varian Harga.
  - `CartDrawer.jsx`: Cart management & Upsell logic.
  - `About.jsx`: Halaman filosofi brand.
  - `Footer.jsx`: Informasi brand & Newsletter.
- `App.jsx`: Central state management (Cart, Wishlist, Navigation).

---

*Desain ini dibuat dengan fokus pada estetika minimalis dan konversi pengguna yang tinggi.*
