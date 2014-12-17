var profile = require("./profile");
var topic = process.argv[2];
var users = process.argv.slice(3);
for (var i = 0; i < users.length; i++) {
    profile.get(topic,users[i]);
}