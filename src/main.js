import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { createStore } from 'vuex'
import i18n from './assets/language/index.js'

// Global function
// Paint image on canvas
window.paint = function(imageBinary) {
    let blob = new Blob([imageBinary], {type: "image/jpeg"})
    let img = new Image();

    img.src = URL.createObjectURL(blob);
    img.onload = function() {
        let canvas = document.getElementById("viewer")
        let ctx = canvas.getContext("2d")

        ctx.drawImage(img, 0, 0)
    }
}

// Show message
window.showMessage = function(message) {
    store.commit("status/showMessage", message)
}

// Vuex store
const coreModel = {
    namespaced: true,
    state() {
        return {
            language: "en",
            I18N: i18n,
            bLoaded: true,
            levels: 1,
            constrastRange: {
                "lower": 100,
                "upper": 1000,
            },
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
        },
        // Set whether the file is loaded
        setBLoaded(state, b) {
            state.bLoaded = b
        },
        // Set the image levels
        setLevels(state, levels) {
            state.levels = levels
        },
        // Set the constrast range
        setConstrastRange(state, range) {
            state.constrastRange.lower = range.lower
            state.constrastRange.upper = range.upper

            let req = {
                "functionName": "constrastChanged",
                "args": {
                    "index": range.index,
                    "v1": state.constrastRange.lower,
                    "v2": state.constrastRange.upper
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage("constrast change: " + response)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            })
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

// Create app instance
const app = createApp(App)
app.use(ElementPlus, {locale: store.getters["core/locale"]})
app.use(store)
app.use(i18n)
app.mount('#app')
