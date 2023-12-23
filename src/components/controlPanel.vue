<template>
    <el-tabs id="tabs" type="border-card" stretch="true">
        <el-tab-pane label="标注">
            <el-collapse>
                <el-collapse-item title="设置" name="1">
                    <el-form label-position="right">
                        <el-form-item label="标注通道">
                            <el-select>
                                <el-option label="通道1" value="1"/>
                                <el-option label="通道2" value="2"/>
                                <el-option label="通道3" value="3"/>
                                <el-option label="通道4" value="4"/>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标注类型">
                            <el-select>
                                <el-option label="线段" value="line"/>
                                <el-option label="点" value="point"/>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="切片厚度">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="用户名">
                            <el-input></el-input>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template v-slot:title>
                        <span>位置与坐标</span>
                        <el-button id="seniorBtn" type="text">高级</el-button>
                    </template>
                    <el-form label-position="right">
                        <el-form-item label="数据块大小">
                            <el-select>
                                <el-option label="256x256x256"></el-option>
                            </el-select>
                            <el-input type="number"></el-input>
                            <el-input type="number"></el-input>
                        </el-form-item>
                        <el-form-item label="中心">
                            <el-input type="number"></el-input>
                            <el-input type="number"></el-input>
                            <el-input type="number"></el-input>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="当前节点信息" name="3">
                    <el-form label-position="right">
                        <el-form-item label="编号">
                            <el-input></el-input>
                            <el-input placeholder="搜索的节点编号"></el-input>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select>
                                <el-option label="None" value="1"/>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="信息">
                            <el-input placeholder="输入完成后按回车键"></el-input>
                            <el-select>
                                <el-option label="Sure" value="1"/>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="创建者">
                            <el-input type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="颜色">
                            <el-input type="text"></el-input>
                            <el-color-picker v-model="nodeColor"/>
                        </el-form-item>
                        <el-form-item label="坐标">
                            <el-input type="text"></el-input>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item name="4">
                    <template v-slot:title>
                        <span>特殊节点</span>
                        <el-button id="seniorBtn" type="text">过滤</el-button>
                        <el-button id="seniorBtn" type="text">弹出</el-button>
                    </template>
                    <el-table border>
                        <el-table-column label="编号"></el-table-column>
                        <el-table-column label="信息"></el-table-column>
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="动画">
            <el-collapse>
                <el-collapse-item title="关键帧" name="5">
                    <template v-slot:title>
                        <span>关键帧</span>
                        <el-button id="seniorBtn" type="text">新建</el-button>
                        <el-button id="seniorBtn" type="text">修改</el-button>
                    </template>
                    <el-form label-position="right">
                        <el-form-item label="序号（关键帧）">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="序号（所有帧）">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="创建时间">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="时长（帧数）">
                            <el-input placeholder="0"></el-input>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input></el-input>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="所有关键帧" name="6">
                    <el-table border>
                        <el-table-column label="序号"></el-table-column>
                        <el-table-column label="创建时间"></el-table-column>
                        <el-table-column label="备注"></el-table-column>
                    </el-table>
                </el-collapse-item>
                <el-collapse-item title="所有帧" name="7">
                    <el-slider v-model="frameIndex" show-input size="small"/>
                    <el-button type="text">上一个关键帧</el-button>
                    <el-button type="text">下一个关键帧</el-button>
                </el-collapse-item>
                <el-collapse-item title="脚本" name="8">
                    <el-form label-position="right">
                        <el-form-item>
                            <el-input></el-input>
                            <el-button type="text">浏览</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="text">导出模版</el-button>
                            <el-button type="text">重新加载</el-button>
                            <el-button type="text">添加当前状态</el-button>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </el-collapse>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name: 'controlPanel',
    data() {
        return {
            nodeColor: '#00FF00',
            frameIndex: 0,
        }
    },
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

.el-tabs__item {
    background-color: #545C64 !important;
    color: white !important;
    border-top: 2px solid #FFFFFF !important;
}

.el-tabs__item.is-active {
    background-color: #7D8590 !important;
    border-top: 2px solid #409EFF !important;
}

.el-tabs__content {
    background-color: #7D8590 !important;
    color: white !important;
    height: calc(100% - 40px) !important;
    margin: 0px !important;
    border: 0px !important;
    padding: 0px !important;
}

#seniorBtn {
    float: right !important; 
    font-size: 14px;
}
</style>
