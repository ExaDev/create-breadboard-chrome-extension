<script setup lang="ts">
import { onMounted, ref } from "vue";
import board from "../breadboard/index";

defineProps<{ msg: string }>();

const boardMessage = ref("");
const boardInput = ref("Hello, Breadboard!");

onMounted(async () => {
	const { output } = await board({ message: boardInput.value });
	boardMessage.value = output as string;
});

const onInputChanged = async (event: Event) => {
	boardInput.value = (event.target as HTMLInputElement).value;
	const { output } = await board({ message: boardInput.value });
	boardMessage.value = output as string;
};
</script>

<template>
	<h1>{{ msg }}</h1>

	<input class="userInput" :value="boardInput" @input="onInputChanged" />
	<p>Board Output: {{ boardMessage }}</p>

</template>

<style scoped>

.userInput {
  height: 2em;
  border-radius: 0.3em;
  padding: 1em 1.6em;
  margin: 1em 0;
  box-sizing: border-box;
  border-style: unset;
  color: #323232;
  border: 0.1em solid#e3e3e3;
}

</style>
