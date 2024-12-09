// Spread Operator
// Penjelasan: Spread operator (...) digunakan untuk memecah array atau objek
// menjadi elemen-elemen individual.

// Kegunaan:
// 1. Menggabungkan array atau objek
// 2. Membuat salinan array atau objek tanpa referensi
// 3. Menyebarkan elemen array sebagai argumen fungsi
// 4. Mengubah string menjadi array karakter

let angka1 = [1, 2, 3];
let angka2 = [4, 5, 6];

let gabungan = [...angka1, ...angka2];
console.log(gabungan); // Output: [1, 2, 3, 4, 5, 6]

// Contoh lain:
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, ...obj1 };
console.log(obj2); // Output: { c: 3, a: 1, b: 2 }
