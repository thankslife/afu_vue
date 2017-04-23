<template>
    <div class="home_container">
        <function-menu :fnList="fnList"></function-menu>
    	<slidebar></slidebar>
        <search></search>
    	<doctor-info-banner :hideProfileImg="true"></doctor-info-banner>
    	<intro-tab-menu :introData="introData"></intro-tab-menu>
        <div class="main_contain">
            <div class="contain_item content_box">
                <div class="item_name_box">
                    <span class="item_icon my_order"></span>
                    <p>我的订单</p>
                </div>
                <div class="item_content_box">
                    新增订单<strong>{{orderNum}}</strong>个
                </div>
            </div>

            <div class="contain_item content_box">
                <div class="item_name_box">
                    <span class="item_icon my_message"></span>
                    <p>我的留言</p>
                </div>
                <div class="item_content_box">
                    留言消息<strong>{{messageNum}}</strong>个
                </div>
            </div>

            <div class="contain_item content_box">
                <div class="item_name_box">
                    <span class="item_icon my_connection"></span>
                    <p>我的人脉</p>
                </div>
                <div class="item_content_box">
                    新加入你的人脉
                    <ul class="connection_list">
                        <li v-for="item in connectionList">
                            <span class="connection_personal_img" :style="'background-image: url(' + item.imgUrl + ');'"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="contain_item content_box">
                <div class="item_name_box">
                    <span class="item_icon my_wallet"></span>
                    <p>我的钱包</p>
                </div>
                <div class="item_content_box">
                    你有<strong>{{income}}</strong>笔新收入
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import slidebar from '../../components/common/sidebar.vue';
import search from '../../components/common/search.vue';
import doctorInfoBanner from '../../components/common/doctor_info_banner.vue';
import introTabMenu from '../../components/common/intro_tab_menu.vue';
import functionMenu from '../../components/common/function_menu.vue';

export default {
	name: 'home',
	methods: {
		reload() {
			window.location.reload();
		}
	},
	data: function() {
		return {
			introData: [
                {
    				name: '评分',
    				value: '8,396',
    				url: require('../../images/score_icon.png')
    			},
    			{
    				name: '患者',
    				value: '153',
    				url: require('../../images/score_icon.png')
    			},
    			{
    				name: '同行',
    				value: '8,396',
    				url: require('../../images/score_icon.png')
    			}
            ],
            fnList: [
                {
                    url: require('../../images/setting.png'),
                    isLink: false,
                    cb: function() {
                        console.log('若点击按钮后的事件处理函数');
                    }
                },
                {
                    url: require('../../images/setting.png'),
                    isLink: true,
                    to: '/calendars',
                    cb: function() {
                        console.log('若点击按钮后的事件处理函数');
                    }
                },
                {
                    url: require('../../images/setting.png'),
                    isLink: false,
                    cb: function() {
                        console.log('若点击按钮后的事件处理函数');
                    }
                },
                {
                    url: require('../../images/setting.png'),
                    isLink: false,
                    cb: function() {
                        console.log('若点击按钮后的事件处理函数');
                    }
                },
            ],
            connectionList: [
                {
                    imgUrl: require('../../images/connection1.jpg')
                },
                {
                    imgUrl: require('../../images/connection2.jpg')
                },
                {
                    imgUrl: require('../../images/connection3.jpg')
                },
                {
                    imgUrl: require('../../images/connection4.jpg')
                }
            ],
            orderNum: 16,
            messageNum: 3,
            income: 9,
		}
	},
	components: {
		slidebar,
        search,
		doctorInfoBanner,
		introTabMenu,
        functionMenu
	},
	create() {

	}
}
</script>


<style scoped>

    .main_contain {
        padding-top: 0.618rem;
        color: #434a54;
    }

    .contain_item {
        display: table;
        width: 90%;
        margin: 1rem auto;
        padding: 1rem 0;
    }

    .item_name_box, .item_content_box {
        display: table-cell;
        vertical-align: middle;
        text-align: left;
    }

    .item_name_box {
        width: 46%;
        text-align: center;
        padding-right: 10%;
    }

    .item_icon {
        display: inline-block;
        width: 1.546rem;
        height: 1.546rem;
        background: url('../../images/my_wallet_icon.png') center no-repeat #2ab0c3;
        background-size: 100% auto;
        border-radius: 1000px;
        margin-bottom: 0.386rem;
    }

    .my_order {
        background-image: url('../../images/my_order_icon.png');
    }

    .my_message {
        background-image: url('../../images/my_message_icon.png');
    }

    .my_connection {
        background-image: url('../../images/my_connection_icon.png');
    }

    .my_order {
        background-image: url('../../images/my_order_icon.png');
    }

    .item_content_box strong {
        font-size: 18px;
        font-weight: bolder;
        margin: 0 5px;
        vertical-align: text-bottom;
    }

    .connection_list {
        font-size: 0;
    }

    .connection_list li {
        display: inline-block;
        vertical-align: middle;
        width: 1.237rem;
        height: 1.237rem;
        margin-right: 0.386rem;
        margin-top: 0.58rem;
    }

    .connection_list .connection_personal_img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 1000px;
        background: url('../../images/default_personal_img.png') center no-repeat;
        background-size: 100% auto;
    }
</style>
