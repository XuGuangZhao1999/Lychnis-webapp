<!-- Annotation panel -->
<template>
    <el-tab-pane :label="$t('annotation.title')">
        <div style="display: flex; flex-direction: column; height: 100%;">
            <settingsPanel></settingsPanel>
            <geometryPanel></geometryPanel>
            <currentNodeInfoPanel></currentNodeInfoPanel>
            <specialNodePanel></specialNodePanel>
        </div>
    </el-tab-pane>
</template>

<script>
import settingsPanel from './AnnotationSubPanel/settingsPanel.vue'
import geometryPanel from './AnnotationSubPanel/geometryPanel.vue'
import currentNodeInfoPanel from './AnnotationSubPanel/currentNodeInfoPanel.vue'
import specialNodePanel from './AnnotationSubPanel/specialNodePanel.vue'

export default {
    name: 'annotationPanel',
    components: {
        settingsPanel,
        geometryPanel,
        currentNodeInfoPanel,
        specialNodePanel
    },
    setup() {
    }
}
</script>

<style>

</style>