<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
    <hr>
    <span>Number now is: {{ oddOrEven }}</span>
    <hr>
    <button
      @click="changeCounter(1)"
      class="counter-button"
      :class="{ 'yellow' : oddOrEven === 'odd' }"
    >
      {{ counterData.count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vAutofocus from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  },
])
const { counterData, oddOrEven, changeCounter } = useCounter()
</script>
<style scoped>
.yellow {
  background-color: yellow;
}
</style>
