import { hashPassword } from "#common/helpers/hash-password.helpers.js";
import { getUserContext } from "../user.context.js";
export const dbRepository = {
    getUserByEmailAndPassword: async (email, password) => {
        const user = await getUserContext().findOne({
            email,
        });
        const hashedPassword = await hashPassword(password, user?.salt);
        return user?.password === hashedPassword
            ? {
                _id: user._id,
                email: user.email,
            }
            : null;
    },
};
