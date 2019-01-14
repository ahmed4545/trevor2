const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '514881223261290516') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '533730782993186827').send('*Welcome to BubblesAvatar.*');
},3000);
});
client.login(process.env.BOT_TOKEN);
