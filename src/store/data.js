export default {
  state: {
    userInfo: {
      info: {},
      accountType: [],
    },
  },
  mutations: {
    addUser: (state, userDetails) =>
      (state.userInfo.info = userDetails),
    addAccountType: (state, payload) => {
      return (state.userInfo.accountType = [
        ...state.userInfo.accountType,
        payload,
      ]);
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
  actions: {
    addUser({ commit }, userDetails) {
      commit("addUser", userDetails);
    },
    addUserAccountType({ commit }, payload) {
      commit("addAccountType", payload);
    },
  },
};
