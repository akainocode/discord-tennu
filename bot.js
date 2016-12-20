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
//	console.log(message.author + "(" + message.author.username +") " + message.cleanContent);

bot.on("message", function(message) {
  if(commandPatt.test(message.cleanContent)){
		console.log(message.author + "(" + message.author.username +") " + message.cleanContent);
	  var match = message.cleanContent.match(commandPatt);
		if(commands[match[1]] !== null){
			commands[match[1]](message, bot);
		}
	}
});

console.log('got here');
bot.login(config.token);
