const Discord = require("discord.js");
 
const anonventbot = new Discord.Client();
 
const vent_channel_id =         "<Venting channel ID number>" // Main venting channel ID. This is where all messages are sent.
const vent_logs_channel_id =    "<Logs channel ID number>" // Logs channel. Make sure this channel is accessible only by the owner, or by trusted admins.
// set the logs channel id to -1 in order to disable this functionality entirely.

const color = "#0099ff";    // Hex code of embed side colour
const presence_text = "";   // Presence status text

var last_person = "";   // Log last person to identify a new OP

anonventbot.on('ready', () => {
    console.log(`Logged in as ${anonventbot.user.username}`);
    anonventbot.user.setPresence({ status: 'online', game: { name: presence_text }})
});
 
anonventbot.on('message', msg => {
    if (msg.author.bot || msg.guild !== null) return;
    
    if (msg.content == " " || msg.content.length > 1000 || msg.attachments.size > 0){
        msg.channel.send("Sorry, but please make sure your message has less than 1000 characters and has no files attached to it. Sorry for the inconvenience, don't let that get in the way though.");
        return;
    }

    // Check for a new OP
    var new_op = (last_person !== msg.author.id ? " (New OP):" : ":");
    last_person = msg.author.id;
    
    // Generate the embed for vent channel message
    var new_embed = new Discord.MessageEmbed()
    .setColor(color)
    .addField("Message" + new_op, msg.content, true)
    
    // Send message to venting channel
    anonventbot.channels.cache.get(vent_channel_id).send(new_embed);

    if (vent_logs_channel_id !== "-1") {
        // Send message to log channel
        anonventbot.channels.cache.get(vent_logs_channel_id).send("> " + msg.content);
        anonventbot.channels.cache.get(vent_logs_channel_id).send(msg.author.tag);
    }

    // Confirm that the message has been sent
    msg.react("☑");
});
 
anonventbot.login('bot token here');
 
