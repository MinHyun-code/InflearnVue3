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
</template>

<script setup></script>

<style lang="scss" scoped></style>
