export default {
  actions: {
    async fetchData(context) {
      const res = await fetch("https://the-trivia-api.com/api/questions");
      const data = await res.json();
      context.commit("updateData", data);
    },
    addUser({ commit }, email) {
      commit("addUser", email);
    },
    addUserDetails({ commit }, data) {
      commit("addUserDetails", data);
    },
  },
  mutations: {
    updateData(state, data) {
      state.quiz = data;
    },
    addUser(state, email) {
      state.userInfo[email] = {};
      state.currentEmail = email;
    },
    addUserDetails(
      state,
      { correctAnswerCount, inCorrectAnswerCount, currentEmail }
    ) {
      state.userInfo[currentEmail] = {
        correctAnswerCount,
        inCorrectAnswerCount,
      };
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
  state: {
    quiz: [],
    userInfo: {},
    currentEmail: "",
  },
  getters: {
    allData(state) {
      return state.quiz;
    },
    currentEmail(state) {
      return state.currentEmail;
    },
  },
};
