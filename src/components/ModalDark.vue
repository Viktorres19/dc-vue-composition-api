<template>
	<teleport to="body">
		<div
			v-if="modelValue"
			class="modal-dark"
		>
			<h2><slot name="title" /></h2>
			<slot />
			<pre>{{newTitle}}</pre>
			<div>{{props.interestingTitle}}</div>
			<button @click="$emit('update:modelValue', false)">Hide modal</button>
		</div>
	</teleport>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

const newTitle = slots.title()[0].children

/*const props = defineProps(['interestingTitle'])*/
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false
	},
	interestingTitle: {
		type: String,
		default: 'No title specified'
	}
})

const emit = defineEmits([
	'update:modelValue',
	/*'hideModal'*/
])

/*const handleButtonClick = () => {
	emit('update:modelValue', false)
}*/
</script>

<style>
.modal-dark {
	background: black;
	color: white;
	padding: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
