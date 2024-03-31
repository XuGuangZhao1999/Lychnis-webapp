<template>
    <el-collapse-item :name="name">
        <template v-slot:title>
            <span>{{ $t('annotation.special_nodes.title') }}</span>
            <el-button id="seniorBtn" type="text">{{ $t('annotation.special_nodes.filter') }}</el-button>
            <el-button id="seniorBtn" type="text">{{ $t('annotation.special_nodes.pop') }}</el-button>
        </template>
        <el-table border>
            <el-table-column :label="$t('annotation.special_nodes.id')"></el-table-column>
            <el-table-column :label="$t('annotation.special_nodes.message')"></el-table-column>
        </el-table>
    </el-collapse-item>
</template>

<script>
export default {
    name: 'specialNodePanel',
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