exports.run = async (client, message, args) => {

const eightballAnswers = ["Very doubtful.", "Concentrate and ask again.", "Signs point to yes.", "You may rely on it."];

const eightBallAnswersIndex = Math.floor(Math.random() * eightballAnswers.length);

if(args = "") {
  const embed = {
    "description": "Are you asking me a question? -_-",
    "footer": {
      "text": "ZeroBot, Powering Zero's Den"
    }
  };
message.channel.send({ embed });
}

if(args > 1)
const embed = {
  "description": eightballAnswers[eightBallAnswersIndex],
  "footer": {
    "text": "ZeroBot, Powering Zero's Den"
  }
};
message.channel.send({ embed });
}

}
