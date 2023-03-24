// Operator LOGIKA AND
// let x = 10
// let y = 5
// if (x>5 && y<10) {
    
// }

// let nama = 'Dio Alif';
// let mantan = 'Tasya';

// if(nama == 'Dio Alif' && mantan == "Tasya")
// {
//     console.log("Lah putus");
// }


// // Operator LOGIKA OR ||
// let makanEnak = true
// let minumanEnak = true
// if(makanEnak || minumanEnak)
// {
//     console.log("Indah nya hidup");
// }

// Operator LOGIKA NOT !
// let logout = true
// let deleteSession = false
// if (logout == true) {
//     if (!deleteSession) {
//         console.log("Logout berhasil dilakukan")
//     }
// }

// Looping FOR
let nama = [
    ["Josep", 20, "Lobak"],
    ["Apip", 18, "Pakning"],
    ["Ibnu", 18, "Pekanbaru"]
]
// for (let i = 0; i <nama.length; i++) {
//     for (let j = 0; j < nama[i].length; j++) {
//         console.log(nama[i][j])
//     }
// }


// Looping while
// let i=0
// let j = 0
// while (i < nama.length) {
//     console.log(nama[i])
//     i++
// }


// Looping do while
// let i = 0
// do {
//     console.log(nama[i])
//     i++
// } while (i < nama.length)


// Properti
// const person = {
//     name: "Josep",
//     age: 20,
//     address: {
//         street: "123 Main St",
//         city: "anytown",
//         state: "CA",
//         zip: "1234"
//     },
//     sayHello: function(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };

// console.log(person.name)
// console.log(person.age)
// console.log(person['address']['city'])

// person.sayHello()


const laptop = {
    merk: "ASUS ROG",
    price: 1000000,
    spek: {
        ssd: "1Tb",
        hdd: "2Tb",
        cpu: "Intel i9 Gen 12"
    },
    detail: function(){
        console.log(`Merk   : ${this.merk}`)
        console.log(`Price  : ${this.price}`)
        console.log(`SSD : ${this['spek']['ssd']}`)
    }
}

laptop.detail()
console.log(`Hdd : ${laptop.spek['hdd']}`)
console.log(`CPU : ${laptop.spek['cpu']}`)
