<template>
    <div class="search_out_box">
        <span class="search_btn"></span>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .search_out_box {
        position: absolute;
        z-index: 999;
        right: 1.237rem;
        top: .85rem;
    }

    .search_btn {
        display: inline-block;
        width: 0.773rem;
        height: 0.773rem;
        background: url('../../images/search_btn_icon.png') center no-repeat;
        background-size: 100% auto;
    }
</style>
