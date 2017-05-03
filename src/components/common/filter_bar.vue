<template>
	<div class="filter_bar" @click="handleFilter($event)">
		<div v-for="item in filterList" class="filter_item" :class="{'active': item.isActive}" @click="item.isActive = !item.isActive;">
			<span>{{item.text}}</span>
		</div>
	</div>
</template>

<script>

export default {
	props: ['filterList'],
}
</script>

<style scoped>
	.filter_bar {
    	display: flex;
    	padding: 0.386473rem 0;
    	line-height: 0.927536rem;
        text-align: center;
    }

	.filter_item {
    	flex: 1;
    }

    .filter_item span {
    	border-radius: 100px;
    	padding: 0 0.772947rem;
    	line-height: 24px;
    	display: inline-block;
    }
</style>