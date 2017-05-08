<template>
	<div class="my_message_container main_container_box" :class="{slide_left: this.$store.state.spreadSidebar}">
		<slidebar></slidebar>
		<!-- <span class="ceo_icon"></span> -->
		<doctor-info-banner></doctor-info-banner>
		<filter-bar :filterList="filterList"></filter-bar>
		<div class="main_contain my_message_main_contain">
			<router-link to="/message_detail" class="contain_item content_box">
				<div class="person_img_box">
					<img src="../../images/connection4.jpg" alt="">
				</div>
				<div class="info_box">
					<div class="message_info">
						<span class="person_name">李溜溜</span>
						<span class="message_time">12:25</span>
					</div>
					<div class="message_content_box">
						<p class="message_content">李医生,上次你转给我的患者，我向他要了相关的资料，然后后面的文本是什么呢~呃~布吉岛~凑个数~嗷呜</p>
						<span class="message_num_tip">2</span>
					</div>

				</div>
			</router-link>
			<router-link to="/message_detail" class="contain_item content_box">
				<div class="person_img_box">
					<img src="../../images/connection4.jpg" alt="">
				</div>
				<div class="info_box">
					<div class="message_info">
						<span class="person_name">李溜溜</span>
						<span class="message_time">12:25</span>
					</div>
					<div class="message_content_box">
						<p class="message_content">李医生,上次你转给我的患者，我向他要了相关的资料，然后后面的文本是什么呢~呃~布吉岛~凑个数~嗷呜</p>
						<span class="message_num_tip">2</span>
					</div>

				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import slidebar from '../../components/common/sidebar.vue';
import doctorInfoBanner from '../../components/common/doctor_info_banner.vue';
import filterBar from '../../components/common/filter_bar.vue';

export default {
	data: function() {
		return {
			filterList: [
				{
					'text': '医生留言',
					'isActive': false
				},
				{
					'text': '患者留言',
					'isActive': false
				},
				{
					'text': '我的人脉',
					'isActive': false
				},
			]
		}
	},
	components: {
		slidebar,
		doctorInfoBanner,
		filterBar
	}
}
</script>

<style>

	.my_message_container {
		background: url('../../images/message_bg.png') center repeat-y;
        background-size: 100% auto;
        min-height: 100vh;
	}

    .my_message_container .filter_bar {
    	background: #8fb9fb;
    	color: #fff;
    }

    .my_message_container .filter_item.active span {
    	background: #fff;
    	color: #8fb9fb;
    }

    .my_message_main_contain.main_contain {
        padding: 0.618rem 0;
        width: 90%;
        margin: 0 auto;
    }

    .my_message_main_contain .contain_item {
        width: 100%;
        box-sizing: border-box;
    	padding: 0.695652rem;
    	font-size: 0;
    	display: block;
    }

    .my_message_main_contain .contain_item +  .contain_item {
    	margin-top: 5.56%;
    }

    .my_message_main_contain .person_img_box,
    .my_message_main_contain .info_box {
    	display: inline-block;
    	vertical-align: middle;
    	box-sizing: border-box;
    }

    .my_message_main_contain .person_img_box {
    	width: 20%;
    	padding-top: 20%;
    	margin: 0 auto;
    	overflow: hidden;
    	position: relative;
    }

    .my_message_main_contain .person_img_box img {
    	width: 99%;
    	border-radius: 100px;
    	position: absolute;
    	left: 50%;
    	top: 50%;
    	transform: translate(-50%, -50%);
    }

    .my_message_main_contain .info_box {
    	width: 80%;
    	font-size: 12px;
    	padding-left: 0.6rem;
    	line-height: 20px;
    }

    .my_message_main_contain .message_info {
    	margin-bottom: 0.386473rem;
    }

    .my_message_main_contain .person_name {
    	font-size: 14px;
    }

    .my_message_main_contain .message_time {
    	float: right;
    }

    .my_message_main_contain .message_content {
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    	width: 85%;
    	display: inline-block;
    	vertical-align: middle;
    }

    .my_message_main_contain .message_num_tip {
    	float: right;
    	border-radius: 100px;
    	color: #fff;
    	background: #ffb54c;
    	min-width: 20px;
    	height: 20px;
    	line-height: 20px;
    	text-align: center;
    }

</style>
