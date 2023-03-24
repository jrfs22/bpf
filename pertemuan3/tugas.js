// Membuat kalimat yang mendeteksi jumlah kata
let kata = "Politeknik Caltex Riau"
let cariKata = 'o'
let countFound = 0;

const kalimatSplit = () =>
{
    let removeSpace = kata.split(" ").join('').toLowerCase()
    return removeSpace.split('')
}

for (let i = 0; i < kalimatSplit().length; i++) 
{
    if(kalimatSplit()[i] == cariKata)
    {
        countFound += 1;
    }
}

console.log(kalimatSplit())
console.log(countFound);

