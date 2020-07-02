<template>
  <h1>Supense</h1>
  <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import AsyncComponent from './AsyncComponent.vue'
import Loading from './Loading.vue'
export default {
  components:{
    AsyncComponent,
    Loading
  }
}


</script>