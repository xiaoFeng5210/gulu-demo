import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row'
import Col from './col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

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
        }
    }
})