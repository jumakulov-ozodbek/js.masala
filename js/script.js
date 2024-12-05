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
//   price:50,
// },
// {
//   student:"Muhammad",
//   price:40,
// },
// {
//   student:"Sarvar",
//   price:80,
// },
// {
//   student:"Husan",
//   price:20,
// },
// ]
// console.log(quarter.sort((a,b)=>b.price-a.price));
const team=[
  {
    name:"RealMadrid",
    country:"Madrid",
    score:180,
  },
  {
    name:"Barselona",
    country:"ispaniya",
    score:110,
  },
  {
    name:"Liverpool",
    country:"Britaniya",
    score:150,
  },
]

console.log(team.sort((a,b)=>b.score-a.score));


