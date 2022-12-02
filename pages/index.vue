<template>
  <div>
    <h2>ログイン</h2>
    <button @click="login">ログイン!</button>
    <button @click="logout">ログアウト!</button>
  </div>
</template>

<script>
export default {
  auth: false,
  methods: {
    login() {
      console.log("before login");
      this.$auth.loginWith("AAD");
    },
    logout() {
      console.log("before logout");
      this.$auth.logout();
    },
  },
};
</script>
