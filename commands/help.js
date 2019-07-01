exports.run = async (client, message, args) => {

if(args == "") {
const embed = {
  "title": "Help Message for ZeroBot",
  "description": "Here is a list of commands that you can use to summon ZeroBot.\nTo view more infomation and usage for a command, run .help <command>",
  "color": 11927296,
  "footer": {
    "text": "ZeroBot, Powering Zero's Den"
  },
  "fields": [
    {
      "name": "Fun Commands",
      "value": ".urban [definition]"
    },
    {
      "name": "Misc Commands",
      "value": "None yet :(\nCheck back later!"
    },
    {
      "name": "Music Commands",
      "value": "None yet :(\nCheck back later!"
    }
  ]
};
message.channel.send({ embed });
}

if (args == "urban") {
  message.channel.send("**Usage is:**\n.urban <word/phrase>\n**Examples:**\n.urban yeet\n:warning: The API response time for Urban Dictionary is slow.")
}

}
