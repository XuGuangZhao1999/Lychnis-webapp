<template>
    <div class="color-input-wrapper">
        <input type="color" id="color-input" class="color-input" :value="channelColor">
        <label for="color-input" class="color-label">{{ channelIndex }}</label>
    </div>
</template>

<script>

export default {
    name: 'channelColorSelector',
    props: ['channelIndex', 'channelColor'],
    setup(){

    }
}
</script>

<style scoped>
.color-input-wrapper {
  position: relative;
  display: inline-block;
  border: 0px;
  padding: 0px;
  height: 30px;
  width: 30px;
}

.color-input {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  padding: 0px;
}

.color-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>