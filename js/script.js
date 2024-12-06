// function changeOrder(s, index) {
//     return index.map(i => s[i]).join("");
//   }
  
//   let s = "acb";
//   let son = changeOrder(s, [1, 2, 0]);
//   console.log(son); 
  // function changeOrder(s, index) {
  //   return index.map(i => s[i]).join("");
  // }
  
  // let s = "acb";
  // let son = changeOrder(s, [2, 2, 0 ]);
  // // // console.log(son);
  // function changeOrder(s, index) {
  //   return index.map(i => s[i]).join("");
  // }
  
  // let s = "acb";
  // let son = changeOrder(s, [0,1,2]);
  // console.log(son);
//   function splitCharactersAndNumbers(input) {
//     const letters = [];
//     const numbers = [];

//     for (const char of input) {
//         if (!isNaN(char) && char !== ' ') {
//             numbers.push(char);
//         } else if (/[a-zA-Z]/.test(char)) {
//             letters.push(char);
//         }
//     } 
//     return {
//         letters: letters.join(''),
//         numbers: numbers.join('')
//     };
// }
// const input = "a1b2c3d8d4";
// const result = splitCharactersAndNumbers(input);

// console.log("Raqamlar:", result.numbers);
// function repeatText(text,times) {

// let repeatedText = ""; 


// for (let i = 0; i < times; i++) {
//     repeatedText += text; 
// }
// return repeatedText;
// }
// const result = repeatText("abc",3);
// // console.log(result);  



// function findLongestWord(find) {
//   const word = find.split(' '); 
//   let longestWord = ""; 
//   for (let i = 0; i < words.length; i++) {
//       if (word[i].length > longestWord.length) { 
//           longestWord = word[i]; 
//       }
//   }
//   return longestWord; 
// }
// const str = "Hello amazing world";
// const longestWord = findLongestWord(str);

// console.log( longestWord); 


// const countCharacters = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//   for(let j = i + 0; j < str.length; j++) {
//     if (str[i] === str[j]) {
//       count++;
//     }
//   }
//   if( str.indexOf(str[i])===i) {
//     console.log(`${str[i]}:${count}`);
    
// }
//   } 
// }
// console.log(countCharacters("aabbbcc"));

//  mahsulot quwb berdi
// const arr = ['olma', 'anor', 'qovun'];
// arr.push('tarvuz');
// console.log(arr);
 
// const arr = ['olma', 'anor', 'qovun'];
// arr.pop('tarvuz');
// console.log(arr);

// const fruits = ['olma', 'anor', 'qovun', 'tarvuz','apelsin'];
//  fruits.push('banana');
// console.log(fruits);
 
// const  data =['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
// data.pop();
// console.log(data);
//  const nom =['','olma', 'anor', 'qovun', 'tarvuz','apelsin'];
//  nom.push('');
//  console.log(nom);
 
// const arr = ['olma', 'anor', 'qovun'];
// arr.unshift('tarvuz');
// console.log(arr);

//  const fruits = ['olma', 'anor', 'qovun', 'tarvuz','apelsin'];
//   fruits.shift('olma');
//  console.log(fruits);


// kofiWidgetOverlay.draw("mohamedghulam", {
//   type: "floating-chat",
//   "floating-chat.donateButton.text": "Support me",
//   "floating-chat.donateButton.background-color": "#323842",
//   "floating-chat.donateButton.text-color": "#fff"
// });
// const fruits=['Mandarin','Apelsin','Limon','Tarvuz','Riot','Energy'];
// fruits.sort();
// console.log(fruits);
// const  team= [
//   {
//     name:"RealMadrid",
//     country:"Madrid",
//     score:80,
//   }
// ];
//   team.push({
//     name1:"Barselona",
//     country:"ispaniya",
//     score:110,
//   })
//   team.push({
//     name2:"Liverpool",
//     country:"Britaniya",
//   score:150,
//   })

// team.sort((r,b)=>b.score - r.score)
// console.log(`$name:${team[0].name} $country:${team[0].country} $score:${team[0].score}`);




// const quarter=[
// {
//   student:"Muhiddin",
//  score:50,
// },
// {
//   student:"Muhammad",
//  score:40,
// },
// {
//   student:"Sarvar",
//  score:80,
// },
// {
//   student:"Husan",
//  score:20,
// },
// ]
// console.log(quarter.sort((a,b)=>b.price-a.price));
// const team=[
//   {
//     name:"RealMadrid",
//     country:"Madrid",
//     score:180,
//   },
//   {
//     name:"Barselona",
//     country:"ispaniya",
//     score:110,
//   },
//   {
//     name:"Liverpool",
//     country:"Britaniya",
//     score:150,
//   },
// ]

// console.log(team.sort((a,b)=>b.score-a.score));


// const market=[
//   {
//     name:"Mandarin",
//     price:50,
//     quantity:5,
//   },
//   {
//     name:"Apelsin",
//     price:40,
//     quantity:5,
//   },
//   {
//     name:"Limon",
//     price:80,
//     quantity:20,
//   },
// ];
// let total=0;
// market.forEach((item)=>{
//   total+=item.price*item.quantity;
// })
// console.log("savatning narxi:",total,"som");
// const budget=20000;

// if(total<=budget){
//   console.log("Savatga qo'shildi.");
// }else{
//   console.log("Savatda qo'shilmadi.");
// }
// console.log("xaridor olgan muhsulotlar:",market);

// const bus=[
//   {
//     enterned:5,
//     exited:4,
//   },
//   {
//     enterned:12,
//     exited:7,
//   },
//   {
//     enterned:14,
//     exited:10,
//   },
  
// ]
// let total=0;
// bus.forEach((item)=>{
//   total+=item.enterned-item.exited;
// })


// const stops=[
//   {
//     entered:5,
//     exited:2,
//   },
//   {
//     entered:8,
//     exited:3,
//   },
//   {
//     entered:10,
//     exited:4,
//   },
// ]
// stops.forEach((stop,index)=>{
//   console.log(`${index+1}-bekatda chiqqan yo'lovchilar soni:${stop.exited}`);
// })
  

//  const employees = [
//   {
//      name: "Atham",
//     dailySalary: 50,
//     workingDays: 22,
//     bonuses: 100,
//     deductions: 50 
//       },
//     {
//        name: "Bonur",
//       dailySalary: 40,
//       workingDays: 20, 
//       bonuses: 50,
//       deductions: 30
//      },
//     { 
//       name: "Bekzod", 
//       dailySalary: 60,
//       workingDays: 25,
//       bonuses: 150,
//       deductions: 10,
//      },
// ];

// employees.forEach(employee => {
//   const monthlySalary = (employee.dailySalary * employee.workingDays) + employee.bonuses - employee.deductions;
//   console.log(`${employee.name}ning oylik maoshi (bonus va chegirmalar bilan): ${monthlySalary} USD`);
// });
// const market=[
//   {
//     apple:"olma",
//     price:"1200",
//     discount:"10%",
//   },
//   {
//     pear:"nok",
//     price:"1300",
//     discount:"10%",
//   },
//   {
//     grapes:"uzum",
//     price:"1400",
//     discount:"10%",
//   },
//   {
//     banana:"banan",
//     price:"1500",
//     discount:"10%",
//   },
//   {
//     mandarin:"mandarin",
//     price:"1600",
//     discount:"10%",
//   },
// ]

// market.forEach(item=>{
//   const price = parseFloat(item.price);
//   const discount = parseFloat(item.discount);
//   const discountPrice = price - (price * (discount / 100));
//   console.log(`${Object.values(item)[0]}--ning chegirmali narxi: ${discountPrice} so'm`);
// });

//  const movies = [
//   {
//     name: "Uyda yolgiz1",
//     ticketPrice: 18, 
//     showDuration: 30, 
//     sessionsPerDay: 5,
//     totalViewers: 0 
//   },
//   {
//     name: "Uyda yolgiz2",
//     ticketPrice: 20,
//     totalViewers: 12000,
//     showDuration: 45,
//     sessionsPerDay: 6
//   },
//   {
//     name: "Uyda yolgiz3",
//     ticketPrice: 10,
//     totalViewers: 7000,
//     showDuration: 40,
//     sessionsPerDay: 4
//   }
// ];
// let totalRevenue = 0;

// movies.forEach(movie => {
//   const dailyViewers = movie.totalViewers / movie.sessionsPerDay; 
//   const sessionRevenue = movie.ticketPrice * dailyViewers; 
//   const movieRevenue = sessionRevenue * movie.sessionsPerDay;

//   totalRevenue += movieRevenue;

// });

// console.log(`Umumiy daromad: ${totalRevenue}so'm`);
//  const basket =[
//   {
//     fruits:"olma",
//     price:{
//       kg:1200,
//       someonePrice:2000,
//     }
//   },
//   {
//     fruits:"olma",
//     price:{
//       kg:1200,
//       someonePrice:2000,
//     }
//   },
//   {
//     vegetables:"sabzi",
//     price:{
//       kg:1000,
//       someonePrice:5000,
//     }
//   },
//   {
//     fruits:"olma",
//     price:{
//       kg:1200,
//       someonePrice:2000,
//     }
//   },
// ]
// basket.forEach(item=>{
//   const price = parseFloat(item.price.kg);
//   const discount = parseFloat(item.price.someonePrice);
//   const discountPrice = price - (price * (discount / 100));
//   console.log(`${Object.values(item)[0]}--ning chegirmali narxi: ${discountPrice} so'm`);
// })

const savat = {
  olma: { 
    narx: 5000, 
    soni: 2 
  },
  banan: {
     narx: 3000,
      soni: 3 
    },
  apelsin: {
     narx: 4000,
     soni: 1
     },
};

function umumiyNarx(savat) {
  let total = 0;
  for (let mahsulot in savat) {
    total += savat[mahsulot].narx * savat[mahsulot].soni;
  }
  return total;
}


























