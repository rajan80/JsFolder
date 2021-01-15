//Q1
var n= "Rajan";
console.log(n);
//Q5
Const = 50;
console.log(Const);
//Q6 & 7
var a = 5;
var b = 6;
console.log(a + b);

/* This is a function */
//Q8
alert("Hello World!");

//Q9
function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge(" James", 18);
checkAge("John", 17);

//Q10

let vegitables = ["potato", "LandyFinger", "Cauliflower", "Onion"];
//console.log(vegitables);

for (let i = 0; i < 4; i++) {
  console.log(vegitables[i]);
}
//Q11

let pet = {
  name: "Bullet",
  breed: " pitbull",
};

console.log(pet.name);
//12
let friends = [
  { name: "John", age: 12 },
  { name: "Jones", age: 23 },
  { name: "Beth", age: 19 },
  { name: "Sam", age: 20 },
  { name: "Josh", age: 30 },
];

for (let i = 0; i < friends.length; i++) {
  console.log(i);
  checkAge(friends[i].name, friends[i].age);
}
//Q 14
function getLength(word){
    var n= word.length
    if(n%2==0){
        console.log("The world is nice and even!")
    }else{
        console.log("The world is an odd place!")
    }

}

getLength("right")



