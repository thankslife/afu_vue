<template>
	<div class="filter_bar">
		<div v-for="(item, index) in filterList" class="filter_item" :class="{'active': item.isActive}" @click="handleActive(index)">
			<span>{{item.text}}</span>
		</div>
	</div>
</template>

<script>

export default {
	props: ['filterList', 'cancelFilter', 'applyFilter'],
    data: function() {
        return {
            tabList: null
        }
    },
    mounted() {
        this.tabList = this.filterList;
    },
    methods: {
        /**
         * 根据用户的点击~切换被选中的过滤条件，同时通知父组件是取消还是应用过滤条件并加载对应场景的数据，对应的事件需在父组件中实现
         * @param  {[type]} index [description]
         * @return {[type]}       [description]
         */
        handleActive(index) {
            
            if(this.tabList[index].isActive) {
                this.tabList[index].isActive = false;
                this.cancelFilter();

            } else {
                for(var i = 0, len = this.tabList.length; i < len; i++) {
                    this.tabList[i].isActive = false;
                }
                this.tabList[index].isActive = true;
                this.applyFilter(index);
            }
        }
    }
}
</script>

<style scoped>
	.filter_bar {
    	display: flex;
    	padding: 0.386473rem 0;
    	line-height: 0.927536rem;
        text-align: center;
    }

	.filter_item {
    	flex: 1;
    }

    .filter_item span {
    	border-radius: 100px;
    	padding: 0 0.772947rem;
    	line-height: 24px;
    	display: inline-block;
    }
</style>