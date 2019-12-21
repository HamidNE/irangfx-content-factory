<template>
  <div class="container">
    <img src="/nuxt-black.png">
    <h2>Thank you for testing Nuxtron</h2>
    <p>
      <NuxtLink to="/">
        Back home
      </NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  display: flex;
	min-height: 100vh;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}
</style>