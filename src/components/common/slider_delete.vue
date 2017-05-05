<template>
    <div class="slider_delete"
        @touchstart.stop="touchStart($event)"   
        @touchend.stop="touchEnd($event)"  
        @touchmove.stop="touchMove($event)">  
        <div class="delete_item" :class="{delete_status: (showDeleteBtn && noticeHideDeleteBtn)}">
            <slot></slot>
        </div>
        <span class="deleta_btn" :class="{show: (showDeleteBtn && noticeHideDeleteBtn)}"></span>
    </div>
</template>

<script>
    /*  
     * 滑动配置。distance 滑动距离 
     */  
    export default({
        data() {
            return {
                startPos:{x:0,y:0},
                endPos:{x:0,y:0},
                showDeleteBtn: false
            }
        },
        mounted() {
            console.log(this.noticeHideDeleteBtn);
        },
        props: ['sliderConf', 'noticeHideDeleteBtn'],
        methods: {
            touchStart(e) {
                e.preventDefault();
                this.startPos.x = e.targetTouches[0].screenX;
                console.log(this.startPos.x);
                // this.transformStartX = this.transformX;  
            },
            touchMove(e) {
                e.preventDefault();
                var x = e.targetTouches[0].screenX; 
                var temp = this.startPos.x - x; 
                if(temp > this.sliderConf.distance) {
                    this.showDeleteBtn = true;
                } else {
                    this.showDeleteBtn = false;
                }
            }, 
            touchEnd(e) {
                console.log(this.showDeleteBtn, '-----------------',this.noticeHideDeleteBtn);
                e.preventDefault();
                var endX = e.changedTouches[0].pageX;
                console.log(endX, '===========', endX - this.startPos.x);
                if(endX - this.startPos.x > -10) {
                    this.showDeleteBtn = false;
                }
            }
        }  
    })
</script>

<style scoped>

    .slider_delete {
        white-space: nowrap;
        font-size: 0;
        position: relative;
    }

    .delete_item {
        height: 40px;
        width: 100%;
        transition: width .24s;
    }

    .delete_item.delete_status {
        width: calc(100% - 50px);
    }

    .deleta_btn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: width .24s, opacity .24s;
        width: 0;
        height: 32px;
        background: url('../../images/delete_btn_icon.png') right center no-repeat #fff;
        background-size: 20px auto;
        box-shadow: 5px 0 10px 10px #fff;
        opacity: 0;
    }

    .deleta_btn.show {
        width: 50px;
        opacity: 1;
    }
</style>