const multiply = (a,b) => a*b

const f1 = (a,b,c) =>{
    let amb = multiply(a,b)
    return amb + c
};

console.log(f1(2,3,6))