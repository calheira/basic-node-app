//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");

var printer = require("./printer");


function get(topic, username){
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
          printer.printMessage(topic, username, profile.badges.length, profile.points[topic]);
        } catch(error) {
          //Parse Error
          printer.printError(error);
        }
      } else {
        //Status Code Error
        printer.printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  //Connection Error
  request.on("error", printer.printError);
}


module.exports.get = get;












