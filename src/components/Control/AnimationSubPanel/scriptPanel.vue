<template>
    <el-collapse-item :title="$t('animation.script.title')" :name="name">
        <el-form label-position="right">
            <el-form-item>
                <el-input></el-input>
                <el-button type="text">{{ $t('animation.script.browse') }}</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="text">{{ $t('animation.script.export_template') }}</el-button>
                <el-button type="text">{{ $t('animation.script.reload') }}</el-button>
                <el-button type="text">{{ $t('animation.script.insert_current_state') }}</el-button>
            </el-form-item>
        </el-form>
    </el-collapse-item>
</template>

<script>
export default {
    name: 'scriptPanel',
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