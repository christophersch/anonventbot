# anonventbot  
A Discord bot to enable anonymous venting for [Discord.js](https://discord.js.org/#/) v12.5.3 and up.

# Functionality
Users can send a direct message to the bot, which then gets transmitted anonymously to a specified text channel in the relevant Discord server. 

To prevent abuse, the bot also transmits a copy of the message along with the user's tag to a specified logs channel in the relevant Discord server. **Make sure only the owner/trusted members of the server have access to this channel** (however, feature can be disabled).

# Setting up  
* Make sure that [Node.js](https://nodejs.org/en/) and [Discord.js](https://discord.js.org/#/) are installed on whichever machine you want to run this on. 
* Replace all the appropriate fields in `anonventbot.js`: 
  * `vent_channel_id`: The Discord channel ID where messages should be sent. You can get this by right clicking a channel and selecting "Copy ID".
  * `vent_logs_channel_id`: Similarly above, the Discord channel ID for author logs. Set this value to -1 to disable this feature entirely.
  * `color`: The color of the embedded message's sidebar.
  * `presence_text`: Optional text to display in the bot's status.
* At the very bottom, insert your bot's token ID. If you need instructions on this step, refer to [this guide](https://www.writebots.com/discord-bot-token/).
* Start the bot by running `node anonventbot.js` in the directory you put it in.
