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
            rowStyle() {
                let {gutter} = this
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style scoped>
    .row {
        display: flex;
    }
</style>