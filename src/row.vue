<template>
    <div :style="rowStyle" class="row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "row",
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        computed: {
            //使用计算属性来实现gutter的值。
            rowStyle() {
                let {gutter} = this
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
            }
        },
        mounted() {
            //这一步是row组件通过遍历子组件（col）的形式来传递给子组件数据gutter.必须是在mounted阶段。mounted阶段是组件在页面
            //渲染后的阶段。
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
    }
</style>