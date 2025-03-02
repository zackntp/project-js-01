// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
var x = 10;
x = x + 5; // x+=5

var y = 10;
y = y + 5; // y+=5


// Nullish Coalescing Operator __??__
let aa = null;
let bb = 100;
console.log(bb ?? 1000)
console.log(aa ?? 888)



// Ternary Conditional Operator __?__:__
let c = 10 < 555 ? "hello" : "goodbye";
console.log(c);

// Spread Operator __...__
let ee = [1, 2, 3, 4, 5];
let ff = [6, 7, 8, 9, 10];
let gg = [...ee, ...ff];
console.log(gg);


