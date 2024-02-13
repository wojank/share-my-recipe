const getUser = (req, res) => {
	res.status(200).json({ message: 'nasz user' });
};

module.exports = { getUser };
