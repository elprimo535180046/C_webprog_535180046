function myUniversal() {
    document.querySelector("*").style.backgroundColor = "red";
  }
  function myType() {
    document.querySelector("h1").style.backgroundColor = "blue";
  }
  function myClass() {
    document.querySelector(".container").style.backgroundColor = "yellow";
  }
  function myId() {
    document.querySelector("#logo").style.backgroundColor = "blue";
  }
  function myAttribute() {
    document.querySelector("a[target]").style.backgroundColor = "red";
  }
  function myGroup() {
    document.querySelector("h2, h1").style.backgroundColor = "red";
  }
  function clearAll(){
    document.querySelector("*").style.backgroundColor = "white";
    document.querySelector("h1").style.backgroundColor = "white";
    document.querySelector(".container").style.backgroundColor = "white";
    document.querySelector("#logo").style.backgroundColor = "white";
    document.querySelector("a[target]").style.backgroundColor = "white";
    document.querySelector("h2, h1").style.backgroundColor = "white";
  }