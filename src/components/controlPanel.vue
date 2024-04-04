<!-- Control panel -->
<template>
    <el-tabs id="tabs" type="border-card" stretch="true">
        <annotationPanel></annotationPanel>
        <animationPanel></animationPanel>
    </el-tabs>
</template>

<script>
import annotationPanel from './Control/annotationPanel.vue'
import animationPanel from './Control/animationPanel.vue'

export default {
    name: 'controlPanel',
    components: {
        annotationPanel,
        animationPanel
    },
    setup() {

    }
}
</script>

<style>
#tabs {
    margin: 0px;
    border: 0px;
    padding: 0px;
    height: 100%;
    margin: 0px;
    border: 0px;
    padding: 0px;
}

.container {
    height: 100%;
    display: flex;
    justify-content: space-between;
}

span {
    display: flex;
    align-items: center;
}

.el-table {
    background-color: #3c3c3c !important;
}

.el-table th.el-table__cell {
    background-color: #3c3c3c !important;
}

.el-table thead {
    color: white !important;
}

.el-tabs__item{
    background-color: #3c3c3c !important;
    color: white !important;
    border-top: 2px solid #FFFFFF !important;
    border-bottom: 1px solid #FFFFFF !important;
}

.el-tabs__item.is-active {
    background-color: #313131 !important;
    border-top: 2px solid #f88070 !important;
}

.el-tabs__content {
    background-color: #313131 !important;
    color: white !important;
    height: calc(100% - 40px) !important;
    margin: 0px !important;
    border: 0px !important;
    padding: 0px !important;
}

.el-card {
    background-color: #313131 !important;
    color: white !important;
    --el-card-padding: 0px !important;
    /* border-top: 2px solid #FFFFFF !important;
    border-bottom: 1px solid #FFFFFF !important; */
}

.el-form {
    background-color: #313131;
}

.el-form-item {
    background-color: #313131;
}

.el-form-item__label {
    color:white !important;
}

.el-form-item--small{
    margin-bottom: 1px !important;
}

.el-input__wrapper {
    background-color: #313131 !important;
}

.el-input__inner {
    color: white !important;
}

.el-table {
    background-color: #3c3c3c;
}

span.el-table__empty-text {
    justify-content: center;
}

</style>
