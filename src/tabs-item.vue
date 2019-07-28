<template>
    <div class="tabs-item" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        inject:['eventBus'],
        data(){
          return {
              active:false
          }
        },
        props:{
            disabled:{
                type:Boolean ,
                default:false
            },

            name:{
                type:String ,
                required:true
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        }
    }
</script>

<style scoped>
    .tabs-item{
    }

</style>