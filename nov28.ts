//q1
function   calculateArea ( length: number, width : number ){
return length * width;

}
 console.log(calculateArea(10,5));


//q2

function calculateVolume (Height : number ,  width : number, depth : number, volume: number){

    return Height * width *depth * volume;
}
console.log(calculateVolume(10,12,23,34));


// with function q3
  
function CheckNumber(num: number) {
    if (num > 0)console.log("postive");
    else if  ( num  <0 )console.log("negative");
    else console.log("zero");
}
    CheckNumber(-8);
   

   

   
//q4
let myinp = 25;
if (myinp % 5 == 0) {
    console.log("It is Even");
}
else {
    console.log("it is odd");
}
   
//q5
 let age = 18
 if( age >18  )
 console.log("person is eligible");
else ( age < 18)

 
    console.log("person is no eligible");

    
       
//q6
       
function calculateExpression() : (number ) {
    return ((10+5)* 3-2) / (4%3) -7 

}
     const result = calculateExpression();

     console.log(result);

