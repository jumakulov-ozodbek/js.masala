function changeOrder(s, index) {
    return index.map(i => s[i]).join("");
  }
  
  let s = "acb";
  let newS = changeOrder(s, [1, 2, 0]);
  console.log(newS); 
  








