<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "tabs",
        //需要用户去传值的时候我们使用props
        props:{
            selected:{
                type:String,
                required:true,
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal', 'vertical'].indexOf(value)>=0 //indexof返回一个数组中字符串首次出现在第几个位置
                }
            }
        },
        //data不需要用户去传值。
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){   //provide和inject需要一起使用，使祖先组件向子孙组件注入依赖。
            return {
                eventBus:this.eventBus
            }
        },
        created(){

        },
        mounted(){
            this.eventBus.$emit('update:selected',this.selected)
        }
    }
</script>

<style scoped>
    .tabs{

    }
</style>