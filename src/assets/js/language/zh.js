export default {
    file: {
        title: '文件',
        load_project: '加载工程文件',
        save: '保存工程',
        save_as: '工程另存为...',
        open_image_file: '打开图像文件',
        open_image_as_sps: '以sps形式打开图像',
        import_nodes: '导入节点',
        import_parameters: '导入参数',
        show_image_information: '图像信息',
        export_nodes:{
            title: '导出节点',
            imaris_format: 'Imaris格式',
            lychnis_format: 'Lychnis格式',
            swc_format: 'swc格式',
            imaris_spots: 'Imaris spots格式'
        },
        export_animation: '生成动画',
        export_volume: '导出图像'
    },
    edit: {
        title: '编辑',
        move_slice_by_node: '根据节点移动脑片',
        move_selected_node: '移动选中的节点',
        create_anchor_nodes: '创建定位节点',
        delete_nodes: {
            title: '删除节点',
            selected_node: '选中的节点',
            all_nodes_on_selected_fiber: '选中的纤维上所有节点',
            all_nodes_of_selected_type: '选中节点类型的所有节点',
            all_nodes: '所有节点'
        },
        build_node_groups: '生成节点分组',
        review_nodes: '节点检查',
        move_to_pending_node: '移动到下一个待标注节点',
    },
    view: {
        title: '视图',
        show_hide_all_fibers: '显示/隐藏所有节点',
        show_hide_unselected_fibers: '显示/隐藏未选中的节点',
        show_hide_current_volume: '显示/隐藏当前图像块',
        show_hide_roi_volumes: '显示/隐藏ROI数据块',
        roi_settings: 'ROI设置',
        toggle_auto_loading: '切换自动加载',
        display_settings: '显示设置',
        turn_on_off_annotation_mode: '开启/关闭标注模式',
    },
    help: {
        title: '帮助',
        about: '关于',
        language: '语言',
    },
    annotation: {
        title: '标注通道',
        settings: {
            title: '设置',
            annotation_channel: '标注通道',
            annotation_type: '标注类型',
            slice_thickness: '切片厚度',
            user_name: '用户名',
        },
        geometry: {
            title: '位置与坐标',
            advanced: '高级',
            block_size: '数据块大小',
            center: '中心',
        },
        selected_node: {
            title: '当前节点信息',
            node_id: '编号',
            node_type: '类型',
            message: '信息',
            creator: '创建者',
            color: '颜色',
            coordinate: '坐标',
        },
        special_nodes: {
            title: '特殊节点',
            filter: '过滤',
            pop: '弹出',
            id: '编号',
            message: '信息',
        },
        type: {
            title: '类型',
            line: '线段',
            point: '点',
            moveSelectedNode: '移动选中的节点',
        },
    },
    animation: {
        title: '动画',
        keyframe: {
            title: '关键帧',
            new: '新建',
            modify: '修改',
            index_keyframes: '序号（关键帧）',
            index_all_frames: '序号（所有帧）',
            created_time: '创建时间',
            duration_frames: '时长（帧数）*',
            notes: '备注*',
        },
        all_keyframes: {
            title: '所有关键帧',
            index: '序号',
            created_time: '创建时间',
            notes: '备注',
        },
        all_frames: {
            title: '所有帧',
            previous_keyframe: '上一个关键帧',
            next_keyframe: '下一个关键帧',
        },
        script: {
            title: '脚本',
            browse: '浏览',
            export_template: '导出模板',
            reload: '重新加载',
            insert_current_state: '添加当前状态',
        },
    },
    placeholder: {
        searchNodeId: '搜索的节点编号',
        pressEnter: "输入完成后按回车键",
    },
}