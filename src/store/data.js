
export default {
  state: {
    userInfo: {},
  },
  mutations: {
    addUser : (state, userDetails) =>  state.userInfo = userDetails,
    addAccountType: (state, payload)=>{
      return state.userDetails["accountType"] = payload
    }
  },
  getters: {
    getUserInfo : (state) => state.userInfo
  },
  actions: {
    addUser({ commit }, userDetails) {
      commit("addUser",userDetails );
    },
    addUserAccountType({commit},payload){
      commit("addAccountType",payload );

    },
    // addUserDetails() {
    //   localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    // },
  },
};
