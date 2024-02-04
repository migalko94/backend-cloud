import { db } from "../../mock-data.js";
const paginateHouseList = (houseList, page, pageSize) => {
    let paginatedHouseList = [...houseList];
    if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
        paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
    }
    return paginatedHouseList;
};
const filterByCountryHouseList = (houseList, country) => {
    let filteredHouseList = [...houseList];
    if (country) {
        filteredHouseList = filteredHouseList.filter((h) => h.address.country === country);
    }
    return filteredHouseList;
};
export const mockRepository = {
    getHouseList: async (page, pageSize, country) => paginateHouseList(filterByCountryHouseList(db.houses, country), page, pageSize),
    getHouseDetail: async (id) => db.houses.find((h) => h._id === id),
    insertReview: async (houseId, review) => {
        let modifiedHouse = db.houses.find((h) => h._id === houseId);
        if (modifiedHouse) {
            let { reviews } = modifiedHouse;
            const _id = (reviews.length + 1).toString();
            const date = new Date();
            const newReview = {
                _id,
                date,
                comments: review.comments,
                reviewer_name: review.reviewer_name,
            };
            modifiedHouse = {
                ...modifiedHouse,
                reviews: [...reviews, newReview],
            };
            db.houses = [modifiedHouse, ...db.houses];
            return newReview;
        }
    },
};
