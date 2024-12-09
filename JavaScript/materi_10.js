// Switch Case
// Kegunaan: Menentukan nilai variabel berdasarkan kondisi yang cocok
// Berguna untuk menggantikan multiple if-else statements yang kompleks

let hari = 3;
let namaHari;

// Switch statement memeriksa nilai variabel 'hari'
switch (hari) {
    // Setiap 'case' mewakili nilai yang mungkin dari 'hari'
    case 1:
        namaHari = "Senin";
        break; // 'break' menghentikan eksekusi switch setelah kondisi terpenuhi
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    // 'default' dijalankan jika tidak ada 'case' yang cocok
    default:
        namaHari = "Hari tidak valid";
}

// Menampilkan hasil
console.log(namaHari);

// Keuntungan menggunakan switch:
// 1. Lebih mudah dibaca untuk banyak kondisi
// 2. Performa lebih baik untuk banyak kasus dibanding if-else
// 3. Cocok untuk menu atau pilihan yang terbatas
