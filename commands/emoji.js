var request =  require('request');
var cheerio = require('cheerio');

exports.run = (client, message, args) => {
request.post({
      url:     'http://emojilator.com/',
      form:    { text: suffix }
    }, function(error, response, body){
      $ = cheerio.load(body.toString());
      text = $('#textfield2').val();

      //replace all number emojis
      text = text.split('0️⃣').join(':zero:'); //
      text = text.split('1️⃣').join(':one:'); //
      text = text.split('2️⃣').join(':two:'); //
      text = text.split('3️⃣').join(':three:'); //
      text = text.split('4️⃣').join(':four:'); //
      text = text.split('5️⃣').join(':five:'); //
      text = text.split('6️⃣').join(':six:'); //
      text = text.split('7️⃣').join(':seven:'); //
      text = text.split('8️⃣').join(':eight:'); //
      text = text.split('9️⃣').join(':nine:'); //

      /// Replace Alphabet
      var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

message.channel.send(text);

}
