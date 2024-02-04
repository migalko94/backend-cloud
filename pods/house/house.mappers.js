//Review
export const getLastReviews = (reviewList, itemsToShow) => reviewList.slice(reviewList.length - itemsToShow, reviewList.length);
export const mapReviewFromModelToApi = (review) => ({
    _id: review._id,
    date: review.date,
    reviewer_name: review.reviewer_name,
    comments: review.comments,
});
export const mapReviewFromApiToModel = (review) => ({
    _id: review._id,
    date: review.date,
    comments: review.comments,
    reviewer_name: review.reviewer_name,
});
export const mapReviewListFromModelToApi = (reviewList) => getLastReviews(reviewList.map(mapReviewFromModelToApi), 5);
//House
export const mapHouseFromModelToApi = (house) => ({
    id: house._id,
    name: house.name,
    description: house.description,
    image: house.images.picture_url,
    country: house.address.country,
    address: house.address.street,
    rooms: house.bedrooms,
    beds: house.beds,
    bathrooms: house.bathrooms?.$numberDecimal,
    reviews: mapReviewListFromModelToApi(house.reviews),
});
export const mapHouseSummaryFromModelToApi = (house) => ({
    id: house._id,
    name: house.name,
    image: house.images.picture_url,
});
export const mapHouseListFromModelToApi = (houseList) => houseList.map(mapHouseSummaryFromModelToApi);
