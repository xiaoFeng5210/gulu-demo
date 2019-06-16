import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el:'#app',
    data:{
        jiazai: true,
        jiazai2: false,
        jiazai3: false,
        jiazai4: false,
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
        }
    }
})