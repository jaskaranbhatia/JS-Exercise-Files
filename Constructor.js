function person(name,age,hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

var Anil = new person('Anil',12,'Cricket');
console.log(Anil);
