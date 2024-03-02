import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

window.paint = function(imageBinary) {
    console.log(imageBinary)
    let blob = new Blob([imageBinary], {type: "image/jpeg"})
    let img = new Image();

    img.src = URL.createObjectURL(blob);
    img.onload = function() {
        let canvas = document.getElementById("imageContainer")
        let ctx = canvas.getContext("2d")

        ctx.drawImage(img, 0, 0)
    }
}

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
