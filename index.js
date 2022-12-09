// pertama buat variable terlebih dahulu 
let kartuUtama = [] 
let jumlah = 0
let kartuEl = document.getElementById("kartu-el")
let jumlahEl = document.getElementById("jumlah-el")
let pesanEl = document.getElementById("pesan-el")
let masihHidup = true
let sudahStart = false

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

// membuat function startgame untuk mendeklarasi kartu yang akan dimasukan ke array kartu utama dan membuat variable jumlah

function startGame() {
    let kartuPertama = buarAngkaRandom()
    let kartuKedua = buarAngkaRandom()
    kartuUtama = [kartuPertama, kartuKedua]
    jumlah = kartuPertama + kartuKedua
    // menambahkan if logic supaya hanya bisa sekali click
    if (sudahStart === false) {
        renderGame()
    }
}

// membuat function untuk memanipulasi DOM dan menerapkan logic if untuk elemen pesan dan boolean
function renderGame() {
    kartuEl.textContent = "Kartu: "
    for (let index = 0; index < kartuUtama.length; index++) {
        kartuEl.textContent += kartuUtama[index] + " "
    }
    jumlahEl.textContent = "Jumlah: " + jumlah
    if (jumlah < 21) {
        pesanEl.textContent = "Silahkan draw kartu lagi"
        sudahStart = true
        masihHidup = true
    } else if (jumlah === 21) {
        pesanEl.textContent = "Selamat anda Menang yeay"
        dapetBlackjack = true
    } else {
        pesanEl.textContent = "Maaf anda kalah silahkan coba lagi"
        masihHidup = false
    }
}

// membuat function drawKartuBaru untuk mempush drawKartu ke array kartuUtama 

function drawKartuBaru() {
    let drawKartu = buarAngkaRandom()
    jumlah += drawKartu
    kartuUtama.push(drawKartu)
    // membuat if logic agar hanya bisa draw jika belum kalah
    if (masihHidup === true && sudahStart === true) {
        renderGame()
    }
}
