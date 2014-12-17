//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");

//Print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

//Print out error messages
function printError(error){
    console.error(error.message);
}

function get(username){
  //Connect to the API URL (http://teamtreehouse.com/username.json)
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
    var body = "";
    //Read the data
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function(){
      if(response.statusCode === 200) {
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          //Parse Error
          printError(error);
        }
      } else {
        //Status Code Error
        printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  //Connection Error
  request.on("error", printError);
}


module.exports.get = get;












