//passing/returning functions
const print = (s) => console.log(s);

const starPrinter = (n, print) => {
  for (let i = 0; i < n; i++) {
    let s = "";
    for (let j = 0; j < i; j++) {
      s = s + "*";
    }
    print(s);
  }
};

starPrinter(10, print);

