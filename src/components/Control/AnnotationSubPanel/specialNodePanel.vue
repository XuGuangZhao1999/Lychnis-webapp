<template>
    <el-card>
        <template #header>
            <div class="cardHeader">
                <span>{{ $t('annotation.special_nodes.title') }}</span>
                <div>
                    <el-button id="seniorBtn" type="text">{{ $t('annotation.special_nodes.filter') }}</el-button>
                    <el-button id="seniorBtn" type="text">{{ $t('annotation.special_nodes.pop') }}</el-button>
                </div>
            </div>
        </template>
        <el-table border>
            <el-table-column :label="$t('annotation.special_nodes.id')"></el-table-column>
            <el-table-column :label="$t('annotation.special_nodes.message')"></el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    name: 'specialNodePanel',
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