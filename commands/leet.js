var leet = require("leet");

exports.run = async (client, message, args) => {
message.channel.send(leet.convert(args));
}
