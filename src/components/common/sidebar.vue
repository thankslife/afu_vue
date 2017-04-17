<template>
	<div class="sidebar_box">
		<span @click="isShow = !isShow" class="sidebar_btn">=</span>
		<div class="sidebar" v-bind:class="{ show: isShow }" @click="isShow = !isShow">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid, placeat nostrum nulla sed autem. Dolorem, cupiditate molestias aspernatur accusamus temporibus, eaque quisquam mollitia officiis, id enim aperiam aliquid repellendus.
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sidebar',
		data() {
			return {
				isShow: false
			}
		}
	}
</script>
<style scoped>

	.sidebar_box {
		position: absolute;
	}
	.sidebar_btn {
		display: inline-block;
		width: 1.236715rem;
		height: 1.236715rem;
	}
	.sidebar {
		position: fixed;
		width: 100%;
		height: 100%;
		left: -100%;
		top: 0;
		transition: left .32s;
		background: rgba(0, 0, 0, .8);
	}

	.sidebar.show {
		left: 0;
	}
</style>