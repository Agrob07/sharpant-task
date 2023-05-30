<template>
  <div>
    {{ getUserInfo.accountType }}
    {{ getUserInfo.info.email }}
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";
export default {
  name: "Step-3",
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
};
</script>
