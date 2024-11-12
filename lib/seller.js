const fs = require('fs')
const toMs = require('ms')

/**
 * Add seller user.
 * @param {String} userId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addSellerUser = (userId, expired, _dir) => {
    let expired_at = 'PERMANENT'

    if (expired !== 'PERMANENT') {
        expired_at = Date.now() + toMs(expired)
    }

    const obj = { id: userId, expired: expired_at }
    _dir.push(obj)
    fs.writeFileSync('./database/seller.json', JSON.stringify(_dir, null, 2))
}

/**
 * Get seller user position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSellerPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

/**
 * Get seller user expire.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSellerExpired = (userId, _dir) => {
    let position = getSellerPosition(userId, _dir)
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check user is seller.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkSellerUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking seller.
 * @param {Object} _dir 
 */
const expiredSellerCheck = (haruka, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired && _dir[i].expired !== 'PERMANENT') {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Seller expired: ${_dir[position].id}`)
            let txt = `Akses Seller Anda telah kedaluwarsa. Terima kasih sudah berlangganan!`
            haruka.sendMessage(_dir[position].id, { text: txt })
            _dir.splice(position, 1)
            fs.writeFileSync('./database/seller.json', JSON.stringify(_dir, null, 2))
        }
    }, 1000)
}

/**
 * Get all seller user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllSellerUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addSellerUser,
    getSellerExpired,
    getSellerPosition,
    expiredSellerCheck,
    checkSellerUser,
    getAllSellerUser
}