<template>
  <div class="w-1/2  m-20">
 <form class="flex flex-col gap-2" @submit="handleSubmit">
  <label for="first-name">First name </label>   
  <input
      id ="first-name"
        class="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border
         focus:border-indigo-700 font-normal w-full h-12 px-10 py-4 text-sm 
         border-gray-300 rounded border"
        placeholder="Enter your first name"
        type="text"
        v-model="userDetails.firstName"
      />
      <label for="first-name">Last name </label>   
      <input
      id="last-name"
        class="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border
         focus:border-indigo-700 font-normal w-full h-12 px-10 py-4 text-sm 
         border-gray-300 rounded border"
        placeholder="Enter your last name"
        type="text"
        v-model="userDetails.lastName"
      />
      <label for="email">Email</label>   
      <input
      id="email"
       
      class='pr-24 text-gray-600 bg-gray-100 focus:outline-none `${}` focus:border
         focus:border-indigo-700 font-normal w-full h-12 px-10 py-4 text-sm 
         border-gray-300 rounded border'
        placeholder="Enter your email"
        type="text"
        v-model="userDetails.email"
      />
      <label for="password">Password</label>   
      <input
      id="password"
        class="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border
         focus:border-indigo-700 font-normal w-full h-12 px-10 py-4 text-sm 
         border-gray-300 rounded border"
        placeholder="Create a password"
        type="text"
        v-model="userDetails.password"
      />
      <div class="flex gap-2">
        <input type="checkbox" @click="checkCheckbox" v-model="privacyPolicy">
        <span>I agree with the Terms and Privacy Policy</span>
      </div>
      <button  v-show="privacyPolicy"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit" 
     >
     Next
    </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
   userDetails : {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
   },
   isValidEmail: false,
   privacyPolicy:  false
  }),
  computed:{
  },
  methods: {
    ...mapActions(['addUser']),
    addUserDetails() {
      this.addUser( this.userDetails);
    },
    validateEmail() {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.userDetails.email)) {
      return  this.isValidEmail= true;
      }
      this.userDetails.email = "";
        this.isValidEmail=false;
    },
    checkCheckbox(){
    return  !this.privacyPolicy
    },
    handleSubmit(e) {
      e.preventDefault();
      this.validateEmail();
     
      if (this.isValidEmail) {
        this.addUserDetails();
        this.$router.push({ name: "step2" });
      }else{
        console.log("Email not valid")
      }
    },
  },
};
</script>

<style></style>
