/*
This program takes the users input and stores it into an array.
That array of information is printed on the webpage in the format of a list.
The list is regarding the user's current natural supports.

written by: Julia Klimeck
*/
function naturalSupports(){
 //variables for loop 
  var supports = [];
  var userSupports = "";
  var supportsloop = true;
  var totalSupports = 0;
  var userMessage = "";
  var userList = "";
 
  //loop until user is finished entering in their natural supports
  while (supportsloop) {
    userSupports = prompt("Enter one of your natural supports, or leave blank to stop.");
    if (userSupports === ""){
      supportsloop = false;
    }else{
      supports.push(userSupports); 
    }
  }
  
  //display the list after calculating the number in the list
  totalSupports = supports.length;
  var userList;
  
  for(var index=0; index < supports.length; index++) {
    userList += supports[index] + "<br>";
  }
  
  userMessage += "<strong>Here is a list of your supports: </strong><br>" + userList;
  
  //display list on the webpage
  document.getElementById("output").innerHTML += userMessage;
  
}
