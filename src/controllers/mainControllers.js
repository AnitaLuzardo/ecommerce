const mainControllers = {
	home: (req, res) => {
		res.render('pages/home')
	},

	contact: (req, res) => {
		res.render('pages/contact')
	}
};

module.exports = mainControllers;