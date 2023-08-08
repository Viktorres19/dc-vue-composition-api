<template>
	<teleport to="body">
		<div
			class="modal"
		>
			<h2><slot name="title" /></h2>
			<slot />
			<pre>{{newTitle}}</pre>
			<div>{{props.interestingTitle}}</div>
			<button>Hide modal</button>
		</div>
	</teleport>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

const newTitle = slots.title()[0].children

/*const props = defineProps(['interestingTitle'])*/
const props = defineProps({
	interestingTitle: {
		type: String,
		default: 'No title specified'
	}
})
</script>

<style>
.modal {
	background: beige;
	padding: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
