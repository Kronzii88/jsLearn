// fuction merupakan prosedur/method di javascript yang berisi kumpulan statement untuk melakukan tugas untuk mengurangi pengulangan kode yang sama

//---------------------------------- Funtion Declaration ---------------------------------------------------
// function declaration/statement/definition dapat dipanggil walaupun deklarasinya dibawah pemanggilnya
// decLa(5,4)
// function decLa(a, b){
//     return a + b;
// }
//----------------------------------------------------------------------------------------------------------


//---------------------------------- Funtion Expression ----------------------------------------------------
// function expression menggunakan variable sebagai functionnya dan kita tidak bisa memanggil function diatas funtionnya sendiri
// const expR = function(c,d) {
//  return c * d
// }
// expR(5,6)
//----------------------------------------------------------------------------------------------------------

//--------------------------------------- Arrow Function ---------------------------------------------------
// arrow function kependekan dari function expression dan cocok sebagai method bukan sebagai constructor
// const arwFunc = () => {console.log("hello world")}
// arwFunc() 
//----------------------------------------------------------------------------------------------------------

//----------------------------------- Function rest parameter ----------------------------------------------
// rest parameter digunakan untuk mengubah bentuk parameter terakhir menjadi array
// const restParam  = (...number) => {
//     console.log(number)
//     return number.reduce((acc,curr) => acc+curr,0)
// }
// console.log(restParam(1,2,3,4,5,6));


//----------------------------------------------------------------------------------------------------------