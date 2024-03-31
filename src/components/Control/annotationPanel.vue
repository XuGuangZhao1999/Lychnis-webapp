<!-- Annotation panel -->
<template>
    <el-tab-pane :label="$t('annotation.title')">
        <el-collapse>
            <settingsPanel :name="1"></settingsPanel>
            <geometryPanel :name="2"></geometryPanel>
            <currentNodeInfoPanel :name="3"></currentNodeInfoPanel>
            <specialNodePanel :name="4"></specialNodePanel>
        </el-collapse>
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