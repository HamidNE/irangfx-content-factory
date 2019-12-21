<template>
	<div class="container">
		<img src="~/assets/svg/logo-irangfx.svg" />
		<h2>کارخانه تولید محتوا</h2>
		<p>
			<nuxt-link to="/start">
				شروع
			</nuxt-link>
		</p>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
	display: flex;
	min-height: 100vh;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}
img {
	width: 300px;
}
</style>
