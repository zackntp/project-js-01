// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
    let aa = "aaa";
    let bb = 'bbb';
    let cc = `ccc ${10 * 5}`;
    console.log(aa,bb,cc);

// number

 let dd =111;
 let ee = 22.33;
 console.log(dd,ee);
 console.log(`${dd} ${ee}`);


// boolean
let ff = true;
let gg = false;
console.log(ff,gg);



// object

let Student = {
    Id : 13171,
    Name: "Hello world",
    Age: 14
}
console.log(Student);
console.log(`Id:${Student.Id}  Name:${Student.Name}  Age:${Student.Age}`);
 
// array

let ii = [10,20,30,40];
console.log(ii);
console.log(ii[0]);
console.log(ii[1]);
// undefined
let jj;
console.log(jj) 

// null

let ll = null
console.log(ll);


// type checking การตรวจสอบชนิดข้อมูล  
console.log(typeof jj);
console.log(typeof ll);
console.log(typeof ii);