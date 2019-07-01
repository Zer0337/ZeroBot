exports.run = async (client, message, args) => {

const eightballAnswers = ["Very doubtful.", "Concentrate and ask again.", "Signs point to yes.", "You may rely on it."];

const eightBallAnswersIndex = Math.floor(Math.random() * eightballAnswers.length);

const embed = {
  "description": eightBallAnswersIndex,
  "footer": {
    "text": "ZeroBot, Powering Zero's Den"
  }
};
message.channel.send({ embed });

}
