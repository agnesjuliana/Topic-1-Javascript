//VARIABLE DAN KONSTANTA
console.log("VARIABLE DAN KONSTANTA")
let nama = "sukirman"
let umur = 20
const code = 222 
//Jadi kalau di javascrip tidak perlu ada definisi type data
//definisi constanta tidak bisa dirubah isinya


//OBJECT
console.log("-------------------------------------------------")
console.log("OBJECT")
let nama_siswa = "Agnes Juliana"

//KONSEP OBJECT
console.log("-------------------------------------------------")
console.log("KONSEP OBJECT")
let siswa1 = {
    nama: "Agnes Juliana",
    kelas: "XIR1",
    jurusan: "RPL"
}

//MENAMPILKAN VALUE OBJECT
console.log("-------------------------------------------------")
console.log("MENAMPILKAN VALUE OBJECT")
console.log("Nama SIswa 1                   : "+ siswa1.nama)


//MENGUBAH VALUE
console.log("-------------------------------------------------")
console.log("MENGUBAH VALUE")
siswa1.nama = "SIZUKA"
console.log("Nama Siswa 1 setelah dirubah   : "+ siswa1.nama)

//ARRAY
console.log("-------------------------------------------------")
console.log("ARRAY")
let arrayString = ["Agnes","Belva","Diah"]
let arrayObject = [
    {nama: "Agnes", kelas: "XI"},
    {nama: "Belva", kelas: "XI"}
]

//JUMLAH DATA PADA ARRAY
console.log("-------------------------------------------------")
console.log("JUMLAH DATA PADA ARRAY")
console.log("Jumlah data pada arrayString   : "+arrayString.length)

//MENAMBAHKAN DATA ARRAY STRING
console.log("-------------------------------------------------")
console.log("MENAMBAHKAN DATA ARRAY STRING")
console.log("Isi arrayString sebelum ditambah")
console.log(arrayString)
arrayString.push("Chantika")
console.log("Isi arrayString setelah ditambah")
console.log(arrayString)

//MENAMBAH DATA ARRAY OBJECT
console.log("-------------------------------------------------")
console.log("MENAMBAH DATA ARRAY OBJECT")
console.log("Isi arrayObject sebelum ditambah")
console.log(arrayObject)
arrayObject.push(
    {nama: "Bella", kelas: "XI"}
)
console.log("Isi arrayObject setelah ditambah")
console.log(arrayObject)

//MENGHAPUS DATA ARRAY
console.log("-------------------------------------------------")
console.log("MENGHAPUS DATA ARRAY")
console.log("Isi arrayString sebelum dihapus")
console.log(arrayString)
arrayString.splice(2,1) //2 adalah index yang mau dihapus, 1 adalah banyaknya nilai yang mau dihapus
console.log("Isi arrayString sesudah dihapus")
console.log(arrayString)

//MENAMPILKAN DATA ARRAY OBEJCT
console.log("-------------------------------------------------")
console.log("MENAMPILKAN DATA ARRAY OBEJCT")
arrayObject.map(
    (ray,index)=> {
        console.log(ray.nama + " " + ray.kelas)
    }
)

//PERCABANGAN
console.log("-------------------------------------------------")
console.log("PERCABANGAN")
let nilai = 60
if (nilai<=50){
    console.log("TIDAK LULUS")
}else {
    console.log("SELAMAT ANDA LULUS")
}

//PERULANGAN FOR
console.log("-------------------------------------------------")
console.log("PERULANGAN FOR")
for (let index = 1; index<= 3; index++){
    console.log("Ini contoh perulangan for ke   : "+ index)
}

//PERULANGAN WHILE 
console.log("-------------------------------------------------")
console.log("PERULANGAN WHILE")
let laptop = ["lenovo","asus","acer"]
let i = 0
while (laptop[i]){
    console.log(laptop[i])
    i++
}

//PERULANGAN DO WILE
console.log("-------------------------------------------------")
console.log("PERULANGAN DO WILE")
let a=0
do{
    console.log(laptop[a])
    a++
}while (laptop[a])

//FUNCTION
console.log("-------------------------------------------------")
console.log("FUNCTION")
class persegiPanjang{
    constructor(p,l){
        this.panjang = p
        this.lebar = l
    }

    luas= () =>{
        return this.panjang*this.lebar
    }

    keliling=() =>{
        return 2*(this.panjang+this.lebar)
    }
}

let tanah = new persegiPanjang(5,6)
console.log("INI LUAS TANAH                     : "+tanah.luas())
console.log("INI keliling TANAH                 : "+tanah.keliling())

//PEWARISAN
console.log("-------------------------------------------------")
console.log("PEWARISAN")
class balok extends persegiPanjang{
    constructor(p,l,t){
        super(p,l)
        this.tinggi = t
    }

    luas = () => {
        return (2* this.panjang * this.lebar)+ (2* this.tinggi * this.lebar)+(2* this.panjang * this.tinggi)
    }

    volume = () =>{
        return this.panjang*this.lebar*this.tinggi
    }
}

let kotak = new balok(3,4,6)
console.log("INI LUAS PERMUKAAN BALOK           : "+ kotak.luas())
console.log("INI VOLUME BALOK                   : "+ kotak.volume())



//JSON
console.log("-------------------------------------------------")
console.log("JSON")
console.log(JSON.stringify(arrayObject))


