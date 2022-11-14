<template>
  <div
    class="h-full flex flex-col justify-center gap-10 items-center bg-gradient-to-r from-cyan-500 to-blue-500"
  >
    <img
      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg5.svg"
      alt="circle"
    />
    <h1 class="font-normal text-4xl leading-6 text-indigo-800">
      Quiz for users
    </h1>
    <form class="flex flex-col gap-10" @submit="handleSubmit">
      <input
        class="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-12 px-10 py-4 text-sm border-gray-300 rounded border"
        placeholder="Please enter email"
        type="text"
        v-model="inputValue"
      />
      <button
        class="focus:outline-none ml-28 bg-green-900 dark:bg-green-700 border-green-700 hover:bg-green-400 transition duration-150 tex-white-600 dark:text-white-400 ease-in-out hover:border-green-400 hover:green-300 border rounded w-32 py-3 text-m"
        type="submit"
      >
        Start Quez
      </button>
    </form>
    <ErrorModal :showModal="showErrorModal" @setShowModal="setShowModal" />
  </div>
</template>

<script>
import ErrorModal from "../components/ErrorModal.vue";
export default {
  components: {
    ErrorModal,
  },
  data: () => ({
    inputValue: "",
    showErrorModal: false,
  }),
  methods: {
    validateEmail() {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.inputValue)) {
        return true;
      }
      this.inputValue = "";
      this.showErrorModal = true;
      return false;
    },
    addEmail() {
      this.$store.dispatch("addUser", this.inputValue);
    },
    handleSubmit(e) {
      e.preventDefault();
      const isValid = this.validateEmail();
      if (isValid) {
        this.addEmail();
        this.$router.push({ path: "/quiz" });
      }
    },
    setShowModal(val) {
      return (this.showErrorModal = val);
    },
  },
};
</script>

<style></style>
