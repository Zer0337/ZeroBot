exports.run = async (client, message, args) => {

const eightballAnswers = ["Very doubtful.", "Concentrate and ask again.", "Signs point to yes.", "You may rely on it.", "Yes - definitely.", "Yes.", "Cannot predict now.", "Outlook not so good."];

const eightBallAnswersIndex = Math.floor(Math.random() * eightballAnswers.length);

const embed = {
  "description": eightballAnswers[eightBallAnswersIndex],
  "footer": {
    "text": "ZeroBot, Powering Zero's Den"
  }
};
message.channel.send({ embed });

}
