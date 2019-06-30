var urban = require("urban");

exports.run = (client, message, args) => {
    if(args == "") {
	    var target = urban.random();
      message.channel.send(target);
    }
    else {
      var target = urban(args)
      message.channel.send(target);
    }
}
