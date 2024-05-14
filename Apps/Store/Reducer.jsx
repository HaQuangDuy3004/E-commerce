const initialState = [];

function favoriteProductsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_PRODUCT:
            return [...state, action.payload];
        case REMOVE_FAVORITE_PRODUCT:
            return state.filter(productId => productId !== action.payload);
        default:
            return state;
    }
}

export default favoriteProductsReducer;
