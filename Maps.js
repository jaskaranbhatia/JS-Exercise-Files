//A new data type used in JavaScript --> Maps
//Maps are different from objects although they look similar

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

console.log(users);
console.log(users.size);
console.log(users.get('sam'));