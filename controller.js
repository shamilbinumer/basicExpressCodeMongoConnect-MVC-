const User = require('./Models/user.model')

// Example controller function
const createUser = async (req, res) => {
    try {
        const { name, age } = req.body;
        const newUser = new User({ name, age });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createUser };
