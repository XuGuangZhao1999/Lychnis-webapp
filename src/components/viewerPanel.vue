<template>
    <div class="flexLayout">
        <canvas id="imageContainer" ref="canvas" v-if='bShow' width="1600" height="1200"></canvas>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'viewerPanel',
    setup() {
        const bShow = ref(true)
        // const bMouse = ref(false)

        return {
            bShow,
            // bMouse
        }
    },
    mounted() {
        let canvas = this.$refs.canvas
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}

window.onload = function() {
    let canvas = document.getElementById("imageContainer");
    let context = canvas.getContext("2d");
    let isMouseDown = false;
    let initX;
    let initY;
    let scaleX = canvas.width / canvas.offsetWidth
    let scaleY = canvas.height / canvas.offsetHeight
    let resizeObserver = new ResizeObserver(() => {
        scaleX = canvas.width / canvas.offsetWidth;
        scaleY = canvas.height / canvas.offsetHeight;
    });
    resizeObserver.observe(canvas);
    canvas.addEventListener("mousedown", function(e) {
        if(e.button === 0) {
            isMouseDown = true;
            context.strokeStyle = "red";
            initX = e.offsetX * scaleX;
            initY = e.offsetY * scaleY;
            context.beginPath();
            context.moveTo(initX, initY);
        }
    }, false);
    canvas.addEventListener("mouseup", function(e) {
        if(e.button === 0) {
            isMouseDown = false;
        }
    }, false);
    canvas.addEventListener("mousemove", function(e) {
        if(isMouseDown) {
            context.lineTo(e.offsetX * scaleX, e.offsetY * scaleY);
            context.stroke();
            console.log(e.offsetX * scaleX, e.offsetY * scaleY);
            console.log("偏移方向offset："+(e.offsetX * scaleX - initX)+","+(e.offsetY * scaleY - initY));
        }
    }, false);
    canvas.addEventListener("wheel", function(e) {
        console.log(e.deltaX, e.deltaY, e.deltaZ);
    }, false);
}
</script>

<style scoped>
div {
    width: 100%;
    height: calc(100vh - 30px);
}

#imageContainer {
    margin: 0px;
    border: 0px;
    padding: 0px;
    /* padding: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px); */
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

.flexLayout {
    margin: 0px;
    border-top: 1px solid #DCDFE6;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #DCDFE6;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    object-fit: contain;
    background-color: #000000;
}
</style>