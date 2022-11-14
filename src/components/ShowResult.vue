<template>
  <div
    v-show="showModal"
    class="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
    id="modal"
  >
    <div
      role="alert"
      class="container h-full flex flex-col justify-center items-center mx-auto w-2/12 max-w-lg"
    >
      <div
        v-for="(value, key) in userInfo"
        :key="key"
        class="w-80 py-8 px-2 md:px-20 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md border border-gray-400"
      >
        <h1
          class="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4"
        >
          User : {{ key }}
        </h1>
        <p
          class="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal"
        >
          Correct answers :
          {{ value.correctAnswerCount }}
        </p>
        <p
          class="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal"
        >
          Incorrect answers : {{ value.inCorrectAnswerCount }}
        </p>
        <div class="flex items-center justify-center w-full">
          <button
            class="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
            @click="modalHandler"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],
  name: "CentreAlignedShort",
  data: () => ({
    userInfo: {},
  }),
  watch: {
    showModal(cureentValue) {
      if (cureentValue) {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      }
    },
  },
  methods: {
    modalHandler() {
      this.$emit("setShowModal", false);
      this.$router.push({ path: "/" });
    },
  },

  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  },
};
</script>
