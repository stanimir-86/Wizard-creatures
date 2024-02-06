const User = require("../models/User");
const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');

exports.register = (userData) => User.create(userData);
const bcrypt = require('bcrypt');

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid email or password');
    }
    const payload = { _id: user._id, email: user.email };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '3d' });


    return token;
};