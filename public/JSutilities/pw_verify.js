const bcrypt = require('bcrypt');

const comparePassword = async (enteredPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(enteredPassword, hashedPassword);
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw error;
    }
};

module.exports = { comparePassword };
