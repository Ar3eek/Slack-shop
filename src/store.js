import { createStore } from 'vuex';

export default createStore({
    state: {
        cartItems: [],
        cart: [],
    },
    getters: {
        cartItems: (state) => state.cart
    },
    mutations: {
        ADD_TO_CART(state, product) {
            const existingProduct = state.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const productWithImage = {
                    ...product,
                    thumbnail: product.thumbnail || product.image,
                    quantity: 1,
                };
                state.cart.push(productWithImage);
            }
        },
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        },
        UPDATE_ITEM_QUANTITY(state, { id, quantity }) {

            const item = state.cart.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },

        SET_CART_ITEMS(state, items) {
            state.cart = items;
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId);
        },
        updateQuantity({ commit }, payload) {
            commit('UPDATE_ITEM_QUANTITY', payload);
        },
        fetchCart({ commit }) {

        }
    }
});