// funtion Ep.4
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function expression การประกาศฟังก์ชันโดยใช้ตัวแปร
// 1. anonymous function ฟังก์ชันที่ไม่มีชื่อ

var aa = function(){
    console.log("hello....")
}

let bb = function(data){
    console.log('hi.....',data)
}

const cc = function(){
    console.log('hey.....')
}

const ee = function(n1,n2){
    return n1 * n2
}
console.log(ee(10,20))

aa()
bb('wow wow wow')
cc()
