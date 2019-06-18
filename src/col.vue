<template>
    <div :style="colStyle" class="col">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "col",
        props: {
            span: {
                type: [Number, String]
            },
            // 想要完成两列之间有空格的需求
            offset: {
                type: [Number, String]
            },

        },
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px',
                }
            }

        }

    }
</script>

<style lang="scss" scoped>
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>