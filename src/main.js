import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './assets/js/language/index.js'
import store from './assets/js/store/index.js'

// Global function
// Paint image on canvas
window.paint = function(imageBinary) {
    let blob = new Blob([imageBinary], {type: "image/jpeg"})
    let img = new Image();

    img.src = URL.createObjectURL(blob);
    img.onload = function() {
        let canvas = document.getElementById("viewer")
        let ctx = canvas.getContext("2d")

        // Two canvas are used to avoid the image being blurred
        let tempCanvas = document.createElement("canvas")
        tempCanvas.width = canvas.width
        tempCanvas.height = canvas.height
        let tempCtx = tempCanvas.getContext("2d")

        tempCtx.imageSmoothingEnabled = true

        tempCtx.drawImage(img, 0, 0)
        
        requestAnimationFrame(() => {
            ctx.drawImage(tempCanvas, 0, 0)
        })
    }
}

// Show message
window.showMessage = function(message) {
    store.commit("status/showMessage", message)
}

// Create app instance
const app = createApp(App)
app.use(ElementPlus, {locale: store.getters["core/locale"]})
app.use(store)
app.use(i18n)
app.mount('#app')
