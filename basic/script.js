import Student from "./Student.js";

const my = new Student(
  "Devansh",
  "15 Dec 1999",
  14,
  "168-A",
  "Sadhavana",
  "Delhi",
  "India",
  2000
);

const markup = (Student) => {
  return `
    <div>
      <h3>${Student.name}</h3>
      <ul>
        <li>Date of  Birth: ${Student.dob}</li>
        <li>ID: ${Student.id}</li>
        <li>Stays in: ${Student.address["flatnum"]}, ${Student.address["apartments"]}, ${Student.address["state"]}, ${Student.address["Country"]}  </li>
        <li>Pocket Money: ${Student.pocketMoney} </li>
      </ul>
    </div>
  `;
};

console.log(my.getAge())
my.increasePocketMoney(100000);
const main = document.createElement("main");
main.innerHTML = markup(my);
document.body.appendChild(main);


const arr = [1,"one",true];
arr.push([1,2,3,4])
arr[10] = 70
arr.sort()
console.log(arr);
console.log(arr.length);
