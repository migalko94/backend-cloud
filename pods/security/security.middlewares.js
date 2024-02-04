import { envConstants } from "#core/constants/env.constants.js";
import jwt from "jsonwebtoken";
const verify = (token, secret) => new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, userSession) => {
        if (error) {
            reject(error);
        }
        if (userSession) {
            resolve(userSession);
        }
        else {
            reject();
        }
    });
});
export const authenticationMiddleware = async (req, res, next) => {
    try {
        const [, token] = req.headers.authorization?.split(" ") || [];
        const userSession = await verify(token, envConstants.AUTH_SECRET);
        req.userSession = userSession;
        next();
    }
    catch (error) {
        res.sendStatus(401);
    }
};
