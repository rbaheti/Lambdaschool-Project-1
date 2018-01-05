 const userControllers = require('../controllers/userControllers');
const postControllers = require('../controllers/postControllers');

module.exports = app => {
	app.route('/posts').get(postControllers.postsGetAll);
	app.route('/new-user').post(userControllers.userCreate);
	app.route('/login').post(userControllers.userLogin);
	app.route('/newpost').post(postControllers.postCreate);
	app.route('/posts').get(postControllers.postsGetAll);
	app.route('/users').get(userControllers.usersGetAll);
	app
		.route('/posts/:id')
		.get(postControllers.postGetById)
		.put(postControllers.postCommentAdd);
};