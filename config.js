exports.init = function(app) {

  var controllers = fs.readdirSync('./app/controllers');

  controllers.forEach(function (controller) {
    var controller = require('./app/controllers/' + controller);
    controller.init(app);
  });
};