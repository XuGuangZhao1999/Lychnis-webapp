<!-- Viewer panel -->
<template>
    <div class="flexLayout">
        <div v-if="store.state.core.bLoaded" style="display: flex; justify-content: space-around; height: 40px; background-color: #313131;">
            <el-slider style="height: 40px; width: 47%;" show-input size="small" @wheel="handlerWheel" v-model="test" :max="65535"/>
            <el-slider style="height: 40px; width: 47%;" show-input size="small"/>
        </div>
        <!-- <el-slider v-if="store.state.core.bLoaded" v-model="range" range show-stops :max="65535"/> -->
        <div class="wrapper">
            <canvas id="imageContainer" ref="canvas" v-if='bShow' width="1600" height="1200"></canvas>
        </div>
        <div style="display: flex; justify-content: center; background-color: #313131;">
            <el-slider v-if="store.state.core.bLoaded" v-model="currentLevel" show-input="true" :debounce="100" :max="store.state.core.levels" size="small"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import  _  from 'lodash'

export default {
    name: 'viewerPanel',
    setup() {
        const store = useStore()
        const bShow = ref(true)
        const currentLevel = ref(store.state.core.levels - 1)
        const range = ref([100, 1000])
        const test = ref(0)

        function handlerWheel(e) {
            if(e.deltaY > 0) {
                test.value -= 1
            } else {
                test.value += 1
            }
        }

        return {
            store,
            bShow,
            currentLevel,
            range,
            test,
            handlerWheel,
        }
    },
    mounted() {
        let canvas = this.$refs.canvas
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

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
                ctx.strokeStyle = "red";
                initX = e.offsetX * scaleX;
                initY = e.offsetY * scaleY;
                ctx.beginPath();
                ctx.moveTo(initX, initY);
            }
        }, false);
        canvas.addEventListener("mouseup", function(e) {
            if(e.button === 0) {
                isMouseDown = false;
            }
        }, false);
        canvas.addEventListener("mousemove", function(e) {
            if(isMouseDown) {
                ctx.lineTo(e.offsetX * scaleX, e.offsetY * scaleY);
                ctx.stroke();
                console.log(e.offsetX * scaleX, e.offsetY * scaleY);
                console.log("偏移方向offset："+(e.offsetX * scaleX - initX)+","+(e.offsetY * scaleY - initY));
            }
        }, false);
        canvas.addEventListener("wheel", function(e) {
            console.log(e.deltaX, e.deltaY, e.deltaZ);
        }, false);
    }
}

</script>

<style scoped>
div {
    margin: 0px;
    border: 0px;
    padding: 0px;
    width: 100%;
}

.flexLayout {
    margin: 0px;
    border-top: 1px solid #DCDFE6;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #DCDFE6;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #000000;
}

.wrapper {
    margin: 0px;
    border: 0px;
    padding: 0px;
    width: 100%;
    height: calc(100% - 80px);
}

#imageContainer {
    margin: 0px;
    border: 0px;
    padding: 0px;
    /* padding: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px); */
    width: auto;
    /* height: 100%; */
    height: calc(100vh - 30px);
    max-width: 100%;
    max-height: 100%;
}

.el-slider {
    width: 96%;
    height: 40px;
    background-color: #313131;
}
</style>