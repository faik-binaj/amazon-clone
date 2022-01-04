export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)


export const initialState = {
  basket: [
    {
      id: "12345",
      title: "PlayStation DualSense Wireless Controller – Midnight Black",
      price: 70.0,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1475_.jpg",
    },
    {
      id: "12345",
      title: "PlayStation DualSense Wireless Controller – Midnight Black",
      price: 70.0,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1475_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can not remove product (id:${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
