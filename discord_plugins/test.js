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
  help: {'test':'This is a test command', 'test2': 'this is a second test command'}
}

module.exports = Test;
