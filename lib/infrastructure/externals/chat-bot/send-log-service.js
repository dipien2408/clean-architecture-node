const { Webhook } = require("discord-webhook-node");

async function sendLog({ name, error, info, url }) {
  const DISCORD_URL = global.gConfig.logs.discord_url;
  const hook = new Webhook(DISCORD_URL);

  const message = "**ERROR**" + "```" + `${name} ${JSON.stringify(error)}` + "```";

  if (info) message.concat("**INFO**" + "```" + `${JSON.stringify(info)}` + "```");
  if (url) message.concat("**SERVICE_URL**" + "```" + `${url}` + "```");

  hook.send(message);
}

module.exports = {
  sendLog,
};
