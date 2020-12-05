// merupakan part dalam programming untuk mengelola error yang dikeluarkan sehingga program tetap berjalan

//------------------------------------- Try & Catch ------------------------------------------------------
// digunakan untuk mengecek kode apakah menghasilkan error saat dijalankan
// catch block menangkap dan mengelola statement dalam try block yang melempar sebuah exception
// try {
//     console.log(hello);
// } catch (error) {
//     console.log(error)
// } 
//--------------------------------------------------------------------------------------------------------

//----------------------------------------- Finally ------------------------------------------------------
// finally selalu dijalankan setelah try catch block
// const hello = () => {console.log("dijalankan di try");}
// const final = () => {console.log("dijalankan di finnaly");}
// try {
//     hello();
// } catch (error) {
//     console.log("hello tidak ditemukan");
// }finally {
//     final();
// }
//--------------------------------------------------------------------------------------------------------

//------------------------------------------- Throw ------------------------------------------------------
// throw membentuk custom error message yang langsung dilempar dari try ke catch block
// try {
//     throw new Error("lansgung masuk ke catch");
// } catch (error) {
//     console.log(error.message);
// }
//--------------------------------------------------------------------------------------------------------
