<template>
	<div class="my_connection_container main_container_box" :class="{slide_left: this.$store.state.spreadSidebar}">
		<slidebar></slidebar>
		<span class="ceo_icon"></span>
		<filter-bar :filterList="filterList"></filter-bar>
		<div class="main_contain my_connection_main_contain">
			<div class="contain_item content_box">
				<div class="person_img_box">
					<img src="../../images/connection4.jpg" alt="">
					<i class="authenticate_icon"></i>
				</div>
				<p class="person_name">李溜溜</p>
				<span class="split_line"></span>
				<div class="info_box">
					<p>主任医师</p>
					<p>神经外科</p>
					<p>上海市第六人民医院</p>
					<span class="price">¥150</span>
				</div>
			</div>
			<div class="contain_item content_box">
				<div class="person_img_box">
					<img src="../../images/connection4.jpg" alt="">
					<i class="authenticate_icon"></i>
				</div>
				<p class="person_name">李溜溜</p>
				<span class="split_line"></span>
				<div class="info_box">
					<p>主任医师</p>
					<p>神经外科</p>
					<p>上海市第六人民医院</p>
					<span class="price">¥150</span>
				</div>
			</div>
			<div class="contain_item content_box">
				<div class="person_img_box">
					<img src="../../images/connection4.jpg" alt="">
					<i class="authenticate_icon"></i>
				</div>
				<p class="person_name">李溜溜</p>
				<span class="split_line"></span>
				<div class="info_box">
					<p>主任医师</p>
					<p>神经外科</p>
					<p>上海市第六人民医院</p>
					<span class="price">¥150</span>
				</div>
			</div>
			<div class="contain_item content_box">
				<div class="person_img_box">
					<img src="../../images/connection4.jpg" alt="">
					<i class="authenticate_icon"></i>
				</div>
				<p class="person_name">李溜溜</p>
				<span class="split_line"></span>
				<div class="info_box">
					<p>主任医师</p>
					<p>神经外科</p>
					<p>上海市第六人民医院</p>
					<span class="price">¥150</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import slidebar from '../../components/common/sidebar.vue';
	import filterBar from '../../components/common/filter_bar.vue';

	export default {
	name: 'my_connection',
	data: function() {
		return {
			filterList: [
				{
					'text': '一度人脉',
					'isActive': false
				},
				{
					'text': '二度人脉',
					'isActive': false
				},
				{
					'text': '推荐医生',
					'isActive': false
				},
			]
		}
	},
	components: {
		slidebar,
		filterBar
	}
}
</script>

<style>

	.my_connection_container {
		text-align: center;
		font-size: 13px;
	}

	.my_connection_container .ceo_icon {
        display: inline-block;
        width: 3.092rem;
        height: 1rem;
        background: url('../../images/ceo_icon.png') center no-repeat;
        background-size: 100% auto;
        font-size: 0;
        margin-top: .8rem;
        margin-bottom: .6rem;
    }

    .my_connection_container .filter_bar {
    	background: #ffc2d6;
    	color: #fff;
    }

    .my_connection_container .filter_item.active span {
    	background: #fff;
    	color: #ffc2d6;
    }

    .main_contain {
        padding-top: 0.618rem;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .my_connection_main_contain .contain_item {
    	width: 47.22%;
    	margin-bottom: 5.56%;
    	padding-top: 0.695652rem;
    }

    .my_connection_main_contain .person_img_box {
    	width: 2.318841rem;
    	height: 2.318841rem;
    	margin: 0 auto;
    	position: relative;
    	text-align: center;
    }

    .my_connection_main_contain .person_img_box img {
    	height: 100%;
    	border-radius: 100px;
    }

    .my_connection_main_contain .authenticate_icon {
    	position: absolute;
    	width: 0.927536rem;
    	height: 0.927536rem;
    	background: url('../../images/authenticate2_icon.png') center no-repeat;
    	background-size: 100% auto;
    	bottom: 0;
    	right: -3px;
    }

    .my_connection_main_contain .person_name {
    	margin-top: 0.463768rem;
    }

    .my_connection_main_contain .split_line {
    	width: 2.8em;
    	height: 0;
    	border-bottom: 1px solid #d6dadc;
    	display: inline-block;
    	margin: 0.57971rem 0;
    }

    .my_connection_main_contain .price {
    	color: #2ab0c3;
    	display: inline-block;
    	margin: 0.695652rem 0;
    }

    .my_connection_main_contain .info_box {
    	line-height: 1.8;
    }

</style>