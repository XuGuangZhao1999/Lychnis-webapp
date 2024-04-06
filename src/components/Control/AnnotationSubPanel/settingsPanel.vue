<template>
    <el-card shadow="never">
        <template #header>
            <div class="cardHeader">
                <span>{{ $t('annotation.settings.title') }}</span>
            </div>
        </template>
        <el-form label-position="left" label-width="auto" size="small" style="min-width: 300px;">
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
    </el-card>
</template>

<script>
export default {
    name: 'settingsPanel',
    props: {

    },
    setup() {
        return {
        }
    }
}
</script>

<style>

</style>