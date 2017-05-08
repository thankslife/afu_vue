<template>
	<div class="message_detail_container main_container_box" :class="{slide_left: this.$store.state.spreadSidebar}" @touchstart="hideComponent">
		<slidebar></slidebar>
		<span class="ceo_icon"></span>

		<div class="chat_box" :class="{blur_status: this.blurStatus}">
			<div class="wrapper" id="wrapper">
				<div class="scroller">
					<div id="pullDown">
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
							<template v-for="item in msgList">
								<li class="dialog_box_mine" v-if="item.dialogStatus == 'mine'">
									<span class="dialog content_box">{{item.text}}</span>
								</li>
								<li class="dialog_box_others" v-else-if="item.dialogStatus == 'others'">
									<span class="dialog content_box">{{item.text}}</span>
								</li>
								<li class="dialog_box_sys" v-else-if="item.dialogStatus == 'sys'">
									<span class="sys_tip">{{item.text}}</span>
								</li>
							</template>
							<!-- <li class="dialog_box_mine">
								<span class="dialog content_box">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cumque aliquid ducimus perferendis ratione, optio aut praesentium quos fugiat at non odit voluptate obcaecati. Aperiam eos voluptas ducimus magni possimus?
								</span>
							</li>
							<li class="dialog_box_others">
								<span class="dialog content_box">123</span>
							</li>
                            <li class="dialog_box_others">
                                <span class="dialog content_box">你好，我是你的C医O王大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦</span>
                            </li> -->
						</ul>
					</div>

					<div id="pullUp">
						<span class="pullUpIcon"></span><span class="pullUpLabel">Pull up to refresh...</span>
					</div>
				</div>
			</div>
			<div class="input_box">
				<span class="quick_reply_btn" @click.stop="toggleQuickReplyBox" @touchstart.stop=""></span>
				<textarea name="" id="" rows="1" cols="18" @keyup="resizeTextarea($event, 1);" placeholder="请输入你的信息" v-model="msgContent" id="msgContent" class="msg_content" @focus="hideComponent">
        <div></div>
                </textarea>
				<div class="send_box">
					<span class="send_btn" :class="{send_status: send_status, more_fn_status: more_fn_status}" @click="handleSendStatus" @touchstart.stop=""></span>
					<div class="more_send_fn_btn_box" :class="{show: !more_fn_status}">
						<span :class="{flipInX: !more_fn_status}" class="animated more_send_fn_btn ask_medical_records" @touchstart.stop=""  @click="askMedicalRecords"></span>
						<span :class="{flipInX: !more_fn_status}" class="animated more_send_fn_btn acquaintance_zoned" @touchstart.stop=""></span>
						<span :class="{flipInX: !more_fn_status}" class="animated more_send_fn_btn pay_tip" @touchstart.stop=""></span>
					</div>
				</div>
				<div class="split_line"></div>
				<div class="quick_reply_out_box" id="quickReplyOutBox" @touchstart.stop="">
					<div class="quick_reply_box">
						<slider-delete :sliderConf="sliderConf" :hideDeleteBtn="item.hideDeleteBtn" v-for="(item, index) in quickReplyList" :key="index" v-on:removeDeleteItem="removeDeleteItem(index)">
							<div class="quick_reply_item" @dblclick="selectQuickReply(index)">
								<p>{{item.text}}</p>
							</div>
						</slider-delete>
					</div>
                    <div class="add_quick_reply_item" @click="addQuickReply"></div>
				</div>
			</div>
		</div>
        <div class="alert_hover animated" :class="{show: blurStatus}" @click.self="hideAlert">
            <div class="add_quick_reply_box">
                <h3 class="quick_reply_box_title">新增常用语</h3>
                <div class="content_box">
                    <textarea class="quick_reply_area" v-model="newQuickReply" placeholder="请输入新增常用语"></textarea>
                </div>
                <div class="confirm_btn_box">
                    <span @click="confirmAddQuickReply">确认</span>
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
				{'text': '你好，我是你的C医Q王大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'hideDeleteBtn': false},
				{'text': '你好，我是你的C医O里小头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'hideDeleteBtn': false},
				{'text': '你好，我是你的C医O哈大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'hideDeleteBtn': false},
                {'text': '你好，我是你的C医O王大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'hideDeleteBtn': false},
                {'text': '你好，我是你的C医O里小头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'hideDeleteBtn': false},
                {'text': '你好，我是你的C医O哈大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'hideDeleteBtn': false}
			],
			msgList: [
				{'text': '你好，我是你的C医O王大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'dialogStatus': 'mine'},
				{'text': '123', 'dialogStatus': 'others'},
				{'text': '你好，我是你的C医O王大头，我擅长治疗的疾病是我又来凑字数了，测试文本过多时候的显示方式，憋文字憋的好辛苦', 'dialogStatus': 'others'},
				{'text': 'C医O请求你发送病历', 'dialogStatus': 'sys'},
			],
			sliderConf:{//左滑删除组件配置，设置为左滑距离超过10时显示删除按钮
                distance: 10,
            },
            myScroll: null,
            // 出现弹框时弹出蒙层，须将背景虚化，由此变量标识
            blurStatus: false,
            newQuickReply: '',
            msgContent: '',
            send_status: false,
            // 默认情况下输入框为空，此时放按钮处于点击后就展开隐藏的功能按钮的状态
            more_fn_status: true
		}
	},

	mounted() {
		var myScroll,
			pullDownEl, pullDownOffset,
			pullUpEl, pullUpOffset,
			generatedCount = 0;

		var that = this;

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
				console.log(this.msgList);
				this.msgList = this.msgList.concat([{'text': '上拉加载的模拟数据', 'dialogStatus': 'others'}, {'text': '上拉加载的模拟数据', 'dialogStatus': 'mine'}]);
				// $('#msgList').append(str);

				setTimeout(function() {
					myScroll.refresh();
					myScroll.scrollToElement($('#msgList li:last-child')[0], 240);
				}, 240);
			}.bind(this), 1000);	// <-- Simulate network congestion, remove setTimeout from production!
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
						pullDownAction.call(that);	// Execute custom function (ajax call?)
					} else if (pullUpEl.className.match('flip')) {
						pullUpEl.className = 'loading';
						pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
						pullUpAction.call(that);	// Execute custom function (ajax call?)
					}
				}
			});

			setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
		}

		// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		loaded();

		this.myScroll = myScroll;

	},

	methods: {
		resizeTextarea(event, row) {
            if (!event) {
                return
            }
            if (!row) {
                row = 3;
            }
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
                this.quickReplyList.forEach(function(item, index) {
                    if(!item.hideDeleteBtn) {
                        item.hideDeleteBtn = true;
                    }
                });
	    	} else {
	    		$('#quickReplyOutBox').slideDown(240);
	                this.quickReplyList.forEach(function(item, index) {
	                if(item.hideDeleteBtn) {
	                    item.hideDeleteBtn = false;
	                }
	            });
	    	}
	    },

	    hideComponent() {
	    	$('#quickReplyOutBox').slideUp(240);
            this.quickReplyList.forEach(function(item, index) {
                if(!item.hideDeleteBtn) {
                    item.hideDeleteBtn = true;
                }
            });
            this.more_fn_status = true;
	    },

        removeDeleteItem(index) {
            this.quickReplyList = this.quickReplyList.slice(1);
        },

        addQuickReply() {
            this.blurStatus = true;
        },

        hideAlert() {
            this.blurStatus = false;
        },

        confirmAddQuickReply() {
            this.blurStatus = false;

            if(this.newQuickReply != '') {
                this.quickReplyList.push({
                    'text': this.newQuickReply,
                    'hideDeleteBtn': false
                });

                this.newQuickReply = '';
            }
        },

        selectQuickReply(index) {
            this.msgContent = this.quickReplyList[index].text;
            this.toggleQuickReplyBox();
            $('#msgContent').facus();
        },

        handleSendStatus() {
        	if(this.send_status) {
        		this.sendMsg();
        		this.msgContent = '';
        		console.log('发送');
        		
        	} else {
        		this.more_fn_status = !this.more_fn_status;
        	}
        },

        askMedicalRecords() {
        	this.msgList.push({'text': 'C医O请求你发送病历', 'dialogStatus': 'sys'});
        	// $('#msgList').append('<li><span class="sys_tip"></span></li>');
        	this.myScroll.refresh();
        	this.myScroll.scrollToElement($('#msgList li:last-child')[0], 240);
        	this.more_fn_status = true;
        },

        sendMsg() {
	        var $msg = $('#msgContent');
	        if(this.msgContent === '') {
	            return;
	        } else {

	            this.msgList.push({'text': this.msgContent, 'dialogStatus': 'mine'});
	        	
	            this.msgContent = '';
	            setTimeout(function() {
	            	this.myScroll.refresh();
	            	this.myScroll.scrollToElement($('#msgList li:last-child')[0], 240);

	            }.bind(this), 800);
	        }
	    },
	},
	components: {
		slidebar,
		sliderDelete,
	},
	watch: {
		msgContent: function(val) {
			if(val != '') {
				this.send_status = true;
			} else {
				this.send_status = false;
			}
		}
	}
}
</script>

<style>

	.message_detail_container textarea {
		resize: none;
	}

    .alert_hover {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(232, 232, 232, .8);
        display: none;
        z-index: 100000;
    }

    .alert_hover.show {
        display: block;
        animation-name: fadeIn;
    }

    .chat_box.blur_status {
        filter: blur(3px);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes flipInX {
    	from {
    		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    		transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
	    	-webkit-animation-timing-function: ease-in;
	    	animation-timing-function: ease-in;
	    	opacity: 0;
	    }

	  	40% {
	  		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
		    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
		    -webkit-animation-timing-function: ease-in;
		    animation-timing-function: ease-in;
	  	}

	  	60% {
		    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
		    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
		    opacity: 1;
	  	}

	  	80% {
		    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
		    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
	  	}

	  	to {
		    -webkit-transform: perspective(400px);
		    transform: perspective(400px);
	  	}
	}

	.flipInX {
		animation-name: flipInX;
	}

    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    .add_quick_reply_box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
        background: #fff;
        width: 90%;
    }

    .add_quick_reply_box .quick_reply_box_title {
        border-radius: 8px 8px 0 0;
        background: #333;
        color: #fff;
        line-height: 3;
    }

    .add_quick_reply_box .content_box {
        margin: 32px auto 20px auto;
        width: 90%;
        height: 150px;
    }

    .add_quick_reply_box .quick_reply_area {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
    }

    .message_detail_container .confirm_btn_box {
    	line-height: 40px;
    	text-align: center;
    	margin-bottom: 20px;
    }

    .confirm_btn_box span {
    	display: inline-block;
    	border-radius: 100px;
    	background: #8fb9fb;
    	color: #fff;
    	min-width: 40px;
    }



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
		background: url('../../images/quick_reply_icon.png') center 6px no-repeat;
		background-size: 26px auto;
	}

	.message_detail_container .msg_content {
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
		margin-bottom: 14px;
        min-height: 16px;
        font-family: 'Microsoft Yahei';
        letter-spacing: 1px;
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
		height: 40px;
		font-size: 14px;
		position: relative;
	}

	.message_detail_container .more_send_fn_btn_box {
		position: absolute;
		right: 10px;
		bottom: 110%;
		background: #fff;
		border-radius: 100px;
		white-space: nowrap;
		padding: 10px 20px;
		box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);
		display: none;
	}

	.message_detail_container .more_send_fn_btn_box.show {
		display: block;
	}

	.more_send_fn_btn + .more_send_fn_btn {
		margin-left: 20px;
	}

	.more_send_fn_btn_box .more_send_fn_btn {
		display: inline-block;
		vertical-align: middle;
		width: 28px;
		height: 28px;
		background: url('../../images/ask_medical_records_icon.png') center no-repeat;
		background-size: 100% auto;
	}

	.more_send_fn_btn.ask_medical_records {
		background-image: url('../../images/ask_medical_records_icon.png');
	}

	.more_send_fn_btn.acquaintance_zoned {
		background-image: url('../../images/acquaintance_zoned_icon.png');
	}

	.more_send_fn_btn.pay_tip {
		background-image: url('../../images/pay_tip_icon.png');
	}

	.message_detail_container .send_btn {
		width: 28px;
		height: 40px;
		display: inline-block;
		background: url('../../images/retract_status_icon.png') center 5px no-repeat;
		background-size: 100% auto;
	}

	.message_detail_container .send_btn.send_status {
		background-image: url('../../images/send_status_icon.png');
	}

	.send_btn.more_fn_status {
		background-image: url('../../images/more_fn_status_icon.png');
	}

	.send_btn.retract_status {
		background-image: url('../../images/retract_status_icon.png');
	}

	.message_detail_container .quick_reply_out_box {
		font-size: 12px;
		padding: 0 8% 10px 6%;
		display: none;
	}

	.message_detail_container .quick_reply_item {
		line-height: 40px;
	}

	.message_detail_container .quick_reply_item p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 13px;
	}

    .message_detail_container .add_quick_reply_item {
        height: 40px;
        background: url(../../images/add_item_icon.png) center no-repeat;
        background-size: auto 16px;
    }

    .message_detail_container .quick_reply_box {
        max-height: 160px;
        overflow-y: auto;
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
	    min-height: calc(100vh - 45px - 2.4rem);
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

    .message_detail_container .msg_list li {
        line-height: 1.5;
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

	.message_detail_container .dialog_box_sys {
		text-align: center;
	}

	.message_detail_container .sys_tip {
	    line-height: 22px;
	    height: 22px;
	    display: inline-block;
	    background: #dadada;
	    color: #fff;
	    text-align: center;
	    margin: 10px auto;
	    padding: 0 10px;
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

	.message_detail_container #pullDown,
	.message_detail_container #pullUp {
	    height: 40px;
	    line-height: 40px;
	    padding: 5px 10px;
	    text-align: center;
	}

	.message_detail_container #pullDown span,
	.message_detail_container #pullUp span {
		display: inline-block;
		vertical-align: middle;
	}

	.message_detail_container #pullDown .pullDownIcon,
	.message_detail_container #pullUp .pullUpIcon {
	    width: 20px;
	    height: 20px;
	    background: url(../../images/pull_icon.png) 0 0 no-repeat;
	    background-size: 20px 40px;
	    -webkit-transition-property: -webkit-transform;
	    -webkit-transition-duration: 250ms;
	}

	.message_detail_container #pullDown .pullDownIcon {
	    -webkit-transform: rotate(0deg) translateZ(0);
	}

	.message_detail_container #pullUp .pullUpIcon {
	    -webkit-transform: rotate(-180deg) translateZ(0);
	}

	.message_detail_container #pullUp {
		transform: translateY(100px);
		transition: transform .5s;
	}

	.message_detail_container #pullUp.flip,
	.message_detail_container #pullUp.loading {
		transform: translateY(-32px);
	}

	.message_detail_container #pullDown.flip .pullDownIcon {
	    -webkit-transform: rotate(-180deg) translateZ(0);
	}

	.message_detail_container #pullUp.flip .pullUpIcon {
	    -webkit-transform: rotate(0deg) translateZ(0);
	}

	.message_detail_container #pullDown.loading .pullDownIcon,
	.message_detail_container #pullUp.loading .pullUpIcon {
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