# discord-tennu

So there's [discord.js] which allows me to run a discord bot, but I really liked the style of [tennu], so I decided to combine the two. Hence discord-tennu.

Here's an example config.json:

```json
{
	"token": "<token as a string>",
	"commandID":"!",
	"admin":["<@your discord id>"],
	"plugins":["test"]
}
```

Here's an example test plugin:

```javascript
var Test = {
  handler:{
  'test': function(message, bot){
    message.channel.sendMessage("the command test was called");
  },
  'test2': function(message, bot){
    message.channel.sendMessage("the command test2 was called");
  }},
  commands: ['test', 'test2'],
  name: 'Test',
  help: ['test':'This is a test command', 'test2': 'this is a second test command']
}

module.exports = Test;

```

[message] and [bot] are both from discord.js, so this is just a framework based off of discord.js

More things will be added as this is developed.


[message]: https://discordjs.readthedocs.io/en/8.2.0/docs_message.html
[bot]: https://discordjs.readthedocs.io/en/8.2.0/docs_client.html
[discord.js]: https://discord.js.org/
[tennu]: https://tennu.github.io
