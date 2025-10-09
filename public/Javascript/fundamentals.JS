/*
Fundamentals Code
*/
function myfunction(p1, p2)
{
return p1 * p2

}
function initialize() {
  window.alert("Hello World");

  document.getElementById("printhere").innerHTML = "Hello World";

  let x = "20";

  let y = "25";
  document.getElementById("datatypes").innerHTML = parseInt(x) + parseInt(y);

  //booleans and conditions
  x = 5;
  y = 9;

 if (x != y) {
    document.getElementById("Booleans").innerHTML = "Its true"+ x + "!= " + y
  }


  
let my_array = ["item1", "item2", "item3"];
document.getElementById("array").innerHTML = my_array[1];
my_array[0] = "newItem1";
document.getElementById("Changearray").innerHTML = my_array[0];
document.getElementById("fullarray").innerHTML = my_array;
document.getElementById("arraylength").innerHTML = my_array.length;

let text = "";
let i;
for(i = 0; i < 25; i++)
{
text += "the number is " + i + "<br>";

}

document.getElementById("forloop").innerHTML = text;

document.getElementById("myfunction").innerHTML=myfunction(5,4);


}



//functions
function dateTime() {
  document.getElementById("dateTime").innerHTML = Date();
}
