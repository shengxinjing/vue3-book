<template>
  <!-- <TeleportDemo /> -->
<!-- 
  <h1>{{state.count}} * 2={{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
 -->

  <!-- <ul>
    <FragmentDemo :data="[5,3,1,6,9,4,2,8]" />
  </ul> -->
  <SuspenseDemo  />

</template>
<script>
import {reactive,computed,ref,onMounted} from 'vue'
import FragmentDemo from './components/FragmentDemo.vue'
import TeleportDemo from './components/TeleportDemo.vue'
import SuspenseDemo from './components/SuspenseDemo.vue'

export default {
  components:{
    FragmentDemo,
    TeleportDemo,
    SuspenseDemo
  },
  setup(){

    const {state,double} = useCounter(1)
    const num = ref(2)
    function add(){
      state.count++
      num.value+=10
    }
    onMounted(()=>{
      console.log('mouted')
    })
    return {state,add,double,num}
  }
}

function useCounter(count,n){
    const state = reactive({
      count
    })
    const double = computed(()=>state.count*2)
    return {state,double}
}
</script>
