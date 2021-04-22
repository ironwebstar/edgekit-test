<template>
  <div class="login flex column">
    <p class="text-h2--max">Log in</p>
    <p class="text-h2--max">with EdgeKit</p>
    <div class="flex row email input-wrapper">
      <input
        class="input"
        placeholder="Work email"
        v-model="email"
        :class="{ 'input-error': errorMsg && errorMsg.email.length }"
      />
      <div
        v-if="errorMsg && errorMsg.email.length"
        class="input-context"
        :class="{ 'text-red': errorMsg && errorMsg.email.length }"
      >
        {{ errorMsg.email[0] }}
      </div>
    </div>
    <div class="flex row password input-wrapper">
      <input
        class="input"
        placeholder="Password"
        v-model="password"
        :class="{ 'input-error': errorMsg && errorMsg.password.length }"
      />
      <div class="input-context">
        <div
          v-if="errorMsg && errorMsg.password.length"
          class="pr-md"
          :class="{ 'text-red': errorMsg && errorMsg.password.length }"
        >
          {{ errorMsg.password[0] }}
        </div>
        <div class="text-primary">Forgot password?</div>
      </div>
    </div>
    <div class="flex row password input-wrapper">
      <button type="submit" class="btn btn-login" @click="checkForm">
        Log in
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Error } from "@/types";

export default class Home extends Vue {
  errorMsg: Error = {
    email: [],
    password: [],
  };
  email = "";
  password = "";

  validEmail = (email: string): boolean => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  checkForm = (): boolean => {
    this.errorMsg.email.length = 0;
    this.errorMsg.password.length = 0;

    if (!this.password) this.errorMsg.password.push("Password required");
    if (!this.email) {
      this.errorMsg.email.push("Email required.");
    } else if (!this.validEmail(this.email)) {
      this.errorMsg.email.push("This email is badly formatted.");
    }

    if (!this.errorMsg.email.length && !this.errorMsg.password.length) {
      return true;
    }

    return false;
  };
}
</script>

<style lang="scss" scoped>
.login {
  padding-top: 120px;

  p {
    text-align: left;
    font-weight: bold;
    margin: 0;
  }

  .email {
    margin-top: 40px;
    margin-bottom: 24px;
  }
}

.input-wrapper {
  input,
  button {
    width: 50%;
  }

  .btn-login {
    margin-top: 24px;
    width: calc(50% + 50px);
  }
}

.input-context {
  padding-left: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
