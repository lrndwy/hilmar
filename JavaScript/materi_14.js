// Destructuring
// Destructuring adalah cara untuk mengekstrak nilai dari objek atau array
// dan menyimpannya ke dalam variabel terpisah dengan sintaks yang ringkas.

// Kegunaan:
// 1. Menyederhanakan pengambilan nilai dari objek atau array
// 2. Membuat kode lebih mudah dibaca dan dipahami
// 3. Mengurangi pengulangan dalam penulisan kode

let orang = { 
    nama: "Andi", 
    umur: 25 
};

let { nama, umur } = orang;

// Destructuring di atas setara dengan:
// let nama = orang.nama;
// let umur = orang.umur;

console.log(nama);  // Output: Andi
console.log(umur);  // Output: 25

// Destructuring juga bisa digunakan untuk array:
// let [x, y] = [1, 2];
// console.log(x); // Output: 1
// console.log(y); // Output: 2
