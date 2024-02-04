import { db } from "#core/servers/index.js";
export const getHouseContext = () => db.collection("listingsAndReviews");
