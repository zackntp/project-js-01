// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// 2. arrow function การประกาศฟังก์ชันโดยใช้ => (fat arrow)
var aa = () => {
    console.log("hello....")
}

let bb = (data) =>{
    console.log('hi.....',data)
}

let bb111 = data => console.log('hi',data)

const cc = () =>{
    console.log('hey.....')
}
const cc111 = () => console.log('hey.....')


const ee = (n1,n2) =>{
    return n1 * n2
}

const ee111 =(n1,n2) => n1 * n2 
console.log(ee(10,20))

aa()
bb('wow wow wow')
cc()
