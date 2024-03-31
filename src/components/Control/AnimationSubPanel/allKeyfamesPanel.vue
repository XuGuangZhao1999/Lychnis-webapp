<template>
    <el-collapse-item :title="$t('animation.all_keyframes.title')" :name="name">
        <el-table border>
            <el-table-column :label="$t('animation.all_keyframes.index')"></el-table-column>
            <el-table-column :label="$t('animation.all_keyframes.created_time')"></el-table-column>
            <el-table-column :label="$t('animation.all_keyframes.notes')"></el-table-column>
        </el-table>
    </el-collapse-item>
</template>

<script>
export default {
    name: 'allKeyfamesPanel',
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