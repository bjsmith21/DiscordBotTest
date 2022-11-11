const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require(`discord.js`)

const prefix = '!';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", () => {
    console.log("Bot is online!")

    client.user.setActivity('Hello World' , {type: "Good Day"});
})

client.on("messageCreate" , (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);

    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS


//Test Command

if (command === 'test'){
    message.channel.send("Bot is working")
}

})

client.login("MTA0MDY2NTE1NTg3ODUyMjkzMA.GN0lOF.H_2muGQm5cn8Sia1rJpBkw6gHJ6geaiGoOchIE");