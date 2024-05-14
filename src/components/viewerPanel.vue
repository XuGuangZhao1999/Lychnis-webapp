<!-- Viewer panel -->
<template>
    <div class="flexLayout">
        <div v-if="store.state.core.bLoaded" class="constrast">
            <el-slider v-model="lower" show-input size="small" @wheel="lHandlerWheel" @input="updateConstrast" :debounce="100" :max="upper"/>
            <el-slider v-model="upper" show-input size="small" @wheel="uHandlerWheel" @input="updateConstrast" :debounce="100" :max="65535"/>
        </div>
        <div v-show="store.state.core.bLoaded" class="wrapper">
            <canvas id="viewer" class="imageContainer" ref="canvas" width="1600" height="1200"></canvas>
            <div class="channelBar">
                <div class="channel">
                    <channelColorSelector channel-index="C0" channel-color="#00FF00"></channelColorSelector>
                </div>
            </div>
        </div>
        <div v-if="store.state.core.bLoaded" style="display: flex; justify-content: center; background-color: #313131;">
            <el-slider v-model="currentLevel" show-input :show-input-controls="false" :debounce="100" :max="store.state.core.levels" :min="1" size="small"/>
        </div>
    </div>
</template>

<script scoped>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import channelColorSelector from './UI/channelColorSelector.vue'

export default {
    name: 'viewerPanel',
    components: {
        channelColorSelector
    },
    setup() {
        const canvas = ref(null)
        const color = ref('rgva(19, 206, 102, 0.8)')
        const store = useStore()
        const currentLevel = computed({
            get: () => store.state.core.currentLevel + 1,
            set: (value) => store.dispatch('core/updateResolution', value)
        })
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

        let interactQueue = Promise.resolve()
            
        function interact(eventHandler) {
            interactQueue = interactQueue.then(eventHandler)
            return interactQueue
        }

        function interactEventHandler(req){
            return new Promise((resolve, reject)=>{
                        window.cefQuery({
                            request: JSON.stringify(req),
                            onSuccess: function(response){
                                window.showMessage(response)
                                resolve()
                            },
                            onFailure: function(error_code, error_message){
                                window.showMessage(error_code + ": " + error_message)
                                reject()
                            }
                        })
                    })
        }

        // Get the modifier key
        const getModifier = function(e) {
            let modifier = {}
            modifier["Shift"] = e.shiftKey
            modifier["Control"] = e.ctrlKey

            return modifier
        }

        // Get the key
        const getKey = function(e) {
            let keys = {
                "A": 0,
                "B": 1,
                "D": 2,
                "F": 3,
                "R": 4,
                "V": 5,
                "X": 6,
                "Z": 7,
                "ARROWLEFT": 8,
                "ARROWRIGHT": 9,
                " ": 10,
                "HOME": 11,
                "END": 12,
                "ARROWUP": 13,
                "ARROWDOWN": 14,
                "DELETE": 15,
                "ESCAPE": 16,
            }
            let key = keys[(e.key).toUpperCase()]

            return key
        }

        function mouseDownHandler(e, scaleX, scaleY) {
            let req = {
                "functionName": "mousePressEvent",
                "args": {
                    "button": e.button,
                    "posX": e.offsetX * scaleX, 
                    "posY": e.offsetY * scaleY,
                    "modifier": getModifier(e),
                }
            }

            interact(interactEventHandler(req))
        }

        function mouseUpHandler(e, scaleX, scaleY) {
            let req = {
                "functionName": "mouseReleaseEvent",
                "args": {
                    "button": e.button,
                    "posX": e.offsetX * scaleX, 
                    "posY": e.offsetY * scaleY,
                    "modifier": getModifier(e),
                }
            }
            
            interact(interactEventHandler(req))
        }

        function mouseMoveHandler(e, scaleX, scaleY) {
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
            
            interact(interactEventHandler(req))
        }

        function wheelHandler(e, scaleX, scaleY) {
            let req = {
                "functionName": "wheelEvent",
                "args": {
                    "deltaY": -e.deltaY,
                    "posX": e.offsetX * scaleX,
                    "posY": e.offsetY * scaleY
                }
            }

            interact(interactEventHandler(req))
        }

        function keyDownHandler(e) {
            let req = {
                "functionName": "keyPressEvent",
                "args": {
                    "key": getKey(e),
                    "modifier": getModifier(e),
                    "bAutoRepeat": e.repeat
                },
            }

            interact(interactEventHandler(req))
        }

        function keyUpHandler(e) {
            let req = {
                "functionName": "keyReleaseEvent",
                "args": {
                    "key": getKey(e),
                    "modifier": getModifier(e),
                    "bAutoRepeat": e.repeat
                }
            }

            interact(interactEventHandler(req))
        }

        onMounted(()=>{
            let canvasRef = canvas.value
            let scaleX = canvasRef.width / canvasRef.offsetWidth
            let scaleY = canvasRef.height / canvasRef.offsetHeight
            
            // Resize observer
            let resizeObserver = new ResizeObserver(() => {
                window.requestAnimationFrame(() => {
                    scaleX = canvasRef.width / canvasRef.offsetWidth
                    scaleY = canvasRef.height / canvasRef.offsetHeight
                })
            });
            resizeObserver.observe(canvasRef)

            // Add Mouse events' listeners
            canvasRef.addEventListener("mousedown", (e) => { mouseDownHandler(e, scaleX, scaleY) }, false)
            canvasRef.addEventListener("mouseup", (e) => { mouseUpHandler(e, scaleX, scaleY) }, false)
            canvasRef.addEventListener("mousemove", (e) => { mouseMoveHandler(e, scaleX, scaleY) }, false)
            canvasRef.addEventListener("wheel", (e) => { wheelHandler(e, scaleX, scaleY) }, false)

            // Add Keyboard events' listeners
            window.addEventListener("keydown", keyDownHandler, false)
            window.addEventListener("keyup", keyUpHandler, false)
        })

        onBeforeUnmount(()=>{
            let canvasRef = canvas.value
            let scaleX = canvasRef.width / canvasRef.offsetWidth
            let scaleY = canvasRef.height / canvasRef.offsetHeight

            // Remove Mouse events' listeners
            canvasRef.removeEventListener("mousedown", (e) => { mouseDownHandler(e, scaleX, scaleY) }, false)
            canvasRef.removeEventListener("mouseup", (e) => { mouseUpHandler(e, scaleX, scaleY) }, false)
            canvasRef.removeEventListener("mousemove", (e) => { mouseMoveHandler(e, scaleX, scaleY) }, false)
            canvasRef.removeEventListener("wheel", (e) => { wheelHandler(e, scaleX, scaleY) }, false)

            // Remove Keyboard events' listeners
            window.removeEventListener("keydown", keyDownHandler, false)
            window.removeEventListener("keyup", keyUpHandler, false)
        })

        return {
            canvas,
            color,
            store,
            currentLevel,
            lower,
            upper,
            channel,
            lHandlerWheel,
            uHandlerWheel,
            updateConstrast,
        }
    },
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
    text-align: center;
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

.channelBar {
    float: right;
    width: auto; 
    margin-top: 1px;
    margin-right: 1px;
}

.channel {
    display: flex; 
    flex-direction: column; 
    align-items: end; 
    width: auto;
}
</style>