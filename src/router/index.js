import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const calendars = r => require.ensure([], () => r(require('../page/calendars/calendars')), 'calendars')
const calendar = r => require.ensure([], () => r(require('../page/calendar/calendar')), 'calendar')
const myConnection = r => require.ensure([], () => r(require('../page/my_connection/my_connection')), 'my_connection')
const myMessage = r => require.ensure([], () => r(require('../page/my_message/my_message')), 'my_message')
const messageDetail = r => require.ensure([], () => r(require('../page/my_message/message_detail')), 'message_detail')

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
    }, {
        path: '/calendar',
        component: calendar,
        meta: {
            title: '日历'
        }
    }, {
        path: '/my_connection',
        component: myConnection,
        meta: {
            title: '我的人脉'
        }
    }, {
        path: '/my_message',
        component: myMessage,
        meta: {
            title: '我的留言'
        }
    }, {
        path: '/message_detail',
        component: messageDetail,
        meta: {
            title: '留言详情'
        }
    }]
}]
