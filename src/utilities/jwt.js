require('dotenv').config();
const jwt = require('jsonwebtoken');    

class Token {
    #secret = process.env.SECRET_JWT;
    constructor(payload, time){
        if(!time) time = '1h'
        this.payload = payload;
    };

    newToken(){
        return jwt.sign(payload, this.#secret, { expiresIn: 'time' }); 
    };

    validateToken(token){
        try {
            const decoded = jwt.verify(token, this.#secret);
            return { valido: true, decoded };
        } catch (error) {
            return { valido: false, erro: error.message };
        }
    };
}
module.export = Token;