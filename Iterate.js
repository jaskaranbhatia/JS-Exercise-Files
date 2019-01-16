//Iterate over a Map
var john = {
    name : 'John',
    age : 24,
    isActive : true
}

var marry = {
    name : 'Marry',
    age : 23,
    isActive : true
}

var sam = {
    name : 'Sam',
    age : 29,
    isActive : false
}

let users = new Map();
//First john is key while Second john is the object
users.set('john',john);
users.set('marry',marry);
users.set('sam',sam);
//Remember Maps are iteratable

//For keys
for(const key of users.keys()){
    console.log(key);
}

//For value
for(const value of users.values()){
    console.log(value);
}
