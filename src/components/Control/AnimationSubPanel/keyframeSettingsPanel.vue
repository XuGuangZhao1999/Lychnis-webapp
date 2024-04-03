<template>
    <el-card>
        <template #header>
            <div style="display: flex; justify-content: space-between;">
                <span>{{ $t('animation.keyframe.title') }}</span>
                <div>
                    <el-button id="seniorBtn" type="text">{{ $t('animation.keyframe.new') }}</el-button>
                    <el-button id="seniorBtn" type="text">{{ $t('animation.keyframe.modify') }}</el-button>
                </div>
            </div>
        </template>
        <el-form label-position="left" label-width="auto" size="small" style="min-width: 300px;">
            <el-form-item :label="$t('animation.keyframe.index_keyframes')">
                <el-input></el-input>
            </el-form-item>
            <el-form-item :label="$t('animation.keyframe.index_all_frames')">
                <el-input></el-input>
            </el-form-item>
            <el-form-item :label="$t('animation.keyframe.created_time')">
                <el-input></el-input>
            </el-form-item>
            <el-form-item :label="$t('animation.keyframe.duration_frames')">
                <el-input placeholder="0"></el-input>
            </el-form-item>
            <el-form-item :label="$t('animation.keyframe.notes')">
                <el-input></el-input>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'keyframeSettingsPanel',
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