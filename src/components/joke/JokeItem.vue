<template>
    <section>
        <h2>{{ currentJoke }}</h2>
        <button></button>
    </section>
</template>
<script>
export default {
    props: ['currentJoke']
}
</script>
<style lang='scss' scoped>
section {
    border: 1px solid $red;
    width: 100%;
    max-width: 450px;
    margin: 1em
}
</style>