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
            currentLevel: 0,
            constrastRange: {
                "lower": 100,
                "upper": 1000,
            },
            center: {
                "x": 0,
                "y": 0,
                "z": 0,
            },
            blockSize: {
                "width": 256,
                "height": 256,
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
        // Set the image resolution information
        setResolution(state, res) {
            state.levels = res.totalResolutions
            this.setCurrentLevel(res.currentResolution)
        },
        // Set the current level
        setCurrentLevel(state, level) {
            state.currentLevel = level
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
        },
        // Set the center of the volume
        setCenter(state, center) {
            state.center.x = center.x
            state.center.y = center.y
            state.center.z = center.z
        },
        // Set the block size
        setBlockSize(state, blockSize) {
            state.blockSize.width = blockSize.width
            state.blockSize.height = blockSize.height
        },
    },
    actions: {
        updateResolution(context, resId){
            if(context.state.bLoaded == false) return
            let req = {
                "functionName": "updateResolution",
                "args": {
                    "resId": resId
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage("Resolution change: " + response)
                    context.commit('setCurrentLevel', resId - 1)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            }
            )
        },
        updateBlockSize(context, blockSize){
            if(context.state.bLoaded == false) return
            let req = {
                "functionName": "updateBlockSize",
                "args": {
                    "blockSize": blockSize
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage("Block size change: " + response)
                    context.commit('setBlockSize', blockSize)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            }
            )
        },
        updateCenter(context, center){
            if(context.state.bLoaded == false) return
            let req = {
                "functionName": "updateCenter",
                "args": {
                    "center": center
                }
            }

            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response){
                    window.showMessage("Center change: " + response)
                    context.commit('setCenter', center)
                },
                onFailure: function(error_code, error_message){
                    window.showMessage(error_code + ": " + error_message)
                }
            }
            )
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