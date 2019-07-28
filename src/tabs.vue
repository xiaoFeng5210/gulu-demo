<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tab",
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
        created(){

        }
    }
</script>

<style scoped>
    .tabs{

    }
</style>