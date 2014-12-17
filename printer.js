//Print out message
function printMessage(topic, username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in " + topic;
  console.log(message);
}

//Print out error messages
function printError(error){
    console.error(error.message);
}


module.exports.printMessage = printMessage;
module.exports.printError = printError;
