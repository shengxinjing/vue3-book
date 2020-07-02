const {ref , effect} = require('@vue/reactivity')

let count = ref(1)

effect(()=>{
    console.log('数据变化了,count是'+count.value)
})
setInterval(()=>{
    count.value++
},1000)
