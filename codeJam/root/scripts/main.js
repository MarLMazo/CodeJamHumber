window.onload = function() {

  var white = document.getElementById("White");
  var black = document.getElementById("Black");
  var red = document.getElementById("Red");
  var blue = document.getElementById("Blue");
  var green = document.getElementById("Green");
  var purple = document.getElementById("Purple");

  var tshirtImage = document.getElementById("tshirtImage");
  var ColorPick="White";

  var tshirtDesc = document.getElementById("tshirtDesc");
  var tshirtStyle =document.getElementById("tshirtStyle");
  var tshirtSize = document.getElementById("tshirtSize");
  
  
  white.addEventListener("click", getColor);
  black.addEventListener("click", getColor);
  red.addEventListener("click", getColor);
  blue.addEventListener("click", getColor);
  green.addEventListener("click", getColor);
  purple.addEventListener("click", getColor);

  function getColor(){
    ColorPick = this.id;
    tshirtImage.src= "images/tshirt-" + ColorPick + ".png";
    tshirtDesc.innerHTML = tshirtSize.value+" "+tshirtStyle.value+ " " +ColorPick+ " T-shirt";
  }

  tshirtSize.addEventListener("change", getSize);
  tshirtStyle.addEventListener("change",getStyle);

  function getStyle(){
    tshirtDesc.innerHTML = tshirtSize.value+" "+tshirtStyle.value+ " " +ColorPick+ " T-shirt";
  }

  function getSize(){
    tshirtDesc.innerHTML = tshirtSize.value+" "+tshirtStyle.value+ " " +ColorPick+ " T-shirt";
  }
  
  // function whiteshirt(){
  //  tshirtImage.src = "images/tshirt-white.png";
  //  window.ColorPick= "white";
  //  tshirtDesc.innerHTML = "<h2> I dont like this color: " + ColorPick;
  // }
  
  // function blackshirt(){
  //   tshirtImage.src = "images/tshirt-black.png";
  //   window.ColorPick= "black";
  // }
  
  // function redshirt(){
  //   tshirtImage.src = "images/tshirt-red.png";
  //   window.ColorPick= "red"; 
  // }
  
  // function blueshirt(){
  //   tshirtImage.src = "images/tshirt-blue.png";
  //   window.ColorPick= "blue";
  // }

  // function greenshirt(){
  //   tshirtImage.src = "images/tshirt-green.png";
  //   window.ColorPick= "green";
  // }
  
  // function purpleshirt(){
  //   tshirtImage.src = "images/tshirt-purple.png";
  //   window.ColorPick= "purple"; 
  // }

  // var rates = document.getElementsByName('tshirtColor');
  // var rate_value;
  // for(var i = 0; i < rates.length; i++){
  //     if(rates[i].checked){
  //         rate_value = rates[i].value;
  //     }
  // }
  
  // white.onclick = whiteshirt;
  // black.onclick = blackshirt;
  // red.onclick = redshirt;
  // blue.onclick = blueshirt;
  // green.onclick = greenshirt;
  // purple.onclick = purpleshirt;


  // if (white.checked) {
  //   whiteshirt();
  // }
  // else if (black.checked){
  //   blackshirt()
  // }
  // else if (red.checked){
  //   redshirt()
  // }
  // else if (blue.checked){
  //   blueshirt()
  // }
  // else if (green.checked){
  //   greenshirt()
  // }
  // else if (purple.checked){
  //   purpleshirt()
  // }




}