<template>
	<transition>
		<div v-if="modelValue">
			<div class="modal-backdrop fade show"></div>
			<div
				class="modal fade show d-block"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-modal="true"
				role="dialog"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<slot name="header">
								<h1 class="modal-title fs-5" id="exampleModalLabel">
									{{ title }}
								</h1>
								<button
									type="button"
									class="btn-close"
									aria-label="Close"
									@click="$emit('update:modelValue', false)"
								></button>
							</slot>
						</div>
						<div class="modal-body">
							<slot></slot>
						</div>
						<div class="modal-footer">
							<slot name="actions"></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
defineProps({
	modelValue: Boolean,
	title: String,
});

defineEmits(['close', 'update:modelValue']);
</script>

<style lang="scss" scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}

.v-enter-to,
.v-leave-from {
	opacity: 1;
}
</style>
