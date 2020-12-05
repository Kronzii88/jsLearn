// hasil eksekusi kode berdasarkan waktu proses bukan urutan penulisan kode
// proses eksekusi kode asynchronus tidak menghalangi aplikasi untuk menjalankan kode berikutnya

/* Race Condition terjadi ketika ada satu perintah yang bergantung pada output eksekusi asynchronous sebelumnya. Solusi untuk problem ini yaitu menggunakan teknik callback, promise, generator atau asyc/await */

/* Teknik Asynchronous paling banyak digunakan mengelola komunikasi yang tidak mungkin sinkron atau harus menunggu seperti proses request ajax, operasi file, koneksi ke database, websocket, real time communication seperti pada aplikasi chating dan masih banyak lagi. */

/* Javascript secara default mengeksekusi perintah secara synchronous, kecuali untuk beberapa hal seperti : ajax,websocket, worker, file, database, animasi dan beberapa hal lainya. */

/* Kita tidak bisa membuat proses asynchronous murni. Tapi untuk membuat simulasi iya kita bisa menggunakan fungsi setInternal dan setTimeout */

//konsep asynchronus
console.log("hello")
setTimeout(() => {console.log("javascript")}, 1000)
console.log("coder")

//--------------------------------------- Callback ---------------------------------------------------------
/* callback function adalah function yang diperlakukan sebagai argumen dalam sebuah function*/
/* Callback dapat digunakan untuk proses synchronous maupun asynchronous. Beberapa contoh implementasi callback adalah : Injeksi atau modifikasi hasil eksekusi sebuah function, Event listener, Menangani proses asynchronous */
function main(param1,param2,callBack){ 
    console.log(param1, param2) 
    callBack()  
  }
  
  function myCallback(){ 
    console.log ('hello callback')
  }
  
  main(1,2,myCallback)
//----------------------------------------------------------------------------------------------------------