<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        inject:['eventBus'],
        props:{
            disabled:Boolean,
            default:false,
        }
    }
</script>

<style scoped>
    .tabs-item{
    }

</style>