const bcrypt = require('bcryptjs');

class Encrypt {
    static async encryptPassword(password){
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    static async comparePasswords(plainPassword, hashedPassword){
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}

module.exports = Encrypt;
