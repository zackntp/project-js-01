// control statement (condition/selection) Ep.2
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 3. if-else-if
let score = 80
if (score >= 80){
    console.log("grade A");
}else if (score >= 70){
    console.log("grade B");
}else if (score >= 60){
    console.log("grade C");
}else if (score >=50) {        
    console.log("grade D");
}else{
    console.log("grade F");
}


// 4. switch-case

let busno = 27 
switch (busno) {
    case 3:
        console.log("สนามหลวง");
        break;
    case 84:
        console.log("วงเวียนใหญ่");
        break;  
    case 57:
        console.log("ปื่นเกล้า");
        break;
    case 28:
        console.log("หมอชิต");
        break;
    default:
        console.log("ไม่มีข้อมูล");
        break;
}
