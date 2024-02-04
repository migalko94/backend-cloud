import crypto from "crypto";
import { promisify } from "util";
const randomBytes = promisify(crypto.randomBytes);
const pbkdf2 = promisify(crypto.pbkdf2);
const saltLength = 16;
export const generateSalt = async () => {
    const salt = await randomBytes(saltLength);
    return salt.toString("hex");
};
const iterations = 100000;
const passwordLength = 64;
const digestAlgorithm = "sha512";
export const hashPassword = async (password, salt) => {
    const hashedPassword = await pbkdf2(password, salt, iterations, passwordLength, digestAlgorithm);
    return hashedPassword.toString("hex");
};
