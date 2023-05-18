const state = () => ({
  store: {
    currencySymbol: '$',
    name: 'Test Store',
    logoUrl: null,
  }
});

export default {
  namespaced: true,
  state,
};