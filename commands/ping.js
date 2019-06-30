exports.run = (client, message, args) => {
    const m = await message.channel.send("Pinging...");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}
