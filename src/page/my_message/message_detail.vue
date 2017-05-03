<template>
	<div class="message_detail_container main_container_box" :class="{slide_left: this.$store.state.spreadSidebar}">
		<slidebar></slidebar>
		<span class="ceo_icon"></span>
		
	</div>
</template>

<script>
import slidebar from '../../components/common/sidebar.vue';

export default {
	data: function() {
		return {
		}
	},
	components: {
		slidebar
	}
}
</script>

<style scoped>

	.message_detail_container {
		font-size: 13px;
		text-align: center;
		background: url('../../images/message_bg.png') center repeat-y;
        background-size: 100% auto;
        min-height: 100vh;
	}

	.message_detail_container .ceo_icon {
        display: inline-block;
        width: 3.092rem;
        height: 1rem;
        background: url('../../images/ceo_icon.png') center no-repeat #f3f5f7;
        background-size: 3.092rem auto;
        font-size: 0;
        padding-top: .8rem;
        padding-bottom: .6rem;
    }

</style>