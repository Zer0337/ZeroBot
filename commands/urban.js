var urban = require("urban");

exports.run = (client, message, args) => {
    var targetWord = args == "" ? urban.random() : urban(args);
					targetWord.first(function(json) {
							if (json) {
								var message = "Urban Dictionary: **" + json.word + "**\n\n" + json.definition;
								if (json.example) {
										message = message + "\n\n__Example__:\n" + json.example;
								}
						    message.channel.send( essage);
							} else {
								message.channel.send("No matches found");
							}
});
}
