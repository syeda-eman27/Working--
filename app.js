
// function calculateSquareArea(side) {
//     const area = side * side;
//     return area;
// }
// const sideLength = 4;
// const area = calculateSquareArea(sideLength);
// document.write(`The area of the square with side length ${sideLength} is: ${area}`);


// let x = 0;
// let result =0 ;
// var input = document.querySelector('input');
// let h2 = document.querySelector('h2')
// input.addEventListener('input', function() {
//     result = this.value * this.value;
//     if( x = result){
//         h2.style.color = "green";
//     }else{
//        h2.style.color="black" 
//     }
//     h2.innerHTML = x;
    
// })

//even or odd

let x = 0;
let result = 0;
var input = document.querySelector('input');
let h2 = document.querySelector('h2')
input.addEventListener('input', function() {
    result = this.value % 2;
    if(result == 0){
        h2.style.color = "green";
    }else{
        h2.style.color = "red";
    }
    h2.innerHTML = result;
})
