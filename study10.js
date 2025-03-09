// control statement (loop/iteration/repetition) Ep.2
// Break and Continue ใน loop
//------------------------------
// 1. break in loop
let aa = 1 
while (aa <= 5){

    if(aa == 3){
        break;
    }
    console.log(aa,'hello...');
    aa++;
}


// 2. continue in loop
let bb = 1 
while (bb <= 5){
    if(bb == 3){
        bb++;
        continue;
    }
    console.log(bb,'hi...');
    bb++
}
  