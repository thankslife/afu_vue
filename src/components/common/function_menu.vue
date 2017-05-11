<template>
    <div class="function_menu_out_box" :class="{active: isActive}">
        <span class="function_menu_btn" @click="upadteRightList" v-if="showFunctionMenuBtn"></span>
        <ul class="function_menu_list" v-bind:class="{active: isActive}">
            <li class="animated" :class="{bounceInRight: isAnimate[index]}" v-for="(item, index) in fnList" :style="'right: ' + rightList[index] + 'rem; animation-delay:' + 0.032 * index + 's;'">
                <router-link v-if="item.isLink" :to="item.to" class="fn_item" :style="'background-image: url(' + item.url + ');'"></router-link>
                <span v-else class="fn_item" :style="'background-image: url(' + item.url + ');'" @click="item.cb"></span>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                rightList: [],
                isAnimate: []
            }
        },
        methods: {
            upadteRightList() {
                if(this.isActive) {
                    for(var i = 0, len = this.fnList.length; i < len; i++) {
                        this.rightList[i] = 0;
                        this.isAnimate[i] = false;
                        $('.function_menu_out_box').css('width', '1.237rem');
                    }
                } else {
                    for(var i = 0, len = this.fnList.length; i < len; i++) {
                        this.rightList[i] = 1.8 * (i + 1);
                        $('.function_menu_out_box').css('width', (1.8 * len + 2) + 'rem');
                        this.isAnimate[i] = true;
                    }

                }
                this.isActive = !this.isActive;
            }
        },
        props: ['fnList'],
        computed: {
            showFunctionMenuBtn: function() {
                return this.fnList.length > 1;
            }
        }
    }
</script>

<style scoped>
    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .bounceInRight {
        -webkit-animation-name: bounceInRight;
        animation-name: bounceInRight;
    }

    .function_menu_out_box {
        position: fixed;
        z-index: 999;
        right: 0.58rem;
        bottom: 1.159rem;
        height: 1.237rem;
        overflow: hidden;
        height: 1.237rem;
        width: 1.237rem;
        transition: width .32s;
    }

    .function_menu_out_box.active {
        transition: width 0s;
    }

    .function_menu_btn,
    .function_menu_list li {
        position: absolute;
        right: 0;
        top: 0;
        width: 1.237rem;
        height: 1.237rem;
        font-size: 0;
    }

    .function_menu_btn {
        background: url('../../images/fn_toggle_btn.png') center no-repeat #76a6ef;
        background-size: 100% auto;
        animation: light_animate 1.5s infinite ease-in alternate;
        z-index: 2;
        border-radius: 1000px;
    }

    .fn_item {
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url('../../images/setting.png') center no-repeat #dfdfdf;
        background-size: 100% auto;
        font-size: 0;
        box-sizing: border-box;
        border-radius: 100px;

    }

    .function_menu_list {
        width: 0;
        overflow: hidden;
    }

    .function_menu_list li {
        transition: right .24s ease;
    }

    .function_menu_out_box.active .function_menu_list li {
        transition: right 0s;
    }

    .function_menu_list.active {
        width: auto;
    }

    @keyframes light_animate {
        from {
            box-shadow: 0 0 0 #76a6ef;
        }
        to {
            box-shadow: 0 0 5px #42fbeb;
        }
    }

    @-moz-keyframes light_animate {
        from {
            box-shadow: 0 0 0 #76a6ef;
        }
        to {
            box-shadow: 0 0 5px #42fbeb;
        }
    }

    @-webkit-keyframes light_animate {
        from {
            box-shadow: 0 0 0 #76a6ef;
        }
        to {
            box-shadow: 0 0 5px #42fbeb;
        }
    }

    @-o-keyframes light_animate {
        from {
            box-shadow: 0 0 0 #76a6ef;
        }
        to {
            box-shadow: 0 0 5px #42fbeb;
        }
    }

    @-webkit-keyframes bounceInRight {
      from, 60%, 75%, 90%, to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }

      from {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
      }

      75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
      }

      90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
      }

      to {
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes bounceInRight {
      from, 60%, 75%, 90%, to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }

      from {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
      }

      75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
      }

      90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
      }

      to {
        -webkit-transform: none;
        transform: none;
      }
    }
</style>
