<template>
    <div>
        <div class="form_date">
            <span class="add-on"><i class="icon-remove"></i></span>
            <span class="add-on"><i class="icon-th"></i></span>
        </div>

        <div class="result_box content_box">
            <div class="date_box">
                <span class="date">{{resultData.date}}</span>
                <span class="momth">{{resultData.momth}}</span>
            </div>
            <div class="info_box">
                <div class="time">
                    <i class="icon time_icon"></i>
                    <span>{{resultData.time}}</span>
                </div>
                <div class="person">
                    <i class="icon person_icon"></i>
                    <span>{{resultData.person}}</span><span>{{resultData.age}}</span>
                    <i class="icon" :class="{female_icon: resultData.sex == 'female', male_icon: resultData.sex == 'male'}"></i>
                </div>
                <div class="location">
                    <i class="icon location_icon"></i>
                    <span>{{resultData.loaction}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../plugins/bootstrap-datetimepicker.min.js'
    import '../../plugins/bootstrap-datetimepicker.zh-CN.js'
    import '../../style/bootstrap-datetimepicker.css'
    import fetch from '../../config/fetch.js'

    export default {
        mounted() {
            var that = this;
            $('.form_date').datetimepicker({
                language:  'zh-CN',
                weekStart: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                minView: 2,
                switch: false,
                forceParse: 0
            }).on('changeDate', function(ev){
                console.log(ev);
                // 日期改变事件处理函数~

                that.$http.post('/api/calendarData')
                .then(function (response) {
                    that.resultData = response.data.data[ev.date.getDate()] || response.data.data['default'];
                    // console.log(response.data.data);
                })
                .catch(function (code) {
                    console.log(code);
                });
            });
        },
        data: function() {
            return {
                resultData: {
                    "date": "1",
                    "momth": "5",
                    "time": "12:00",
                    "person": "秋世韵",
                    "age": "23",
                    "sex": "female",
                    "loaction": "上海交通大学附属第三医院（门诊）"
                }
            }
        }
    }
</script>

<style scoped>
    .form_date {
        background: #66c6d5;
        box-shadow: 0 0 10px 3px rgba(0, 0, 0, .2);
    }

    .result_box {
        margin: 1.546rem auto;
        width: 90%;
        padding: 1em 0;
        position: relative;
    }

    .result_box:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 4px;
        height: 60%;
        transform: translateY(-50%);
        background: #66c6d5;
        border-radius: 0 2px 2px 0;
    }

    .date_box,
    .info_box {
        display: inline-block;
        vertical-align: middle;
    }

    .date_box {
        padding: 0 28px;
    }

    .date,
    .momth {
        display: block;
        text-align: center;
        min-width: 1.2em;
    }

    .date {
        color: #66c6d5;
        font-size: 32px;
        line-height: 1.5
    }

    .momth {
        color: #d4d4d4;
    }

    .info_box {
        position: relative;
        line-height: 26px;
        padding-left: 28px;
    }

    .info_box:before {
        content: '';
        position: absolute;
        left: -1px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 100%;
        border-left: 1px solid #d4d4d4;
    }

    .info_box span {
        display: inline-block;
        vertical-align: middle;
    }

    .location {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        vertical-align: middle;
        background: url('../../images/clock_icon.png') center no-repeat;
        background-size: 100% auto;
    }

    .person_icon {
        background-image: url('../../images/single_user_icon.png');
    }

    .location_icon {
        background-image: url('../../images/location_icon.png');
    }

    .female_icon {
        background-image: url('../../images/female_icon.png');
    }

    .male_icon {
        background-image: url('../../images/male_icon.png');
    }
</style>
