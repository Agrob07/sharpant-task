<template>
  <div class="flex flex-col">
    <div
      v-for="item in checkboxes"
      :key="item.id"
      class="flex gap-1.5"
    >
      <input
        type="checkbox"
        :value="item.label"
        :id="item.label"
        @change="handleCheckbox"
      />
      <label :for="item.label">{{ item.label }}</label>
    </div>

    <div class="flex gap-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="backToStep1"
      >
        Back
      </button>
      <button
        @click="handleClick"
        :disabled="isDisabled"
        :class="
          isDisabled
            ? 'px-8 py-3 text-white bg-gray-300 rounded focus:outline-none'
            : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        "
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { checkboxes } from "@/mock/checkboxes";

export default {
  name: "SecondPage",
  data: () => ({
    checkboxes,
  }),
  computed: {
    isDisabled() {
      return this.checkboxes.every((item) => !item.checked);
    },
  },
  methods: {
    ...mapActions(["addUserAccountType"]),
    backToStep1() {
      this.$router.go(-1);
    },
    handleCheckbox(e) {
      this.checkboxes = this.checkboxes.map((item) =>
        item.label === e.target.value
          ? { ...item, checked: e.target.checked }
          : item
      );
    },
    handleClick() {
      const checked = this.checkboxes.filter((item) => item.checked);
      checked.forEach((item) => this.addUserAccountType(item.label));
      this.$router.push({ name: "step3" });
    },
  },
};
</script>
