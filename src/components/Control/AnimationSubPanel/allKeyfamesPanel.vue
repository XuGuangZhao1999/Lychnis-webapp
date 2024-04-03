<template>
    <el-card>
        <template #header>
            <span>{{ $t('animation.all_keyframes.title') }}</span>
        </template>
        <el-table border label-position="left" label-width="auto" size="small" style="min-width: 300px;">
            <el-table-column :label="$t('animation.all_keyframes.index')"></el-table-column>
            <el-table-column :label="$t('animation.all_keyframes.created_time')"></el-table-column>
            <el-table-column :label="$t('animation.all_keyframes.notes')"></el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    name: 'allKeyfamesPanel',
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