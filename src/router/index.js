import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const calendars = r => require.ensure([], () => r(require('../page/calendars/calendars')), 'calendars')

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        redirect: '/home',
        meta: {
            title: '首页'
        }
    }, {
        path: '/home',
        component: home,
        meta: {
            title: '首页'
        }
    }, {
        path: '/calendars',
        component: calendars,
        meta: {
            title: '日历'
        }
    }]
}]
