// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// callback function

function funcA(xx,yy,zz){
    console.log(xx)
    let aa = yy * 10 
    zz(aa)
}

function funcB(nn){
    console.log(nn * 200)
}
funcA(11,22,funcB)
funcA(10,20,(data) =>{
    console.log('wow wow wow')
    console.log('woo woo woo')
    console.log(data)
})