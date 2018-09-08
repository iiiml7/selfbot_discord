const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "$";

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("SelfBot is start");
    client.user.setGame("0011100010101");
});

client.on ("message", message => {
    if(message.content === prefix + "help"){
        if(message.author.id === "343445422909423628"){
         var help_embed = new Discord.RichEmbed()
         .setColor("#FFBF00")
         .setTitle("**Commande disponible**")
         .addField("prefix", "prefix = $", true)
         .addField("help", "afficher le panel d'aide", true)
         .addField("spam", "spam + (message)", true)
         .addField("stop", "commande pour arreter le spam", true)
         .setFooter("Help panel")
         message.channel.sendMessage(help_embed);
        }
    }
});


client.on("message", message => {
    if(message.content.startsWith(prefix + "spam")) {
        if(message.author.id === "343445422909423628"){
            let args = message.content.split(" ")
            args.shift()
            message.delete();
            var setIntervalID = setInterval(function(){message.channel.send(args.join(" "))}, 2000);
            client.on("message", message => {
                if(message.content.startsWith(prefix + "stop")){
                    if(message.author.id === "343445422909423628"){
                        clearInterval(setIntervalID);
                        message.delete();
                        message.channel.send("disable");
                    }
                }
            });
        }
    }
});

client.on ("message", message => {
    if(message.content.startsWith(prefix + "say")){
        let sayw = message.content.split(" ")
        sayw.shift();
        message.delete();
        if(!sayw[0]) return message.reply("Entrez un mot valide !")
        message.channel.send(sayw);
    }
});