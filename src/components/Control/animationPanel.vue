<template>
    <el-tab-pane :label="$t('animation.title')">
        <div style="display: flex; flex-direction: column; height: 100%;">
            <keyframeSettingsPanel :name="5"></keyframeSettingsPanel>
            <allKeyfamesPanel :name="6"></allKeyfamesPanel>
            <allFramesPanel :name="7"></allFramesPanel>
            <scriptPanel :name="8"></scriptPanel>
        </div>
    </el-tab-pane>
</template>

<script>
import keyframeSettingsPanel from './AnimationSubPanel/keyframeSettingsPanel.vue'
import allKeyfamesPanel from './AnimationSubPanel/allKeyfamesPanel.vue'
import allFramesPanel from './AnimationSubPanel/allFramesPanel.vue'
import scriptPanel from './AnimationSubPanel/scriptPanel.vue'

export default {
    name: 'animationPanel',
    components: {
        keyframeSettingsPanel,
        allKeyfamesPanel,
        allFramesPanel,
        scriptPanel
    },
    setup() {
    }
}
</script>

<style>

</style>