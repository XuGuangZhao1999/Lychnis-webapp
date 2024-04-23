<!-- Viewer panel -->
<template>
    <div class="flexLayout">
        <div v-if="store.state.core.bLoaded" class="constrast">
            <el-color-picker v-model="color" show-alpha/>
            <el-slider v-model="lower" show-input size="small" @wheel="lHandlerWheel" @input="updateConstrast" :debounce="100" :max="upper"/>
            <el-slider v-model="upper" show-input size="small" @wheel="uHandlerWheel" @input="updateConstrast" :debounce="100" :max="65535"/>
        </div>
        <div v-show="store.state.core.bLoaded" class="wrapper">
            <canvas id="viewer" class="imageContainer" ref="canvas" width="1600" height="1200"></canvas>
        </div>
        <div v-if="store.state.core.bLoaded" style="display: flex; justify-content: center; background-color: #313131;">
            <el-slider v-model="currentLevel" @input="resolutionNumberChanged" show-input="true" :debounce="100" :max="store.state.core.levels" size="small"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'viewerPanel',
    setup() {
        const color = ref('rgva(19, 206, 102, 0.8)')
        const store = useStore()
        const currentLevel = ref(store.state.core.levels - 1)
        const lower = ref(store.state.core.constrastRange.lower)
        const upper = ref(store.state.core.constrastRange.upper)
        const channel = ref(0)

        // Update the constrast range
        function updateConstrast() {
            store.commit('core/setConstrastRange', {
                "index": channel.value,
                "lower": lower.value,
                "upper": upper.value
            })
        }

        // Handle the lower slider wheel event
        function lHandlerWheel(e) {
            if(e.deltaY > 0) {
                lower.value -= 1
            } else {
                lower.value += 1
            }

            updateConstrast()
        }

        // Handle the upper slider wheel event
        function uHandlerWheel(e) {
            if(e.deltaY > 0) {
                upper.value -= 1
            } else {
                upper.value += 1
            }

            updateConstrast()
        }

        // Change the image resolution
        function resolutionNumberChanged(){
            let req = {
                "functionName": "resolutionChange",
                "args": {
                    "currentLevel": currentLevel
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage("Resolution change: " + response)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            }
            )
        }

        return {
            color,
            store,
            currentLevel,
            lower,
            upper,
            channel,
            lHandlerWheel,
            uHandlerWheel,
            updateConstrast,
            resolutionNumberChanged,
        }
    },
    mounted() {
        let canvas = this.$refs.canvas
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        let scaleX = canvas.width / canvas.offsetWidth
        let scaleY = canvas.height / canvas.offsetHeight
        
        // Resize observer
        let resizeObserver = new ResizeObserver(() => {
            window.requestAnimationFrame(() => {
                scaleX = canvas.width / canvas.offsetWidth
                scaleY = canvas.height / canvas.offsetHeight
            })
        });
        resizeObserver.observe(canvas)

        // Get the modifier key
        const getModifier = function(e) {
            let modifier = {}
            modifier["Shift"] = e.shiftKey
            modifier["Control"] = e.ctrlKey

            return modifier
        }

        // Mouse events
        canvas.addEventListener("mousedown", function(e) {
            let req = {
                "functionName": "mousePressEvent",
                "args": {
                    "button": e.button,
                    "posX": e.offsetX * scaleX, 
                    "posY": e.offsetY * scaleY,
                    "modifier": getModifier(e),
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage(response)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            })
        }, false)

        canvas.addEventListener("mouseup", function(e) {
            let req = {
                "functionName": "mouseReleaseEvent",
                "args": {
                    "button": e.button,
                    "posX": e.offsetX * scaleX, 
                    "posY": e.offsetY * scaleY,
                    "modifier": getModifier(e),
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage(response)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            })
        }, false)

        canvas.addEventListener("mousemove", function(e) {
            if (e.buttons !== 0) {
                let btn = 0
                switch (e.buttons) {
                    case 1:
                        btn = 0
                        break
                    case 2:
                        btn= 2
                        break
                    case 4:
                        btn = 1
                        break
                    default:
                        btn = 0
                        break
                }
                let req = {
                    "functionName": "mouseMoveEvent",
                    "args": {
                        "button": btn,
                        "posX": e.offsetX * scaleX, 
                        "posY": e.offsetY * scaleY,
                        "modifier": getModifier(e),
                    }
                }

                window.cefQuery({
                    request: JSON.stringify(req),
                    onSuccess: function(response){
                        window.showMessage(response)
                    },
                    onFailure: function(error_code, error_message){
                        window.showMessage(error_code + ": " + error_message)
                    }
                })
            }
        }, false)

        canvas.addEventListener("wheel", function(e) {
            let req = {
                "functionName": "wheelEvent",
                "args": {
                    "deltaY": -e.deltaY,
                    "posX": e.offsetX * scaleX,
                    "posY": e.offsetY * scaleY
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage("Wheel event: " + response)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            })
        }, false)
    }
}

</script>

<style scoped>
div {
    width: 100%;
}

.flexLayout {
    border-top: 1px solid #DCDFE6;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #DCDFE6;
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
    width: 100%;
    height: calc(100% - 80px);
}

.imageContainer {
    width: auto;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
}

.constrast {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    background-color: #313131;
}

.constrast > .el-slider {
    width: 47%;
}

.el-slider {
    width: 96%;
    height: 40px;
    background-color: #313131;
}
</style>