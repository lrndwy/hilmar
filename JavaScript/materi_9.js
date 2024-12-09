// Do-While Loop
// Do-While Loop akan menjalankan blok kode setidaknya satu kali,
// kemudian memeriksa kondisi untuk iterasi selanjutnya.
// Berguna ketika kita ingin kode dijalankan minimal satu kali
// sebelum memeriksa kondisi.

let j = 0; // Inisialisasi variabel penghitung

do {
    console.log("Nomor ke-" + j); // Cetak nomor saat ini
    j++; // Tambahkan penghitung
} while (j < 5); // Lanjutkan loop selama j kurang dari 5

// Kegunaan: Mencetak nomor dari 0 hingga 4,
// memastikan setidaknya satu nomor dicetak
// bahkan jika kondisi awal tidak terpenuhi.
