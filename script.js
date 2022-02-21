// let a = [2,3,[4,[5,6]]];
// let c = new Map ([['n', 16], ['m', 17], ['k', 18]]);
// let d = {1: 21, bx: 22, cx:[2,5]};

// let b = [
//   {name:'Tema', money: 1000},
//   {name:'Petr', money: 2000},
//   {name:'Iliy', money: 3000},
//   {name:'Denis', money: 4000},
// ];
let names = ['Tema', 'Petr', 'Iliy', 'Denis'];
let money = [1000, 2000, 3000, 4000];
let stuff = [[`Телефон`, `Щетка`],[`Вино`,`Шоколадка`,`Презерватив`]];
let myMoney = 0;

for (let i = 0; i < names.length ; i++) {
  myMoney = myMoney + money[i];
  document.write(`${names[i]} отдал мне ${money[i]}. Теперь у меня: ${myMoney}. <br>`);
};

// for (let i = 0; i < names.length ; i++) {
//   myMoney = myMoney + money[i];
//   document.write(`${names[i]} отдал мне ${money[i]}. Теперь у меня: ${myMoney}. <br>`);
//   item = stuff[i];
//   for (Let i2 = 0;  < item.length ; i2++) {
//     document.write(`${names[i]} отдал мне ${item[i2]}.<br>`);
//   };
// };
// let animals = [
//     { name: 'Vasya', type: 'Cat', age: 4},
//     { name: 'Murka', type: 'Cat', age: 1.5 },
//     { name: 'Varna', type: 'Turtle', age: 21 },
//     { name: 'Kesha', type: 'Parrot', age: 3 },
//     { name: 'Nayda', type: 'Dog', age: 2.5 },
//     { name: 'Pufic', type: 'Humster', age: 2.5 },
//     { name: 'Randy', type: 'dog', age: 12 },
// ];
// document.write('<ol start="0">');
// animals.forEach( animal => {
//   document.write(`<li>${animal.type} <span style="color: #1a55cc">${animal.name}</span>
//            is ${animal.age} years old.</li>`);
// });
// document.write('<ol>');
