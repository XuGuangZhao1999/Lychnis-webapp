<template>
    <el-collapse-item :title="$t('annotation.settings.title')" :name="name">
        <el-form label-position="right">
            <el-form-item :label="$t('annotation.settings.annotation_channel')">
                <el-select>
                    <el-option label="通道1" value="1"/>
                    <el-option label="通道2" value="2"/>
                    <el-option label="通道3" value="3"/>
                    <el-option label="通道4" value="4"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('annotation.settings.annotation_type')">
                <el-select>
                    <el-option label="线段" value="line"/>
                    <el-option label="点" value="point"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('annotation.settings.slice_thickness')">
                <el-input></el-input>
            </el-form-item>
            <el-form-item :label="$t('annotation.settings.user_name')">
                <el-input></el-input>
            </el-form-item>
        </el-form>
    </el-collapse-item>
</template>

<script>
export default {
    name: 'settingsPanel',
    props: {
        name: {
            type: String
        }
    },
    setup() {
        return {
        }
    }
}
</script>

<style>

</style>