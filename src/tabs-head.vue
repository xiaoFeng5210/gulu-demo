<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject:['eventBus'] //在子组件注入eventBus,这样就可以随便使用了。
    }
</script>

<style scoped>
    .tabs-head{

    }
</style>