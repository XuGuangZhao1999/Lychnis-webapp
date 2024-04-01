<template>
    <el-collapse-item :name="name">
        <template v-slot:title>
            <div class="container">
                <span>{{ $t('annotation.geometry.title') }}</span>
                <!-- <button id="seniorBtn">{{ $t('annotation.geometry.advanced') }}</button> -->
                <el-button id="seniorBtn" type="text">{{ $t('annotation.geometry.advanced') }}</el-button>
            </div>
        </template>
        <el-form label-position="right">
            <el-form-item :label="$t('annotation.geometry.block_size')">
                <el-select>
                    <el-option label="256x256x256"></el-option>
                </el-select>
                <el-input type="number"></el-input>
                <el-input type="number"></el-input>
            </el-form-item>
            <el-form-item :label="$t('annotation.geometry.center')">
                <el-input type="number"></el-input>
                <el-input type="number"></el-input>
                <el-input type="number"></el-input>
            </el-form-item>
        </el-form>
    </el-collapse-item>
</template>

<script>
export default {
    name: 'geometryPanel',
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

<style scoped>
#seniorBtn {
    border: 0px;
    padding: 0px;
}
</style>