ChatApp.Chat.prototype.getMessage = function($event) {
  var message = $event.find('.message').val();
  $event.find('.message').val('');
  return message;
};

ChatApp.Chat.prototype.displayForOthers = function(msg) {
  this.socket.on('broadcast', { text: msg});

};

$(document).ready(function() {
  var chatter = new ChatApp.Chat(io.connect());
  $('#msg-form').on("submit", function(event) {
    event.preventDefault();
    var message = chatter.getMessage($(event.currentTarget));
    chatter.sendMessage(message);
  });
  chatter.socket.on('broadcast', function(message) {
    $('#all-msgs').prepend("<li>" + message + "</li>");
  });
});