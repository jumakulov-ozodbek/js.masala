function changeOrder(s, indexes) {
    return indexes.map(i => s[i]).join("");
  }
  
  let s = "acb";
  let newS = changeOrder(s, [1, 2, 0]);
  console.log(newS); 
  








