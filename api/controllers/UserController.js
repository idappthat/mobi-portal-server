/**
 * UserController
 *
 * @description :: Logic for users
 */

module.exports = {

	/**
	 * UserController.create()
	 * /api/users/create
	 *
	 */
	create: function(req,res){
		return res.status(200).json({message:"Success"});
	},

	/**
	 * UserController.show()
	 * /api/users/show
	 *
	 */
	show: function(req,res){

		var userId = req.param("id");

		return res.status(200).json({
			message: userId
		});
	}

};

