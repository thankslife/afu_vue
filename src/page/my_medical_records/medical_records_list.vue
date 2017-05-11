<template>
	<div class="main_container_box" :class="{slide_left: this.$store.state.spreadSidebar}">
		<slidebar></slidebar>
		<span class="ceo_icon"></span>
		<filter-bar :filterList="filterList" :cancelFilter="cancelFilter" :applyFilter="applyFilter"></filter-bar>
		<function-menu :fnList="fnList" v-if="isOver"></function-menu>
		<div class="main_contain medical_records_list_main_contain">
			<ul class="medical_records_list">
				<li class="patient_info_box content_box" v-for="item in medicalRecordsList">
					<div class="person_img_box">
						<img :src="item.imgSrc">
					</div>
					<div class="info_box">
						<div class="patient_info">
							<p><span class="person_name">{{item.name}}</span></p>
							<p>
								<span class="age">{{item.age}}</span>
								<span class="sex_icon" :class="{female_icon: item.sex == 'female', male_icon: item.sex == 'male'}"></span>
							</p>
						</div>
						<div class="from_box">
							<p class="from">来自<span>{{item.from}}</span></p>
							<p>{{item.time}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import slidebar from '../../components/common/sidebar.vue';
	import filterBar from '../../components/common/filter_bar.vue';
	import functionMenu from '../../components/common/function_menu.vue';

	export default {
	name: 'my_connection',
	data: function() {
		return {
			filterList: [
				{
					'text': '等待接诊',
					'isActive': false
				},
				{
					'text': '已接诊',
					'isActive': false
				},
				{
					'text': '已结束',
					'isActive': false
				},
			],
			medicalRecordsList: [
				{
					"name": "李溜溜",
					"age": 23,
					"sex": "female",
					"imgSrc": require('../../images/connection3.jpg'),
					"from": "朗云医生",
					"time": "2017-4-25"
				},
				{
					"name": "李溜溜",
					"age": 23,
					"sex": "male",
					"imgSrc": require('../../images/connection2.jpg'),
					"from": "我的病患",
					"time": "2017-4-25"
				}
			],
			fnList: [
				{
                    url: require('../../images/save_medical_records_icon.png'),
                    isLink: false,
                    cb: function() {
                        console.log('若点击按钮后的事件处理函数');
                    }
                }
			],
			isOver: false
		}
	},
	methods: {
		/**
		 * 由父组件实现取消使用过滤条件的函数再传递给子组件filter-bar使用，对接数据时可在此函数中书写取消过滤条件时请求数据的代码
		 * @return {[type]} [description]
		 */
		cancelFilter() {
			this.isOver = false;

			this.medicalRecordsList = [
				{
					"name": "李溜溜",
					"age": 23,
					"sex": "female",
					"imgSrc": require('../../images/connection3.jpg'),
					"from": "朗云医生",
					"time": "2017-4-25"
				},
				{
					"name": "李溜溜",
					"age": 23,
					"sex": "male",
					"imgSrc": require('../../images/connection2.jpg'),
					"from": "我的病患",
					"time": "2017-4-25"
				}
			];
		},

		/**
		 * 由父组件实现使用过滤条件的函数再传递给子组件filter-bar使用，对接数据时可在此函数中书写使用相应过滤条件时请求数据的代码
		 * @param  {[type]} index [description]
		 * @return {[type]}       [description]
		 */
		applyFilter(index) {
			console.log('使用过滤条件' + index);
			this.medicalRecordsList = [{
				"name": "模拟过滤数据",
				"age": 23,
				"sex": "female",
				"imgSrc": require('../../images/connection3.jpg'),
				"from": "朗云医生",
				"time": "2017-4-25"
			}];

			if(index == 2) {
				this.isOver = true;
			} else {
				this.isOver = false;
			}
		}
	},
	components: {
		slidebar,
		filterBar,
		functionMenu
	}
}
</script>

<style>

	.main_container_box {
		text-align: center;
		font-size: 13px;
	}

	.main_container_box .ceo_icon {
        display: inline-block;
        width: 3.092rem;
        height: 1rem;
        background: url('../../images/ceo_icon.png') center no-repeat;
        background-size: 100% auto;
        font-size: 0;
        margin-top: .8rem;
        margin-bottom: .6rem;
    }

    .main_container_box .filter_bar {
    	background: #66c6d6;
    	color: #fff;
    }

    .main_container_box .filter_item.active span {
    	background: #fff;
    	color: #66c6d6;
    }

    .main_contain {
        padding-top: 0.618rem;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .medical_records_list {
    	width: 100%;
    }

    .patient_info_box {
    	text-align: left;
    	margin-bottom: 5.56%;
    }

    .patient_info_box {
	    font-size: 0;
	    padding: 0.695652rem;
	}

	.person_img_box,
	.info_box {
	    display: inline-block;
	    vertical-align: middle;
	    box-sizing: border-box;
	}

	.person_img_box {
	    width: 20%;
	    padding-top: 20%;
	    margin: 0 auto;
	    overflow: hidden;
	    position: relative;
	}

	.person_img_box img {
	    width: 99%;
	    border-radius: 100px;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
	}

	.info_box {
	    width: 80%;
	    font-size: 13px;
	    padding-left: 0.6rem;
	    line-height: 32px;
	}

	.person_name,
	.age,
	.sex_icon {
	    display: inline-block;
	    vertical-align: middle;
	}

	.person_name {
	    font-size: 16px;
	}

	.sex_icon {
	    width: 17px;
	    height: 17px;
	    background: url('../../images/male_icon.png') center no-repeat;
	    background-size: 100% auto;
	}

	.female_icon {
	    background-image: url('../../images/female_icon.png');
	}

	.male_icon {
	    background-image: url('../../images/male_icon.png');
	}

	.patient_info, .from_box {
		display: inline-block;
		vertical-align: top;
	}

	.from_box {
		float: right;
		text-align: right;
	}

	.from_box {
		color: #aaa;
	}

	.from span {
		color: #929292;
		margin-left: 5px;
	}

</style>