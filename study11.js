// control statement (loop/iteration/repetition) Ep.3
// ทำงานเดิมๆซ้ำ
//------------------------------
// forEach
let aa  = [10,20,30,40,50]
console.log(aa[0] * 10)
console.log(aa[1] * 10)
console.log(aa[2] * 10)
console.log(aa[3] * 10)
console.log(aa[4] * 10)
aa.forEach((item) => {
    console.log(item * 10)
});

let bb = ['สมชาย','สมหญิง','สมหมาย']
console.log(`สวัสดี ${bb[0]}`)
console.log(`สวัสดี ${bb[1]}`)
console.log(`สวัสดี ${bb[2]}`)
console.log('สวัสดี ',bb[0])
bb.forEach((item) =>{
    console.log(`สวัสดี ${item}`)
})
// for..in
let cc = {
    fullname : 'สมชาย ใจดี',
    age : 20,
    score:[10,20,30],
    address:{
        no:'10/152',
        street:'เพชรเกษม',
        province:'กทม.'
    }
}
   console.log(cc.fullname)
   console.log(cc.age)
   console.log(cc.score[1])
   console.log(cc.address.street)
   

for ( keyname in cc){
    console.log(keyname)
    console.log(cc[keyname])
}

// for..of
let dd =  ['สมชาย','สมหญิง','สมหมาย']

for (item of dd){
    console.log(`สวัสดี ${item}`)
}