## Materi 1: Dasar-Dasar HTML
### Struktur Dasar HTML
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Halaman Pertamaku</title>
</head>
<body>
    <h1>Selamat Datang di Dunia Web!</h1>
    <p>Ini adalah paragraf pertamaku.</p>
</body>
</html>
```

### Penjelasan Struktur:
- `<!DOCTYPE html>`: Deklarasi tipe dokumen HTML5
- `<html>`: Elemen root dokumen HTML
- `<head>`: Berisi metadata dokumen
- `<body>`: Konten utama halaman web

## Materi 2: Pengenalan Tailwind CSS
### Instalasi via CDN
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="bg-blue-500 text-white p-4 rounded-lg">
        Ini adalah kontainer dengan Tailwind CSS
    </div>
</body>
</html>
```

### Contoh Utility Classes Tailwind:
- `bg-blue-500`: Background biru
- `text-white`: Teks berwarna putih
- `p-4`: Padding 1rem (16px)
- `rounded-lg`: Border radius besar

## Materi 3: Komponen Flowbite
### Contoh Tombol dan Card
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"  rel="stylesheet" />
</head>
<body class="p-4">
    <!-- Tombol -->
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        Klik Saya
    </button>

    <!-- Card -->
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="Gambar Card" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Judul Kartu Contoh
            </h5>
            <p class="mb-3 font-normal text-gray-700">
                Deskripsi singkat untuk card Flowbite.
            </p>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
</body>
</html>
```

## Tugas Praktik

### Tugas 1: Membuat Halaman Profil Sederhana
1. Gunakan struktur HTML dasar
2. Tambahkan foto profil
3. Buat section dengan informasi pribadi
4. Gunakan Tailwind untuk styling
5. Gunakan minimal 3 komponen Flowbite

### Tugas 2: Buat Landing Page Produk
1. Gunakan Flowbite card untuk menampilkan produk
2. Buat navbar dengan Tailwind
3. Tambahkan tombol dengan efek hover
4. Gunakan responsive design

### Resources Tambahan
- [Dokumentasi HTML w3schools](https://www.w3schools.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Flowbite Components](https://flowbite.com/docs)

## Tips Belajar
- Praktik lebih banyak daripada teori
- Gunakan live server extension
- Buat proyek mini untuk meningkatkan kemampuan

## Peringatan
🚨 Selalu perhatikan:
- Menulis kode bersih dan terstruktur
- Memahami konsep, bukan sekadar copy-paste
- Selalu update pengetahuan teknologi web

## Tantangan Akhir
Buatlah satu halaman web responsif yang menampilkan:
- Navbar
- Hero section
- 3 card produk
- Footer
- Gunakan kombinasi HTML, Tailwind, dan Flowbite

Selamat Belajar! 🎉
