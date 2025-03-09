// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter
function myFunct1(xx,yy = 200,zz = 100){
console.log(xx)
console.log(yy)
console.log(zz)
}

myFunct1(10,20,30);
myFunct1(11,22)
myFunct1(11)
// function for return mulitple value
// return array value
function myFunct2(){
    let aa = [10,20,30]
    return aa
}



// return object value
function myFunct3(){
    let bb = {
        name : 'john',
        age : 30
    }
    return bb
}

let [n1,n2,n3] = myFunct2();
console.log(n1)
let {name,age} = myFunct3();
console.log(name,age)


// use destruction to get value from object and array