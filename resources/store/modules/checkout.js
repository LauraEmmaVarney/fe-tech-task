import axios from 'axios';

const state = () => ({
  items: [],
  checkoutStep: 1
});

const actions = {
  async getBasketItems ({commit}) {
    await axios.get("/checkout/items")
      .then(response => {
        commit('setBasketItems', response.data);
      })
      .catch((error) => {});
  },

  updateCheckoutStep ({commit}, value) {
    commit('setCheckoutStep', value);
  },
};

const mutations = {
  setBasketItems (state, items) {
    state.items = items;
  },

  setCheckoutStep (state, status) {
    state.checkoutStep = status;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
