<template>
    <el-card>
        <template #header>
            <div class="cardHeader">
                <span>{{ $t('annotation.selected_node.title') }}</span>
            </div>
        </template>
        <el-form label-position="left" label-width="auto" size="small" style="min-width: 300px;">
            <el-form-item :label="$t('annotation.selected_node.node_id')">
                <div style="display: flex;">
                    <el-input></el-input>
                    <el-input :placeholder="$t('placeholder.searchNodeId')"></el-input>
                </div>
            </el-form-item>
            <el-form-item :label="$t('annotation.selected_node.node_type')">
                <el-select>
                    <el-option label="None" value="1"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('annotation.selected_node.message')">
                <div style="display: flex;">
                    <el-input :placeholder="$t('placeholder.pressEnter')"></el-input>
                    <el-select>
                        <el-option label="Sure" value="1"/>
                    </el-select>
                </div>
            </el-form-item>
            <el-form-item :label="$t('annotation.selected_node.creator')">
                <el-input type="text"></el-input>
            </el-form-item>
            <el-form-item :label="$t('annotation.selected_node.color')">
                <div style="display: flex;">
                    <el-input type="text"></el-input>
                    <el-color-picker v-model="nodeColor"/>
                </div>
            </el-form-item>
            <el-form-item :label="$t('annotation.selected_node.coordinate')">
                <el-input type="text"></el-input>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'currentNodeInfoPanel',
    props: {
        name: {
            type: String
        }
    },
    setup() {
        const nodeColor = '#00FF00'
        return {
            nodeColor
        }
    }
}
</script>

<style scoped>

</style>