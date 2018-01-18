const userControllers = require('../controllers/userControllers');
const postControllers = require('../controllers/postControllers');

module.exports = app => {
	app.route('/posts').get(postControllers.postsGetAll);
	app.route('/likes').post(postControllers.postAddLike);
	app.route('/comment').post(postControllers.postAddComment);
	app.route('/newpost').post(postControllers.postCreate);
	//app.route('/posts/:id').get(postControllers.postGetById);

	app.route('/newuser').post(userControllers.userCreate);
	app.route('/login').post(userControllers.userLogin);
	app.route('/users').get(userControllers.usersGetAll);
};