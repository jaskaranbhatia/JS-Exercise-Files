var nums = [5,3,1,8,9];
//For Loops 
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}

//For_in loop
//Used to iterate over keys of objects
var obj = {
    a : 1,
    b : 2,
    c : 3
}

for(let v in obj){
    console.log(v);
}

//To iterate over an array
let list= ["x","y","z"];
for(let val of list){
    console.log(val);
}

//To iterate over string
for(let ch of "Learning"){
    console.log(ch);
}