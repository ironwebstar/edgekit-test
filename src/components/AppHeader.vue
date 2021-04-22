<template>
  <div id="nav" class="header flex">
    <div class="header-left">
      <img src="../assets/Group.png" />
    </div>
    <div class="header-right">
      <span>New user?</span>
      <span class="signup">Sign up</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class AppHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/variables";

#nav {
  padding: 30px;
  justify-content: space-between;

  .header-right {
    color: $color-gray-2;

    .signup {
      font-weight: bold;
      padding-left: 8px;
      color: $color-dark;
      cursor: pointer;
    }
  }
}
</style>
