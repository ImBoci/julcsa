const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const YTDL = require("ytdl-core");

bot.on("ready", () => {
  console.log('Bot has started')
  bot.user.setActivity(`TETRIS || help`, {type: "PLAYING"});
});


bot.on("message", async message => {

  if(message.author.bot) return;

  
  var command = message.content.toLowerCase();
  
  const voiceChannel = message.member.voiceChannel;
  

  if (command.startsWith('ha'))
  {
    
    
    message.channel.send("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA")
    
    if (!message.member.voiceChannel) {
    let voice = new Discord.RichEmbed()
    .setTitle("❗ Julcsa ❗")
    .setColor("DARK_RED")
    .setDescription(`\`\`\`Csatlakozz be egy szobába, hogy betudjak lépni hozzád!\`\`\``)
    setTimeout(() => { message.channel.send(voice); }, 2000);
  }
    if (message.guild.me.voiceChannel){
    let inside = new Discord.RichEmbed()
    .setTitle("❗ Julcsa ❗")
    .setColor("DARK_RED")
    .setDescription(`\`\`\`Bocs, de már a szobában vagyok.\`\`\``)
    setTimeout(() => { message.channel.send(inside); }, 2000);
    }
    
  
  
    voiceChannel.join().then(connection =>
    {
     const dispatcher = connection.playFile('./julcsa.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
}
  
  if(command.startsWith("leave"))
     {
    var servers = {};
    var server = servers[message.guild.id];
    if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

     }
  
  if(command.startsWith("julcsa"))
     {
     let invite = "https://discordapp.com/api/oauth2/authorize?client_id=486908529047896088&permissions=3263552&scope=bot";
     const embed = new Discord.RichEmbed()
     .setTitle("Julcsa vagyok")
     .setColor("RED")
     .setDescription("[Hívd meg](https://bit.ly/2wKunBO) Julcsát a szerveredre.")
     message.channel.send(embed)
    }
  
  if(command.startsWith("help"))
  {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .setTitle("Julcsa segít")
        .setDescription(`\`\`\`Prefix: NINCS\n\nKommandok:\n\nhahaha -~- Julcsa becsatlakozik hozzád és veled nevet.\n\nleave -~- Julcsa visszamegy az utcára.\n\njulcsa -~- Ezzel meg tudod hívni Julcsát a saját szerveredre.\n\nhelp -~- Itt vagy most. Kommandokat tudod megnézni.\`\`\``)
        .setFooter(`Segítséget kérte : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');

    message.channel.send(botembed);
    
  }
})
  
  




bot.login(process.env.TOKEN);