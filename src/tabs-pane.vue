<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-pane",
        inject:['eventBus'],
    }
</script>

<style scoped>
    .tabs-pane{

    }

</style>