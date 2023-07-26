import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    imgurl:
      "https://image.freepik.com/free-photo/shopping-online-home-concept-blue-background-copyspace_1205-6303.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Men",

    imgurl:
      "https://img.freepik.com/free-photo/shopping-leisure-discounts-concept-excited-handsome-smiling-man-scream-from-happiness-as-carry-bags-from-shop-with-special-offers-react-amazed-wonderful-prices-yellow-background_1258-60097.jpg?w=2000",
  },
  {
    _id: uuid(),
    categoryName: "Women",

    imgurl:
      "https://thumbs.dreamstime.com/b/portrait-beautiful-girl-holding-shopping-bags-isolated-over-blue-background-140805777.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kids",

    imgurl:
      "https://joburg.co.za/wp-content/uploads/2016/02/shutterstock_560038240.jpg",
  },
];
