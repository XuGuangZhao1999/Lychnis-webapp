<template>
    <el-card>
        <template #header>
            <div class="cardHeader">
                <span>{{ $t('animation.all_frames.title') }}</span>
            </div>
        </template>
        <el-slider v-model="frameIndex" show-input size="small"/>
        <el-button type="text">{{ $t('animation.all_frames.previous_keyframe') }}</el-button>
        <el-button type="text">{{ $t('animation.all_frames.next_keyframe') }}</el-button>
    </el-card>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'allFramesPanel',
    props: {
        name: {
            type: String
        }
    },
    setup() {
        const frameIndex = ref(0)

        return {
            frameIndex
        }
    }
}
</script>

<style>

</style>