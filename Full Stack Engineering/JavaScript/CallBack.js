let value = 1;

const doSomething = (() => {
  value = 2;
});
doSomething()
console.log(value);
