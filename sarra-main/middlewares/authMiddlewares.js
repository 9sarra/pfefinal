const userModel = require('../models/userSchema');
const jwt = require("jsonwebtoken");

const requireAuthUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    
    if (token) {
        jwt.verify(token, 'net pfe secret', async (err, decodedToken) => {
            if (err) {
                console.log("il ya une erreur au niveau du token", err.message);
                req.session = { user: null }; // Initialiser req.session si elle est undefined
                res.json("/Problem_token");
            } else {
                req.session = { user: await userModel.findById(decodedToken.id) }; // Définir req.session.user
                next();
            }
        });
    } else {
        req.session = { user: null }; // Initialiser req.session si elle est undefined
        res.json("/pas_de_token");
    }
};

module.exports = { requireAuthUser };