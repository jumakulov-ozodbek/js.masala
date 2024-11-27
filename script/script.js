function changeOrder(s, index) {
    return index.map(i => s[i]).join("");
  }
  
  let s = "acb";
  let son = changeOrder(s, [1, 2, 0]);
  console.log(son); 
  








