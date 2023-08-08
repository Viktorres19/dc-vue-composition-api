<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>Title: {{ counter.title }}</h3>
    <div>
      <button @click="counter.decrement()" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increment()" class="btn">+</button>
    </div>

    <p>This counter is: {{ counter.evenOrOdd }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" type="text" v-autofocus>
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
import { useCounterStore } from '@/stores/counter'
import vAutofocus from '@/directives/vAutofocus'

const appTitle = "My Amazing Counter App"

const appTitleRef = ref(null)

onBeforeMount(() => {
  console.log('onBeforeMount')
})

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
const counter = useCounterStore()
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
