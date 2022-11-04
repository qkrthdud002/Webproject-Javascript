const crypto = require('crypto');
const { resolve } = require('path');
const cryptoConfig = require('../configs/crypto.config')

module.exports.gotSalt=()=>{
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if(!err) {
                resolve(buf.toString('base64'))
            } else
                reject(err)
        })
    })
};

module.exports.getKey=async (password, salt) => {
    return new Promise((result, reject) => {
        crypto.pbkdf2(
            password,
            salt,
            cryptoConfig.count,
            cryptoConfig.length,
            cryptoConfig.digest,
            (err, derivedKey) => {
                if(!err) {
                    encodedPassword = derivedDey.toString('base64')
                    resolve(encodedPassword)
                } else {
                    reject(err)
                }
            })
    });
}