<template>
	<div>HomeView</div>
	<button
		class="btn btn-primary"
		@click="
			$router.push({
				name: 'About',
			})
		"
	>
		about으로 이동
	</button>

	<hr class="my-4" />
	<h2>{{ $person.name }}</h2>
</template>

<script>
export default {
	created() {
		// console.log(this.$person.name);
		// this.$person.say();
	},
};
</script>

<script setup>
import { inject } from 'vue';

const person = inject('person');
console.log(person.name);
</script>

<style lang="scss" scoped></style>
