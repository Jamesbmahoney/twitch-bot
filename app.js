require("dotenv").config();
const tmi = require("tmi.js");
const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_PASSWORD,
  },
  channels: ["nomorerandombattles"],
});
client.connect().catch(console.error);
client.on("message", (channel, tags, message, self) => {
  if (self) return;
  console.log(message);
  console.log(tags);
  if (message.toLowerCase() === "!hello") {
    client.say(channel, `Welcome to the channel, @${tags.username}`);
  }
});
