<template>
    <div class="home_container">
    	<slidebar></slidebar>
    	<doctor-info-banner></doctor-info-banner>
    	<intro-tab-menu :introData="introData"></intro-tab-menu>
    </div>
</template>


<script>
import slidebar from '../../components/common/sidebar';
import doctorInfoBanner from '../../components/common/doctor_info_banner.vue';
import introTabMenu from '../../components/common/intro_tab_menu.vue';

export default {
	name: 'home',
	methods: {
		reload() {
			window.location.reload();
		}
	},
	data: function() {
		return {
			introData: [{
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
			}]
		}
	},
	components: {
		slidebar,
		doctorInfoBanner,
		introTabMenu
	},
	create() {

	}
}
</script>


<style scoped>
    .home_container{

    }
</style>
