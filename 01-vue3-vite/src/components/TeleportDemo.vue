<template>
<div class="confirm-modal">
    <button @click="isOpen = true">打开</button>
    <!-- 注意这一块代码 -->
    <Teleport to="#foot-container">
        <div v-if="isOpen">
          <p>底部信息底部信息底部信息底部信息底部信息底部信息</p>
          <button @click="isOpen = false">取消</button>
        </div>
    </Teleport>
</div>


</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const isOpen = ref(false)

        return {isOpen}
    }
}
</script>
