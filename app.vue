<template>
    <div>Hello {{ name }}</div>
</template>
<script>
    export default {
        data() { // es6 函数简写
            return {
                name: 'Vue.js'
            }
        }
    }
</script>
<style scoped>
    div{
        color: #f60;
        font-size: 24px;
    }
</style>
