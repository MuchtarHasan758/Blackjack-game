// pertama buat variable terlebih dahulu 
let kartuUtama = [] 
let jumlah = 0
let kartuEl = document.getElementById("kartu-el")
let jumlahEl = document.getElementById("jumlah-el")
let pesanEl = document.getElementById("pesan-el")

// lalu buat function untuk membuat angka random antara 1-13
function buarAngkaRandom() {
    let numberRandom = Math.floor(Math.random()*13) + 1
    // disini saya ubah value 11-13(jack,queen,king) menjadi 10 dan 1(As) menjadi 11
    if (numberRandom > 10) {
        return 10
    } else if (numberRandom <= 1) {
        return 11
    } else {
        return numberRandom
    }
}

console.log(buatAngkaRandom());