<template>
	<div class="banner_box" id="doctorInfoBannerBox">
        <span class="ceo_icon"></span>
		<div class="personal_img_box" :canEdit="canEdit" @click="edit" :class="{hide: hideProfileImg}">
            <img src="../../images/personal_default_img.jpg" alt="" class="personal_img">
        </div>
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
        props: ['canEdit', 'hideProfileImg'],
        methods: {
            edit() {
                if(this.canEdit) {
                    console.log(456);
                }
            }
        }
	}
</script>

<style scoped>
	.banner_box {
		text-align: center;
        padding: 0 0 .6rem 0;
        background: url('../../images/doctor_info_banner_cover.jpg') center no-repeat;
        background-size: cover;
	}

	.doctor_info {
		text-align: center;
	}

    .ceo_icon {
        display: inline-block;
        width: 3.092rem;
        height: 1rem;
        background: url('../../images/ceo_icon.png') center no-repeat;
        background-size: 100% auto;
        font-size: 0;
        margin-top: .8rem;
        margin-bottom: .6rem;
    }

    .personal_img_box {
        width: 3.864734rem;
        height: 3.864734rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        border: 1px solid #dedede;
    }

    .personal_img_box.hide {
        visibility: hidden;
    }

	.personal_img {
		width: 100%;
	}

	.personal_info_box {
		margin-top: 0.4rem;
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
