<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<hr class="my-4" />
		<div class="row">
			<div class="row g-2">
				<div class="col-auto">
					<button class="btn btn-outline-dark">이전글</button>
				</div>
				<div class="col-auto">
					<button class="btn btn-outline-dark">다음글</button>
				</div>
				<div class="col-auto me-auto"></div>
				<div class="col-auto">
					<button class="btn btn-outline-dark" @click="goListPage">목록</button>
				</div>
				<div class="col-auto">
					<button class="btn btn-outline-primary" @click="goEditPage">
						수정
					</button>
				</div>
				<div class="col-auto">
					<button @click="remove" class="btn btn-outline-danger">삭제</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/post';
import { ref } from 'vue';

const router = useRouter();

const props = defineProps({
	id: String,
});

const post = ref({
	title: null,
	content: null,
	createdAt: null,
});

const fetchPost = async () => {
	try {
		console.log(typeof props.id);
		const { data } = await getPostById(props.id);
		setPost(data);
	} catch (error) {
		console.log(error);
	}
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

fetchPost();

const remove = async () => {
	try {
		if (confirm('삭제하시겠습니까 ?') === false) {
			return;
		}
		await deletePost(id);
		goListPage();
	} catch (error) {
		console.log(error);
	}
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
