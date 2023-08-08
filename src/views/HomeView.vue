<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="changeCounter(-1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="changeCounter(1)" class="btn">+</button>
    </div>

    <p>This counter is: {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>

  </div>
</template>

<script setup>
// import { ref, reactive } from 'vue'
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'
import { useCounter } from '@/use/useCounter'
import vAutofocus from '@/directives/vAutofocus'

/*const counter = ref(0),
      counterTitle = ref('My Counter')*/

// Non-reactive data
const appTitle = "My Amazing Counter App"

// access to refs
const appTitleRef = ref(null)

onBeforeMount(() => {
  console.log('onBeforeMount')
})
//we can use several onMounted for example hooks
onMounted(() => {
  //then call this ref
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`)
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})

const { counterData, oddOrEven, changeCounter } = useCounter()
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
