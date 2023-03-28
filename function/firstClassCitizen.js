// literal
function fun1() {
  console.log('hello')
}

// store in a variable
const fun2 = function () { }

// store inside an array
const array = [
  function (a, b) { return a + b },
  fun1,
  fun2
];

console.log(array[0](2, 3))

// store attribute inside object
const obj = {}
obj.speak = function () { return 'Hello' }
console.log(obj.speak())

// function as param
function run(fun) {
  fun()
}

run(function () { console.log('execute') })

// function can return/contain a function
function sum(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

sum(2, 3)(4)
const fivePlus = sum(2, 3)
fivePlus(4)