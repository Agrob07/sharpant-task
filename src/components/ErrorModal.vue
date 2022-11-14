<template>
  <div
    v-show="showModal"
    class="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
    id="modal"
  >
    <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
      <div
        class="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400"
      >
        <h1
          class="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4"
        >
          Invalid Email
        </h1>
        <p
          class="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal"
        >
          Please enter valid email
        </p>
        <div class="flex items-center justify-center w-full">
          <button
            class="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
            @click="modalHandler"
          >
            Cancel
          </button>
        </div>
        <div
          class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
          @click="modalHandler"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Close"
            class="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],
  name: "CentreAlignedShort",

  methods: {
    modalHandler() {
      this.$emit("setShowModal", false);
    },
  },
};
</script>
