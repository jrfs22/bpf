// const dataPengguna = [
//     {
//         nama: 'Jhon Doe',
//         email: 'jhondoe@example.com',
//         alamat: 'Jalan raya No. 123, Kota Jakarta'
//     },
//     {
//         nama: 'Jane Doe',
//         email: 'jhondoe@example.com',
//         alamat: 'Jalan raya No. 123, Kota Jakarta'
//     }
// ]

// const tabelPengguna = document.getElementById('tabel-pengguna')
// const tbody = tabelPengguna.querySelector('tbody')

// dataPengguna.forEach(function(pengguna){
//     const tr = document.createElement('tr')

//     const tdNama = document.createElement('td')
//     tdNama.textContent = pengguna.nama
//     tr.appendChild(tdNama)

//     const tdEmail = document.createElement('td')
//     tdEmail.textContent = pengguna.email
//     tr.appendChild(tdEmail)

//     const tdAlamat = document.createElement('td')
//     tdAlamat.textContent = pengguna.alamat
//     tr.appendChild(tdAlamat)

//     tbody.appendChild(tr)
// })


const dataPengguna = [
    {nama: 'Andi', umur: 25, alamat: 'Jakarta'},
    {nama: 'Budi', umur: 30, alamat: 'Bandung'},
    {nama: 'Cindy', umur: 28, alamat: 'Surabaya'},
    {nama: 'Dedi', umur: 32, alamat: 'Makassar'},
    {nama: 'Eka', umur: 27, alamat: 'Medan'},
]

const tabelPengguna = document.getElementById('table-pengguna')
const tbody = tabelPengguna.querySelector('tbody')

dataPengguna.forEach(function(pengguna){
    const tr = document.createElement('tr')

    const tdNama = document.createElement('td')
    tdNama.textContent = pengguna.nama
    tr.appendChild(tdNama)

    const tdUmur = document.createElement('td')
    tdUmur.textContent = pengguna.umur
    tr.appendChild(tdUmur)

    const tdAlamat = document.createElement('td')
    tdAlamat.textContent = pengguna.alamat
    tr.appendChild(tdAlamat)

    tbody.appendChild(tr)
})


