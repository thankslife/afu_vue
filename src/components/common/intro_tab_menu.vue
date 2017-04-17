<!-- banner宣传图下面的数据显示条，考虑到个人中心和我的人脉中都有出现，故抽取为一个组件，tab中需要显示的数据用使用此组件的父组件传入 -->
<template>
	<div class="tab_box">
		<template v-for="item in introData">
			<span class="tab">
				<i class="tab_icon" :style="'background-image: url(' + item.url + ');'"></i>
				<span>{{item.name}}</span>
				<strong>{{item.value}}</strong>
			</span>
		</template>
	</div>
</template>

<script>
	export default {
		mounted(){
      
        },
        props: ['introData'],
        methods: {
            fn() {
                
            }
        }
	}
</script>

<style>
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
		background: url('../../images/logo.png') center no-repeat;
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