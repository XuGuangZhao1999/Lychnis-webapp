// import './assets/css/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { createStore } from 'vuex'
import i18n from './assets/language/index.js'

// Vuex store
const coreModel = {
    namespaced: true,
    state() {
        return {
            language: "zhCn",
            I18N: i18n
        }
    },
    mutations: {
        // Set the language of the Element Plus component
        setLanguage(state, lang) {
            state.language = lang
        },
        // Set the language of the i18n
        setI18N(state, lang) {
            state.I18N.global.locale = lang
        }
    },
    getters: {
        locale(state) {
            if (state.language === "zhCn") {
                return zhCn
            } else {
                return en
            }
        }
    }
}

const statusModel = {
    namespaced: true,
    state() {
        return {
            message: "Status",
            bShow: true
        }
    },
    mutations: {
        showMessage(state, info) {
            state.message = info
            state.bShow = true
            // Hide message after 3 seconds
            setTimeout(() => {
                state.bShow = false
            }, 3000)
        }
    }
}

const store = createStore({
    modules:{
        status: statusModel,
        core: coreModel
    }
})

// Global function
// Paint image on canvas
window.paint = function(imageBinary) {
    let blob = new Blob([imageBinary], {type: "image/jpeg"})
    let img = new Image();

    img.src = URL.createObjectURL(blob);
    img.onload = function() {
        let canvas = document.getElementById("imageContainer")
        let ctx = canvas.getContext("2d")

        ctx.drawImage(img, 0, 0)
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
