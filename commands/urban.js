'use strict'
const ud = require('urban-dictionary')

exports.run = (client, message, args) => {
  var definition = args.toString();
  channel.startTyping();
  ud.term(definition, (error, entries, tags, sounds) => {
  if (error) {
    console.error(error.message)
  } else {
    message.channel.send(entries[0].definition)
    channel.stopTyping();
  }
})

}
