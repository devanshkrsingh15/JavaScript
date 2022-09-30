function printStar(n) {
  for (let i = 0; i < n; i++) {
    var s = "";
    for (let j = 0; j < i; j++) {
      s = s + "*";
    }
    console.log(s);
  }
}

//arrow function
const introduce = (name) => {
  console.log(`Hi, my name is ${name}. How are you doing? `);
};

//printStar(10);
introduce("Devansh");
function add10(a) {
  return a + 10;
}

const a = () => {
  return a + 10;
};

const adash = () => a + 10;
