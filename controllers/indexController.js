var indexController = {};

indexController.home = function(req, res){
  res.send({ status: 'ok' });
};

module.exports = indexController;
