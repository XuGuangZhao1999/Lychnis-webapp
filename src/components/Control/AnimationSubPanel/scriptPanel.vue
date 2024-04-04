<template>
    <el-card>
        <template #header>
            <span>{{ $t('animation.script.title') }}</span>
        </template>
        <el-form label-position="left">
            <el-form-item>
                <el-input/>
                <el-button type="text">{{ $t('animation.script.browse') }}</el-button>
            </el-form-item>
            <el-button type="text">{{ $t('animation.script.export_template') }}</el-button>
            <el-button type="text">{{ $t('animation.script.reload') }}</el-button>
            <el-button type="text">{{ $t('animation.script.insert_current_state') }}</el-button>
        </el-form>
    </el-card>
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
.el-form-item__content {
    flex-wrap: nowrap !important;
}

</style>