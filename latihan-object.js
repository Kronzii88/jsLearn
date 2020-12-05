let myObj = {
    name: "john",
    age: 15,
    hobby: ["makan", "minum", "tidur"]
}

//---------------------------------------- FOR IN --------------------------------------------------------
//forIn digunakan untuk mengambil semua nilai dari object berdasarkan keynya
// for (const key in myObj) {
//     console.log(myObj[key])
// }
//--------------------------------------------------------------------------------------------------------

//------------------------------------- Object Assign ----------------------------------------------------
//object assign bisa digunakan untuk menduplikat object
//object assign juga bisa digunakan untuk menggabungkan 2 object
// const addBirth = Object.assign({},myObj)
// addBirth.birth = "5 May 2000"
// console.log(addBirth)
//--------------------------------------------------------------------------------------------------------

//-------------------------------------- Objecy Keys -----------------------------------------------------
//object keys digunakan untuk mengembalikan key dalam object menjadi sebuah array
//key object menjadi array
// const objKey = Object.keys(myObj)
// console.log(objKey);
//--------------------------------------------------------------------------------------------------------

//--------------------------------------- Object Entries -------------------------------------------------
//object entries mengembalikan key dan value pada object menjadi array,
//hasilnya bisa digunakan dalam perulangan array
// const objEnt = Object.entries(myObj)
// const newAry = objEnt.map((data) => {
//     return `${data} baru`
// })
// console.log(objEnt)
// console.log(newAry)
//--------------------------------------------------------------------------------------------------------

//-------------------------------------- Objecy Values ---------------------------------------------------
//object values mengembalikan value pada object menjadi array
// const objVal = Object.values(myObj);
// console.log(objVal)
//--------------------------------------------------------------------------------------------------------
