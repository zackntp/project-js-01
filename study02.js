// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var

var aa //Global


// let
let bb //Local

// const

const cc = 30; //Local

aa = 15;
bb = 25;
{
    var wow = 10;
    {
        console.log(wow);
        let wee = 20
        const woo = 30
        console.log(wee);
        console.log(woo);
    }
    {
        // console.log(wee); error
        // console.log(woo)
    }

}