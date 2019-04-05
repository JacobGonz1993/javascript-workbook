function displayDate() {
    document.getElementById("showDate").innerHTML = Date();
  }
  
  function numToString() {
    const num = document.getElementById("numtostring").value;
    const n = num.toString();
    document.getElementById("string").innerHTML = n;
  }

  function stringToNum() {
      var integer = parseInt(document.getElementById("stringtonum").value);
      //const integer = parseInt(text, 10);
      return document.getElementById("number").value = integer;
  }

  function typeOfData() {
      let value = document.getElementById("data").value;
      let n = typeof value;
      document.getElementById("results").innerHTML = n;
  } 

  function add() {
    var y = document.getElementById("value1").value;
    var z = document.getElementById("value2").value;
    y = parseInt(y,10);
    z = parseInt(z,10);
    var x = y + z;
    document.getElementById("newnum").innerHTML = x;
  }

  function ifBothAreTrue(1,2) {
    if(1 && 2){
      return 'both are true';
    }
  }

  function oneIsTrue(1,2) {
    if(1 || 2){
      return 'one is true';
    }
  }

  function ifBothAreNotTrue(1,2) {
    if(!1 && !2){
      return 'both are not true';
    }
  }