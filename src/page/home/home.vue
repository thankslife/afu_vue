<template>
    <div class="home_container main_container_box" :class="{slide_left: this.$store.state.spreadSidebar}">
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
                    <template v-if="orderData">
                        <p>你有<strong>{{orderData.newOrder}}</strong>个新病历</p>
                        <p>你有<strong>{{orderData.transferOrder}}</strong>个转诊病历</p>
                    </template>
                    <template v-else>
                        <router-link to="/calendars">点击进入患者接诊区</router-link>
                    </template>

                </div>
            </div>

            <div class="contain_item content_box">
                <div class="item_name_box">
                    <span class="item_icon my_message"></span>
                    <p>我的留言</p>
                </div>
                <div class="item_content_box">
                    <template v-if="messageNum">
                        <p>你有<strong>{{messageNum}}</strong>条未读消息</p>
                    </template>
                    <template v-else>
                        <router-link to="/calendars">点击以观看留言消息</router-link>
                    </template>
                </div>
            </div>

            <div class="contain_item content_box">
                <div class="item_name_box">
                    <span class="item_icon my_connection"></span>
                    <p>我的人脉</p>
                </div>
                <div class="item_content_box">
                    <template v-if="connectionList">
                        新加入你的人脉
                        <ul class="connection_list">
                            <li v-for="item in connectionList">
                                <span class="connection_personal_img" :style="'background-image: url(' + item.imgUrl + ');'"></span>
                            </li>
                        </ul>
                    </template>
                    <template v-else>
                        <router-link to="/calendars">点击看看你的人脉圈增加你的人脉网络</router-link>
                    </template>
                </div>
            </div>

            <template v-if="income">
                <div class="contain_item content_box">
                    <div class="item_name_box">
                        <span class="item_icon my_wallet"></span>
                        <p>我的钱包</p>
                    </div>
                    <div class="item_content_box">
                        你有<strong>{{income}}</strong>笔新收入
                    </div>
                </div>
            </template>
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
            orderData: {
                newOrder: 16,
                transferOrder: 10
            },
            messageNum: 9,
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

    body {
        background: #f4f5f7;
    }

    .main_contain {
        padding-top: 0.618rem;
        color: #434a54;
    }

    .contain_item {
        display: table;
        width: 90%;
        margin: 1rem auto;
        padding: 1rem 0;
        position: relative;
    }

    .contain_item:before {
        content: '';
        position: absolute;
        left: 40%;
        top: 0;
        bottom: 0;
        width: 0;
        border-right: 1px solid #eaeced;
    }

    .item_name_box, .item_content_box {
        display: table-cell;
        vertical-align: middle;
        text-align: left;
    }

    .item_name_box {
        width: 50%;
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

    .item_content_box {
        line-height: 1.5;
    }

    .item_content_box strong {
        font-size: 20px;
        font-weight: bolder;
        margin: 0 10px;
        vertical-align: middle;
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
