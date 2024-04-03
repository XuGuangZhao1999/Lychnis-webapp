<template>
    <el-card>
        <template #header>
            <div class="container">
                <span>{{ $t('annotation.geometry.title') }}</span>
                <el-button id="seniorBtn" type="text">{{ $t('annotation.geometry.advanced') }}</el-button>
            </div>
        </template>
        <el-form label-position="left" label-width="auto" size="small" style="min-width: 300px;">
            <el-form-item :label="$t('annotation.geometry.block_size')">
                <div style="display: flex; flex-direction: row;">
                    <el-select>
                    <el-option label="256x256x256"></el-option>
                    </el-select>
                    <el-input type="number"></el-input>
                    <el-input type="number"></el-input>
                </div>
            </el-form-item>
            <el-form-item :label="$t('annotation.geometry.center')">
                <div style="display: flex; flex-direction: row;">
                    <el-input type="number"></el-input>
                    <el-input type="number"></el-input>
                    <el-input type="number"></el-input>
                </div>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'geometryPanel',
    props: {
    },
    setup() {
        return {
        }
    }
}
</script>

<style scoped>
#seniorBtn {
    border: 0px;
    padding: 0px;
}
</style>