<template>
	<section class="doctor_info">
		<div class="banner_box">
			<img src="../../images/personal_default_img.jpg" height="220" width="220" alt="" class="personal_img">
			<div class="personal_info_box">
				<div class="personal_name_box">
					<span class="doctor_name">钱阿福</span>
					<i class="authenticate_icon"></i>
				</div>
				<p>主任医师</p>
				<p>上海市第六人民医院 骨科</p>
			</div>
		</div>
		<div class="tab_box">
			<span class="tab">
				<i class="tab_icon score_icon"></i>
				<span>评分</span>
				<strong>8,396</strong>
			</span>
			<span class="tab">
				<i class="tab_icon patient_icon"></i>
				<span>患者</span>
				<strong>153</strong>
			</span>
			<span class="tab">
				<i class="tab_icon colleague_icon"></i>
				<span>同行</span>
				<strong>8,396</strong>
			</span>
		</div>
		<section style="padding: 10px;">
			<div class="content_box">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, porro aliquam harum inventore nostrum iure iste tempore sit, qui dicta non natus provident accusamus fuga optio temporibus molestiae alias, dolor.
			</div>
		</section>
	</section>

</template>

<script>
	export default {
		mounted(){

        },
        props: [],
        methods: {
            fn() {

            }
        }
	}
</script>

<style scoped>
	.doctor_info {
		text-align: center;
	}

	.banner_box {
		padding: 0.772947rem 0;
		background: url('../../images/doctor_info_banner_cover.jpg') center no-repeat;
		background-size: cover;
	}

	.personal_img {
		width: 3.865rem;
		height: 3.865rem;
		border-radius: 100px;
	}

	.personal_info_box {
		margin-top: 0.772947rem;
	}

	.personal_name_box {
		font-size: 20px;
		line-height: 24px;
	}

	.doctor_name {
		display: inline-block;
		vertical-align: middle;
		margin-left: 0.695652rem;
	}

	.authenticate_icon {
		display: inline-block;
		vertical-align: middle;
		width: 0.695652rem;
		height: 0.695652rem;
		background: url('../../images/authenticate_icon.png') center no-repeat;
		background-size: 100% auto;
	}

	.personal_info_box {
		font-size: 12px;
	}

	.personal_info_box p {
		line-height: 18px;
	}

	.tab_box {
		display: flex;
		background: #fff;
		text-align: center;
	}

	.tab_box .tab {
		flex: 1;
		height: 1.932367rem;
		position: relative;
	}

	.tab_box .tab:after {
		content: '';
		display: inline-block;
		vertical-align: middle;
		height: 100%;
	}

	.tab_box .tab + .tab:before {
		content: '';
		position: absolute;
		width: 0;
		height: 60%;
		left: -1px;
		top: 50%;
		transform: translateY(-50%);
		border-left: 1px solid #f2f2f2;
	}

	.tab_box .tab_icon {
		display: inline-block;
		vertical-align: middle;
		width: 1.004831rem;
		height: 1.004831rem;
		background: url('../../images/score_icon.png') center no-repeat;
		background-size: cover;
	}

	.tab_box .tab span,
	.tab_box .tab strong {
		display: inline-block;
		vertical-align: middle;
	}

	.tab_box .tab strong {
		color: #666;
	}
</style>
