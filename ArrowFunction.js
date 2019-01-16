//Old method
function add1(x,y){
    var sum = x + y;
    console.log(sum);
}

add(4,5);

//Arrow Functions
//Method 1 
let add2 = (x,y) => x+y;
//Method 2
let add3 = (x,y) => {
    console.log(x+y);
}
