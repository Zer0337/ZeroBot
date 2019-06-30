'use strict'
const ud = require('urban-dictionary')

exports.run = (client, message, args) => {

  var definition = args.toString();
  message.channel.startTyping();
  ud.term(definition, (error, entries, tags, sounds) => {
  if (error) {
    console.error("Error: " + error.message)
    message.channel.send("That word is undefined.")
  } else {
    const embed = {
  "title": "Urban definition for: " + args.toString,
  "description": entries[0].definition,
  "color": 16711684,
  "footer": {
    "text": "ZeroBot, Powering Zero's Den"
  }
};
channel.send({ embed });
    // message.channel.send(entries[0].definition)
  }
})
message.channel.stopTyping();

}
