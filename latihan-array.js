const myAry = ["makan", "minum", "tidur", "coding", "netflix", 2, 45, "lima"];

// update data array
// myAry[7] = 5;

// menghapus data array dari belakang
// myAry.pop()

// menghapus data dari depan
// myAry.shift()

// menambah data dalam array
// myAry.push("Nothing")

// // menambah data diawal
// myAry.unshift(45);

// mencari data array (hasil : boolean)
// console.log(myAry.includes(45))

// mengurutkan data array
// myAry.sort();

// membalik data array
// myAry.reverse();

//------------------------------------- FOR EACH -----------------------------------------------------------
// foreach digunakan untuk perulangan data array
// foreach digunakan untuk mengambil satu persatu data dalam array
// myAry.forEach((data) => {
//     console.log(data);
// })
//----------------------------------------------------------------------------------------------------------

//------------------------------------- ARRAY MAP ----------------------------------------------------------
//array map digunakan untuk melakukan perulangan data array
// fungsi map() ini membentuk array baru yang di dapat dari array itu sendiri dan di map() ini sendiri dapat mengembalikan nilai return.
// const newAry = myAry.map((data) => {
//     return `${data} baru`;
// })

// console.log(newAry);
//--------------------------------------------------------------------------------------------------------

//-------------------------------------- ARRAY FILTER ----------------------------------------------------
//array filter digunakan untuk menyaring data array dan menghasilkan data baru seperti array map
// filter data string dari array ang berisi banyak tipe data
// const aryString = (data) => {
//     if (typeof (data) === 'string') {
//         return data;
//     }
// }

//filter data number dari array yang berisi banyak tipe data bisa juga menggunakan myAry.filter(parseInt);

// const newAry = myAry.filter(aryString);

// console.log(newAry);
//--------------------------------------------------------------------------------------------------------

//-------------------------------------- ARRRAY REDUCE ---------------------------------------------------
// array reduce menggunakan accumluator dan current value sebagai argument dan menghasilkan array baru
// nilai dari cuurent number terdapat pada nilai dibelakang ,(koma)
// nilai accumulator ada pada nilai array awal
// const aryNumber = [1,2,3,4,5,6]

// const reduce = aryNumber.reduce((acc,curr) => {
//     console.log(acc , curr)
//     return acc+curr
// },0)
// console.log(aryNumber)
// console.log(reduce)
//--------------------------------------------------------------------------------------------------------