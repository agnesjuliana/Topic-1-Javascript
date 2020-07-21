//PENILAIAN KETERAMPILAN DASAR JAVASCRIPT

//NOMOR 1
hitung_PPN = (p,l) => {
    let harga = p*l*1500000
    let ppn = harga*15/100
    return harga+ppn
}

console.log("SOAL NOMOR 1")
console.log("Nominal yang harus dibayarkan : Rp " +  hitung_PPN(20.5,30))
console.log("----------------------------------------")

//NOMOR 2
let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10},
]

let jumlah = 0

barang.map(
    (bar,index) => {
        jumlah += (bar.harga*bar.jumlah)
    }
)

console.log("SOAL NOMOR 2")
console.log("Total Belanjaan            : Rp "+jumlah)
console.log("----------------------------------------")


//Nomor 3
bmi_grade = (tinggi,berat) => {
    let bmi = berat/tinggi**2

    if (bmi<18.5){
        return "kekurangan berat badan"
    }else if (bmi<=24.9){
        return "Normal"
    }else if (bmi<=29.9){
        return "kelebihan berat badan"
    }else {
        return "Obesitas"
    }
}

console.log("SOAL NOMOR 3")
console.log("Status BMI                 : "+bmi_grade(1.7,90))
console.log("----------------------------------------")


//Nomor 4
deret_geometri = (a,r,n) => {
    for(let index = 2; index<=n; index++){
        a+= (a*r)
    }

    return a
}

console.log("SOAL NOMOR 4")
console.log("JUmlah Deret Geometri      : "+ deret_geometri(4,3,10))
console.log("----------------------------------------")


//Nomor 5
class lingkaran {
    constructor(r){
        this.radius = r
    }

    luas(){
        return 3.14*this.radius**2
    }

    keliling(){
        return 3.14*this.radius*2
    }
}

class bola extends lingkaran{
    volume(){
        return 4/3*this.radius*super.luas()
    }

    luasPermukaan(){
        return 4*super.luas()
    }

}

class kerucut extends lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }

    volume(){
        return 1/3*super.luas()*this.tinggi
    }

    luasSelimut(){
        let s = Math.sqrt(this.radius**2+this.tinggi**2)
        return 3.14*this.radius*s
    }

    luasPermukaan(){
        return super.luas()*this.luasSelimut()
    }
}

class tabung extends lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }

    volume(){
        return super.luas()*this.tinggi
    }

    luasSelimut(){
        return super.keliling()*this.tinggi
    }

    luasPermukaan(){
        return super.luas()+this.luasSelimut()
    }
}

console.log("SOAL NOMOR 5")
let tab = new tabung(7.5,50)
console.log("VOLUME TABUNG          : "+tab.volume())
console.log("LUAS SELIMUT TABUNG    : "+tab.luasSelimut())
console.log("LUAS PERMUKAAN TABUNG  : "+tab.luasPermukaan())

let ker = new kerucut(10,40)
console.log("VOLUME KERUCUT         : "+ker.volume())
console.log("LUAS SELIMUT KERUCUT   : "+ker.luasSelimut())
console.log("LUAS PERMUKAAN KERUCUT : "+ker.luasPermukaan())

let bal = new bola(15)
console.log("VOLUME BOLA            : "+bal.volume())
console.log("LUAS PERMUKAAN BOLA    : "+bal.luasPermukaan())



