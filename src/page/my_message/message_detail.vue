<template>
	<div class="message_detail_container main_container_box" :class="{slide_left: this.$store.state.spreadSidebar}" @touchstart="hideComponent">
		<slidebar></slidebar>
		<span class="ceo_icon"></span>

		<div class="chat_box">
			<div class="wrapper" id="wrapper">
				<div class="scroller">
					<div id="pullDown" class="pull_down">
						<span class="pullDownIcon"></span><span class="pullDownLabel">Pull down to refresh...</span>
					</div>

					<div class="msg_box" id="msgBox">

						<div class="patient_info_box content_box">
							<div class="person_img_box">
								<img src="../../images/connection4.jpg" alt="">
							</div>
							<div class="info_box">
								<div class="message_info">
									<span class="person_name">李溜溜</span>
									<span class="age">23</span>
									<span class="sex_icon female_icon"></span>
								</div>
								<div class="from_box">
									来自<span>xxxxxx</span>
								</div>
							</div>
						</div>

						<ul id="msgList" class="msg_list">
							<li class="dialog_box_mine">
								<span class="dialog content_box">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cumque aliquid ducimus perferendis ratione, optio aut praesentium quos fugiat at non odit voluptate obcaecati. Aperiam eos voluptas ducimus magni possimus?
								</span>
							</li>
							<li class="dialog_box_others">
								<span class="dialog content_box">123</span>
							</li>
						</ul>
					</div>

					<div id="pullUp" class="pull_uown">
						<span class="pullUpIcon"></span><span class="pullUpLabel">Pull up to refresh...</span>
					</div>
				</div>
			</div>
			<div>{{content}}</div>
			<div class="input_box">
				<span class="quick_reply_btn" @click.stop="toggleQuickReplyBox"></span>
				<textarea name="" id="" rows="1" contenteditable="true" @keyup="resizeTextarea($event, 1);"></textarea>
				<div class="send_box">
					<a href="javascript:;" class="send_btn">
						发送<!-- <pre class="tip" ng-if="isMsgEmpty">发送内容不能为空</pre> -->
					</a>
				</div>
				<div class="split_line"></div>
				<div class="quick_reply_out_box" id="quickReplyOutBox" @touchstart.stop="">
					<div class="quick_reply_box">
						<slider-delete :sliderConf="sliderConf" :noticeHideDeleteBtn="noticeHideDeleteBtn" v-for="item in quickReplyList">
							<div class="quick_reply_item">
								<p>{{item.text}}</p>
							</div>
						</slider-delete>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import slidebar from '../../components/common/sidebar.vue';
import sliderDelete from '../../components/common/slider_delete.vue';
import  '../../plugins/iscroll.js';


export default {
	data: function() {
		return {
			quickReplyList: [
				{'text': '你好，我是你的C医O王大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦'},
				{'text': '你好，我是你的C医O里小头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦'},
				{'text': '你好，我是你的C医O哈大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦'}
			],
			sliderConf:{//滑动配置  
                distance: 10,  
            },
            noticeHideDeleteBtn: false
		}
	},

	mounted() {
		this.noticeHideDeleteBtn = false;
		var myScroll,
			pullDownEl, pullDownOffset,
			pullUpEl, pullUpOffset,
			generatedCount = 0;

		function pullDownAction () {
			setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
				
				console.log('下拉刷新');
				myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
			}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
			
		}

		function pullUpAction () {
			// 上拉加载数据
			setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
				var el, li, i;
				el = document.getElementById('msgBox');

				var str = '<li class="dialog_box_mine"><span class="dialog content_box">上拉加载的模拟数据</span></li><li class="dialog_box_others"><span class="dialog content_box">123</span></li>';

				$('#msgList').append(str);
				
				myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
			}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
		}

		function loaded() {
			pullDownEl = document.getElementById('pullDown');
			pullDownOffset = pullDownEl.offsetHeight;
			pullUpEl = document.getElementById('pullUp');	
			pullUpOffset = pullUpEl.offsetHeight;
			
			myScroll = new iScroll('wrapper', {
				useTransition: true,
				topOffset: pullDownOffset,
				onRefresh: function () {
					if (pullDownEl.className.match('loading')) {
						pullDownEl.className = '';
						pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
					} else if (pullUpEl.className.match('loading')) {
						pullUpEl.className = '';
						pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
					}
				},
				onScrollMove: function () {
					if (this.y > 5 && !pullDownEl.className.match('flip')) {
						pullDownEl.className = 'flip';
						pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
						this.minScrollY = 0;
					} else if (this.y < 5 && pullDownEl.className.match('flip')) {
						pullDownEl.className = '';
						pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
						this.minScrollY = -pullDownOffset;
					} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
						pullUpEl.className = 'flip';
						pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
						this.maxScrollY = this.maxScrollY;
					} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
						pullUpEl.className = '';
						pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
						this.maxScrollY = pullUpOffset;
					}
				},
				onScrollEnd: function () {
					if (pullDownEl.className.match('flip')) {
						pullDownEl.className = 'loading';
						pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
						pullDownAction();	// Execute custom function (ajax call?)
					} else if (pullUpEl.className.match('flip')) {
						pullUpEl.className = 'loading';
						pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
						pullUpAction();	// Execute custom function (ajax call?)
					}
				}
			});
			
			setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
		}

		// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		loaded();
	},

	methods: {
		resizeTextarea(event, row) {
	        if (!event) {
	            return
	        }
	        if (!row)
	            row = 5;
	        var b = event.target.value.split("\n");
	        var c = 0;
	        c += b.length;
	        var d = event.target.cols;
	        if (d <= 10) {
	            d = 12
	        }
	        for (var e = 0; e < b.length; e++) {
	            if (b[e].length >= d) {
	                c += Math.ceil(b[e].length / d)
	            }
	        }
	        c = Math.max(c, row);
	        c = c > 4 ? 4 : c;
	        if (c != event.target.rows) {
	            event.target.rows = c;
	        }
	    },

	    toggleQuickReplyBox() {
	    	if($('#quickReplyOutBox').is(':visible')) {
	    		$('#quickReplyOutBox').slideUp(240);
	    	} else {
	    		$('#quickReplyOutBox').slideDown(240);
	    	}
	    },

	    hideComponent() {
	    	$('#quickReplyOutBox').slideUp(240);
	    	this.noticeHideDeleteBtn = true;
	    }
	},
	components: {
		slidebar,
		sliderDelete, 
	}
}
</script>

<style>
	
	.message_detail_container .input_box {
		width: 100%;
		min-height: 40px;
		position: absolute;
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 1000;
		font-size: 0;
		padding-top: 5px;
	}

	.message_detail_container .quick_reply_btn {
		display: inline-block;
		vertical-align: bottom;
		width: 12.5%;
		height: 40px;
		background: url('../../images/quick_reply_icon.png') center 4px no-repeat;
		background-size: 26px auto;
	}

	.message_detail_container textarea {
		overflow-x: hidden;
		overflow-y: auto;
		width: 70%;
		display: inline-block;
		vertical-align: bottom;
		box-sizing: border-box;
		border: none;
		outline: none;
		font-size: 14px;
		padding: 0 5px;
		margin-bottom: 16px;
		resize: none;
	}

	.message_detail_container .split_line {
		position: relative;
		top: -10px;
		margin-left: 12.5%;
		width: 70%;
		height: 0;
		border-bottom: 1px solid #dadbdd;
	}

	.message_detail_container .send_box {
		display: inline-block;
		vertical-align: bottom;
		width: 12.5%;
		padding-right: 5%;
		text-align: right;
		line-height: 40px;
		font-size: 14px;
	}

	.message_detail_container .quick_reply_out_box {
		font-size: 12px;
		padding: 0 8% 10px 6%;
		display: none;
	}

	.quick_reply_item {
		line-height: 40px;
	}

	.quick_reply_item p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 13px;
	}






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
	
	.message_detail_container .patient_info_box {
	    font-size: 0;
	    padding: 0.695652rem;
	}
	
	.message_detail_container .person_img_box,
	.message_detail_container .info_box {
	    display: inline-block;
	    vertical-align: middle;
	    box-sizing: border-box;
	}
	
	.message_detail_container .person_img_box {
	    width: 20%;
	    padding-top: 20%;
	    margin: 0 auto;
	    overflow: hidden;
	    position: relative;
	}
	
	.message_detail_container .person_img_box img {
	    width: 99%;
	    border-radius: 100px;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
	}
	
	.message_detail_container .info_box {
	    width: 80%;
	    font-size: 13px;
	    padding-left: 0.6rem;
	    line-height: 20px;
	}
	
	.message_detail_container .person_name,
	.message_detail_container .age,
	.sex_icon {
	    display: inline-block;
	    vertical-align: middle;
	}
	
	.message_detail_container .person_name {
	    font-size: 16px;
	}
	
	.message_detail_container .age {
	    margin-left: 0.772947rem;
	}
	
	.message_detail_container .sex_icon {
	    width: 17px;
	    height: 17px;
	    background: url('../../images/male_icon.png') center no-repeat;
	    background-size: 100% auto;
	}
	
	.message_detail_container .female_icon {
	    background-image: url('../../images/female_icon.png');
	}
	
	.message_detail_container .male_icon {
	    background-image: url('../../images/male_icon.png');
	}
	
	.message_detail_container .from_box {
	    color: #666;
	}
	
	.message_detail_container .from_box span {
	    color: #434a54
	}
	
	.message_detail_container .chat_box {
	    height: calc(100vh - 2.48rem);
	    text-align: left;
	    position: relative;
	    color: #434a54;
	    margin: 0 auto;
	}
	
	.message_detail_container .chat_box h4 {
	    text-align: center;
	    line-height: 50px;
	    border-bottom: 1px solid #ccc;
	    width: 95%;
	    margin: 0 auto;
	    margin-bottom: 10px;
	}
	
	.message_detail_container .msg_box {
	    overflow: hidden;
	    min-height: 100%;
	    padding: 3%;
	}
	
	.message_detail_container .wrapper #loadMore {
	    text-align: center;
	    margin: 0 0 10px 0;
	    font-size: 12px;
	    color: #aaa;
	}
	
	.message_detail_container .msg_list {
	    margin-top: 0.772947rem;
	}
	
	.message_detail_container .dialog_box_mine,
	.message_detail_container .dialog_box_others {
	    display: block;
	    margin-bottom: 0.772947rem;
	}
	
	.message_detail_container .dialog_box_mine {
	    text-align: right;
	}
	
	.message_detail_container .dialog_box_others {
	    text-align: left;
	}
	
	.message_detail_container .dialog {
	    position: relative;
	    display: inline-block;
	    max-width: 80%;
	    border-radius: 4px;
	    text-align: left;
	    padding: 10px;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	}
	
	.message_detail_container .dialog_box_mine .dialog {
	    background: #8fb9fb;
	    min-height: 32px;
	}
	
	.message_detail_container .dialog_box_others .dialog {
	    background: #fff;
	    min-height: 32px;
	}
	
	.message_detail_container .sys_tip {
	    line-height: 18px;
	    display: block;
	    width: 32%;
	    background: rgba(0, 0, 0, .06);
	    color: #fff;
	    text-align: center;
	    margin: 10px auto;
	}
	
	.message_detail_container .wrapper {
	    position: absolute;
	    z-index: 1;
	    top: 0;
	    bottom: 48px;
	    left: -9999px;
	    width: 100%;
	    overflow: auto;
	}
	
	.message_detail_container .scroller {
	    position: absolute;
	    z-index: 1;
	    width: 100%;
	    padding: 0;
	}
	
	.message_detail_container .pull_down,
	.pull_up {
	    background: #fff;
	    height: 40px;
	    line-height: 40px;
	    padding: 5px 10px;
	    font-weight: bold;
	    font-size: 14px;
	}
	
	.message_detail_container .pull_down .pullDownIcon,
	.message_detail_container .pull_up .pullUpIcon {
	    display: block;
	    float: left;
	    width: 40px;
	    height: 40px;
	    background: url(../../images/pull_icon.png) 0 0 no-repeat;
	    background-size: 40px 80px;
	    -webkit-transition-property: -webkit-transform;
	    -webkit-transition-duration: 250ms;
	}
	
	.message_detail_container .pull_down .pullDownIcon {
	    -webkit-transform: rotate(0deg) translateZ(0);
	}
	
	.message_detail_container .pull_up .pullUpIcon {
	    -webkit-transform: rotate(-180deg) translateZ(0);
	}
	
	.message_detail_container .pull_down.flip .pullDownIcon {
	    -webkit-transform: rotate(-180deg) translateZ(0);
	}
	
	.message_detail_container .pull_up.flip .pullUpIcon {
	    -webkit-transform: rotate(0deg) translateZ(0);
	}
	
	.message_detail_container .pull_down.loading .pullDownIcon,
	.message_detail_container .pull_up.loading .pullUpIcon {
	    background-position: 0 100%;
	    -webkit-transform: rotate(0deg) translateZ(0);
	    -webkit-transition-duration: 0ms;
	    -webkit-animation-name: loading;
	    -webkit-animation-duration: 2s;
	    -webkit-animation-iteration-count: infinite;
	    -webkit-animation-timing-function: linear;
	}
	
	@-webkit-keyframes loading {
	    from {
	        -webkit-transform: rotate(0deg) translateZ(0);
	    }
	    to {
	        -webkit-transform: rotate(360deg) translateZ(0);
	    }
	}
</style>