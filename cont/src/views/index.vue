<template>
    <div>
        <h1>Butons atyttytgtyga</h1>
        <span v-for="num in 10">
            <button @click="click(num)">{{ num }}</button>
        </span>
    </div>
</template>

<script>
    export default {
        methods: {
            click(num) {
                console.log(num)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>