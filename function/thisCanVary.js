function f1() {
  console.log(this === 'string');
}

f1();

const f2 = () => console.log(this === 'object')

f2()