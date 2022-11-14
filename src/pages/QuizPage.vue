<template>
  <div class="w-full h-full bg-gradient-to-r from-indigo-100 to-green-200">
    <div
      class="container h-full mx-auto w-5/6 md:w-2/3 flex flex-col items-center justify-center gap-5"
    >
      <div
        class="bg-white dark:bg-gray-800 flex flex-col sm:flex-row sm:items-center justify-between sm:px-10 shadow rounded-full"
      >
        <div class="flex items-center mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          <div class="w-2 h-12"></div>
          <div class="ml-2">
            <h2 class="text-gray-800 dark:text-gray-100 text-sm font-bold">
              {{ question }}
            </h2>
          </div>
        </div>
      </div>
      <p
        v-for="item in answerVersions"
        :key="item"
        class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none cursor-pointer"
        @click="selectAnswer(item)"
      >
        {{ item }}
      </p>
      <h2 class="text-sm md:text-base text-dark-700 font-semibold">
        Question : {{ value + 1 }} / 5
      </h2>
    </div>
    <ShowResult :showModal="showModal" @setShowModal="setShowModal" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ShowResult from "../components/ShowResult.vue";

export default {
  components: {
    ShowResult,
  },
  data: () => ({
    quizData: [],
    wrongAnswer: [],
    value: 0,
    question: "",
    correctanswer: "",
    showModal: false,
    correctAnswerCount: 0,
    inCorrectAnswerCount: 0,
  }),
  computed: {
    ...mapGetters(["allData", "currentEmail"]),
    answerVersions() {
      var _ = require("lodash");
      var list = [this.correctanswer, ...this.wrongAnswer];

      var result = _.shuffle(list);

      return result;
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    selectAnswer(selectedAnswer) {
      this.checkAnswer(selectedAnswer);
      this.value = this.value + 1;
      this.filterList();
      if (this.value > 4) {
        this.$store.dispatch("addUserDetails", {
          correctAnswerCount: this.correctAnswerCount,
          inCorrectAnswerCount: this.inCorrectAnswerCount,
          currentEmail: this.currentEmail,
        });
        this.showModal = true;
      }
    },
    setShowModal(val) {
      return (this.showModal = val);
    },
    checkAnswer(selectedAnswer) {
      if (selectedAnswer === this.correctanswer) {
        this.correctAnswerCount = this.correctAnswerCount + 1;
      } else {
        this.inCorrectAnswerCount = this.inCorrectAnswerCount + 1;
      }
    },
    filterList() {
      if (this.quizData) {
        this.quizData.filter((item, id) => {
          return id === this.value
            ? ((this.question = item.question),
              (this.correctanswer = item.correctAnswer),
              (this.wrongAnswer = item.incorrectAnswers))
            : null;
        });
      }
      return false;
    },
  },

  async mounted() {
    await this.fetchData();
    this.quizData = this.allData;
    this.filterList();
  },
};
</script>
