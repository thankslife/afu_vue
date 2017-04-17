<template>
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
	.banner_box {
		text-align: center;
	}
	.doctor_info {
		text-align: center;
	}

	.banner_box {
		padding: 0.772947rem 0;
		background: url('../../images/doctor_info_banner_cover.jpg') center no-repeat;
		background-size: cover;
	}

	.personal_img {
		width: 3.864734rem;
		height: 3.864734rem;
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
</style>