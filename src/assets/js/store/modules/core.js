import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import i18n from '../../language/index.js'


const coreModel = {
    namespaced: true,
    state() {
        return {
            language: "en",
            I18N: i18n,
            bLoaded: false,
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

export default coreModel