import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const title = ref('My title')
  const doubleCount = computed(() => count.value * 2)
  const evenOrOdd = computed(() => count.value % 2 === 0 ? 'even' : 'odd')
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, title, doubleCount, evenOrOdd, increment, decrement }
})
