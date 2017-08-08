var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require('./config.json');
var commandID = config.commandID;
var plugins = config.plugins;
var commands = [];
var commandPatt = new RegExp("^" + commandID  + "(\\w+)");

bot.on("ready", function(){
		console.log("Loading plugins");
		for (const name of plugins) {
			var plugin = require("./discord_plugins/" + name + ".js");
  		for(const command of plugin.commands){
				commands[command] = plugin.handler[command];
			}
  		console.log('added plugin', plugin.name, 'with commands', plugin.commands.toString());
		}
});

bot.on("message", function(message) {
  if(commandPatt.test(message.cleanContent)){
		console.log(message.guild + "(" + message.guild.name + ") - " + message.channel + "(" + message.channel.name + "): " + message.author + "(" + message.author.username +") " + message.cleanContent);
	  var match = message.cleanContent.match(commandPatt);
		if(typeof commands[match[1]] == "function" && commands[match[1]] !== null){
			try{
				commands[match[1]](message, bot);
			}catch(err){
				console.log(err);
			}
		}
	}
});
exports.client = bot;
exports.commandID = commandID;
console.log('got here');
bot.login(config.token);
exports.started = false;
