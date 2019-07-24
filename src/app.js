import Vue from 'vue'
import createElement from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)


const h = createElement


new Vue({
    el:'#app',
    data:{
        jiazai: true,
        jiazai2: false,
        jiazai3: false,
        jiazai4: false,
        message: '"这里可以输入内容"'
    },
    methods: {
        changeLoading() {
            this.jiazai = !this.jiazai
        },
        changeLoading2() {
            this.jiazai2 = !this.jiazai2
        },
        changeLoading3() {
            this.jiazai3 = !this.jiazai3
        },
        changeLoading4() {
            this.jiazai4 = !this.jiazai4
        },

        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },

        showToast(position){
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。张庆风认为需要充值！`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback () {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 3,
            })
        }
    }
})