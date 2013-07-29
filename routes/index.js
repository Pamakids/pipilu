
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '皮皮鲁送你100条命' })
};

exports.safebook = function(req, res){
	res.sendfile('safebook/index.html');
}