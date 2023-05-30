<template>
  <div class="flex flex-col">
    <div class="flex gap-1.5	">
    <input type="checkbox" checked>
      <span>Personal</span>
    </div>
    <div class="flex gap-1.5	">
    <input type="checkbox">
      <span>Student</span>
    </div>
    <div class="flex gap-1.5	">
    <input type="checkbox">
      <span>Teacher / Professor</span>
    </div>
    <div class="flex gap-1.5	">
    <input type="checkbox">
      <span>
        Government agency
      </span>
    </div>
    <div class="flex gap-1.5	">
    <input type="checkbox">
      <span>
      Other    
      </span>
    </div>

    <div class="flex gap-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="backToStep1">Back</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="handleClick">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   name: "SecondPage",
   data: () => ({
   accountDetails : {
 
   },
  }),
  methods: {
    ...mapActions(['addUserAccountType']),
    backToStep1(){
      this.$router.go(-1)
    },
    handleClick(){
        this.addUserAccountType()
    }
    },
}
</script>