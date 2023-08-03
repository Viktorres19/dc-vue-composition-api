<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="changeCounter(-1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="changeCounter(1)" class="btn">+</button>
    </div>

    <p>This counter is: {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>

  </div>
</template>

<script setup>
// import { ref, reactive } from 'vue'
import { reactive, computed, watch } from 'vue'

/*const counter = ref(0),
      counterTitle = ref('My Counter')*/

// Non-reactive data
const appTitle = "My Amazing Counter App"

// setup reactive object
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(() => counterData.count, (newCount) => {
  if (newCount === 20) {
    alert('Way to go! You made it to 20!')
  }
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

//when you use reactive you don't need count.value
const changeCounter = amount => {
  counterData.count = counterData.count + amount
}
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
