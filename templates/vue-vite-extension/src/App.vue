<script setup lang="ts">
import HelloBreadboard from "./components/HelloBreadboard.vue";
</script>

<template>
	<div class="logos">
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/logo.svg" class="logo vue" alt="Vue logo" />
		</a>
		<a href="https://breadboard-ai.github.io/breadboard/" target="_blank">
			<img
				src="./assets/breadboard-logo.svg"
				class="logo breadboard"
				alt="Breadboard logo"
			/>
		</a>
	</div>
	<HelloBreadboard msg="Vite + Vue + Breadboard" />
</template>

<style scoped>
.logos {
	display: flex;
}

.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.breadboard:hover {
	filter: drop-shadow(0 0 2em #ffac04aa);
}
</style>