var urlRouter = require('./urlRouter')
    ,listModulesWeb = require('../helpers/listModulesWeb')
    ,configThemes   = require('../helpers/configThemes');


urlRouter.get('/*', listModulesWeb, configThemes,
	function(req, res) {
		var params = {
			menuModules: req.modules,
			configThemes: JSON.stringify(req.configThemes),
  		public_path: "/"+global.config._path,
  		public_path_api:  "/"+global.config._pathApi,
  	};
  res.render('index',params);
});



module.exports = urlRouter;
