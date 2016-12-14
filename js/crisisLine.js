/*
This program has all Wisconsin's Crisis Lines by county stored in an array.
It determines the message displayed once the user enters in the county the are in.

The program below it asks the user questions regarding their current mental health.
The user's answers determine if the user is asked to enter their county (it will then
run the program explained above) or it will display phone numbers and contact information
they can contact if they are in need of help.

Written by: Julia Klimeck
*/

function determineCounty(){

  //declare variables 
  var userCounty = "";
  var crisisLine = "";
  
  //prompt for county
  userCounty = prompt("What county do you live in?");
  //massive array with crisis line numbers alphabetically by county:
  var crisisNumbers = ["608-339-3304", "866-317-9362", "888-552-6642", "866-317-9362", "920-436-8888", "608-685-4433",
                       "888-636-6655", "920-849-9317 or 920-832-4646", "888-552-6642", "800-863-3560 or 715-743-3400", 
                       "608-742-5344", "608-326-0241", "608-280-2600", "920-386-3500", "920-746-2588", "715-395-1304 (during business hours) or 715-392-8216 (after hours)",
                       "888-552-6642", "888-552-6642", "866-317-9362 or 715-528-3346", "920-929-3535", "888-299-1188",
                       "800-362-5717 or 608-723-2157", "608-328-9393", "920-294-4070", "608-935-2776 (during business hours) or 800-362-5717 (after hours)",
                       "866-317-9362 or 715-561-3800", "800-362-8255", "920-674-3105", "608-847-2400 (during business hours) or 608-847-6161 (after hours)",
                       "262-657-7188 or 800-236-7188", "920-388-3100", "608-784-4357", "608-776-4848", "715-845-4326 or 800-799-1022", 
                       "715-845-4326 or 800-799-1022", "920-683-4230 (during business hours) or 920-323-2448 (after hours)",
                       "715-845-4326 or 800-799-1022", "715-732-7760", "608-297-2115", "715-799-3861", "414-257-7222", 
                       "608-296-2117", "920-834-7000 (during business hours) or 920-846-3444 (after hours)", 
                       "888-299-1188", "920-832-4646 or 800-719-4418", "262-689-4621", "715-672-8941 (during business hours) or 715-672-5944 (after hours)",
                       "888-552-6642", "888-552-6642", "866-317-9362", "866-317-9362", "262-638-7720", "888-552-6642",
                       "608-757-5025", "888-636-6655", "888-552-6642", "608-355-4200 (during business hours) or 800-533-5692 (after hours)",
                       "715-634-4806 (during business hours) or 715-634-5213 (after hours)", "715-526-3240 or 888-238-3253",
                       "920-459-3151", "715-748-3332", "715-538-4351", "608-637-2123", "888-299-1188", "262-741-3200 or 800-365-1587", 
                       "715-468-4747 (during business hours) or 888-552-6642 (after hours)", "262-365-6565", "262-547-3388",
                       "715-258-6300 (during business hours) or 800-719-4418 (after hours)", "800-784-2433 (during business hours) or 800-472-3377 (after hours)",
                       "North: 920-722-7707 or South: 920-233-7707", "North: 715-384-5555 or South: 715-421-2345"];



 
  //assign phone numbers to counties using the array
  if (userCounty === "Adams"){
    crisisLine = crisisNumbers[0];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Ashland"){
    crisisLine = crisisNumbers[1];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Barron"){
    crisisLine = crisisNumbers[2];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Bayfield"){
    crisisLine = crisisNumbers[3];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Brown"){
    crisisLine = crisisNumbers[4];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Buffalo"){
    crisisLine = crisisNumbers[5];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Burnett"){
    crisisLine = crisisNumbers[6];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Calumet"){
    crisisLine = crisisNumbers[7];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Chippewa"){
    crisisLine = crisisNumbers[8];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Clark"){
    crisisLine = crisisNumbers[9];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Columbia"){
    crisisLine = crisisNumbers[10];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Crawford"){
    crisisLine = crisisNumbers[11];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Dane"){
    crisisLine = crisisNumbers[12];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Dodge"){
    crisisLine = crisisNumbers[13];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Door"){
    crisisLine = crisisNumbers[14];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Douglas"){
    crisisLine = crisisNumbers[15];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Dunn"){
    crisisLine = crisisNumbers[16];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Eau Claire"){
    crisisLine = crisisNumbers[17];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Florence"){
    crisisLine = crisisNumbers[18];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Fond du Lac"){
    crisisLine = crisisNumbers[19];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Forest"){
    crisisLine = crisisNumbers[20];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Grant"){
    crisisLine = crisisNumbers[21];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Green"){
    crisisLine = crisisNumbers[22];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Green Lake"){
    crisisLine = crisisNumbers[23];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Iowa"){
    crisisLine = crisisNumbers[24];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Iron"){
    crisisLine = crisisNumbers[25];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Jackson"){
    crisisLine = crisisNumbers[26];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Jefferson"){
    crisisLine = crisisNumbers[27];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Juneau"){
    crisisLine = crisisNumbers[28];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Kenosha"){
    crisisLine = crisisNumbers[29];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Kewaunee"){
    crisisLine = crisisNumbers[30];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "La Crosse"){
    crisisLine = crisisNumbers[31];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Lafayette"){
    crisisLine = crisisNumbers[32];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Langlade"){
    crisisLine = crisisNumbers[33];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Lincoln"){
    crisisLine = crisisNumbers[34];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Manitowoc"){
    crisisLine = crisisNumbers[35];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Marathon"){
    crisisLine = crisisNumbers[36];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Marinette"){
    crisisLine = crisisNumbers[37];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Marquette"){
    crisisLine = crisisNumbers[38];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Menomoniee"){
    crisisLine = crisisNumbers[39];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Milwaukee"){
    crisisLine = crisisNumbers[40];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Monroe"){
    crisisLine = crisisNumbers[41];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Oconto"){
    crisisLine = crisisNumbers[42];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Oneida"){
    crisisLine = crisisNumbers[43];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Outagamie"){
    crisisLine = crisisNumbers[44];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Ozaukee"){
    crisisLine = crisisNumbers[45];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Pepin"){
    crisisLine = crisisNumbers[46];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Pierce"){
    crisisLine = crisisNumbers[47];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Polk"){
    crisisLine = crisisNumbers[48];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Portage"){
    crisisLine = crisisNumbers[49];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Price"){
    crisisLine = crisisNumbers[50];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Racine"){
    crisisLine = crisisNumbers[51];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Richland"){
    crisisLine = crisisNumbers[52];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Rock"){
    crisisLine = crisisNumbers[53];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Rusk"){
    crisisLine = crisisNumbers[54];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "St. Croix"){
    crisisLine = crisisNumbers[55];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Sauk"){
    crisisLine = crisisNumbers[56];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Sawyer"){
    crisisLine = crisisNumbers[57];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Shawano"){
    crisisLine = crisisNumbers[58];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Sheboygan"){
    crisisLine = crisisNumbers[59];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Taylor"){
    crisisLine = crisisNumbers[60];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Trempealeau"){
    crisisLine = crisisNumbers[61];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Vernon"){
    crisisLine = crisisNumbers[62];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Vilas"){
    crisisLine = crisisNumbers[63];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Walworth"){
    crisisLine = crisisNumbers[64];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Washburn"){
    crisisLine = crisisNumbers[65];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Washington"){
    crisisLine = crisisNumbers[66];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Waukesha"){
    crisisLine = crisisNumbers[67];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Waupaca"){
    crisisLine = crisisNumbers[68];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Waushara"){
    crisisLine = crisisNumbers[69];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Winnebago"){
    crisisLine = crisisNumbers[70];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else if (userCounty === "Wood"){
    crisisLine = crisisNumbers[71];
    alert("You live in " + userCounty + " County. \nCall " + crisisLine + " for help.");
  }else{
    alert("You entered: \"" + userCounty + "\". Please enter a county name. \nExample: \"Fond du Lac\", \"La Crosse\" or \"Chippewa\"");
  }
}
  
  //end determineCounty function and start main function
  
function main(){

  //variables in main function
  var answer1 = "";
  var answer2 = "";
  

  //prompt for user input
  answer1 = prompt("Are you struggling with your mental health right now? Please enter \"y\" or \"n\"");
  //calculate the result
  if (answer1 === "y") {
    answer2 = prompt("Are you having thoughts of suicide? Please enter \"y\" or \"n\"");
    if (answer2 === "y"){
      determineCounty();
    }else if (answer2 === "n"){
      //provide number for warmline/text line
      alert("You can contact: \nSolstice Warmline: 608-244-5077 \nHopeline: 741741 (text to talk) \nUS Veterans Help Line: 800-273-8255 \nTheses lines are available 24/7");
    }else{
      //message to have user enter a valid answer
      alert("You entered: \"" + answer2 + "\". Please enter \"y\" or \"n\"");
    }
  }else if (answer1 === "n"){
    //provide information for if they are ever needing help
    alert("If you ever need help regarding your mental health this will provide the appropriate number to call. \nThank You");
  }else{
    //message to have user enter a valid answer
    alert("You entered: \"" + answer1 + "\". Please enter \"y\" or \"n\"");
  }

}

  