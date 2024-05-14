export const ADD_FAVORITE_PRODUCT = 'ADD_FAVORITE_PRODUCT';
export const REMOVE_FAVORITE_PRODUCT = 'REMOVE_FAVORITE_PRODUCT';

export function addFavoriteProduct(productId) {
    return {
        type: ADD_FAVORITE_PRODUCT,
        payload: productId
    };
}

export function removeFavoriteProduct(productId) {
    return {
        type: REMOVE_FAVORITE_PRODUCT,
        payload: productId
    };
}
