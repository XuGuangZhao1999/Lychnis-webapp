<template>
    <!-- Status bar -->
    <label id="statusBar" v-if='bShow'>{{ status }}</label>
</template>

<script>
export default {
    name: 'statusBar',
    props: {
        status: String,
        bShow: Boolean
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#statusBar {
    margin: 0px;
    padding: 0px;
    border: 0px;
    background-color: #545C64;
    color: greenyellow;
    font-size: 18px;
    height: 30px;
    line-height: 30px;
}
</style>
  