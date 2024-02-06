const User = require("../models/User");


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
    return user;
};